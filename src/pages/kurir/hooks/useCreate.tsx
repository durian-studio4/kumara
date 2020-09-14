import { useState } from 'react';
import request from 'umi-request';
import Cookie from 'js-cookie';

function App() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(Date.now());

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await request.post(url, {
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: String(Cookie.get('token')),
        },
      });
      const result = await posting;
      setLoading(false);
      setIsError(Date.now());
      clearState();
      return result;
    } catch (error) {
      console.log(error, 'error');
      console.log(error.response, 'error');
      setLoading(false);
      // setIsError(error.response.message);
    }
  };

  return [loading, isError, handlePost];
}

export default App;
