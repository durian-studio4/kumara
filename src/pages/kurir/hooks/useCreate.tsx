import { useState } from 'react';
import Cookie from 'js-cookie';

function App() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(Date.now());

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await fetch(url, {
        method: 'post',
        body: data,
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = posting.json();
      const result = await json;
      setLoading(false);
      setIsError(Date.now());
      clearState();
      return result;
    } catch (error) {
      console.log(error.data, 'error');
      setLoading(false);
      // setIsError(error.response.message);
    }
  };

  return [loading, isError, handlePost];
}

export default App;
