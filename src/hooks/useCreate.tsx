import { useState } from 'react';
import { message } from 'antd';
import request from 'umi-request';
import Cookie from 'js-cookie';

message.config({
  top: 100,
  duration: 5,
  maxCount: 1,
});

function App() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(Date.now());

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await request.post(url, {
        data,
        headers: {
          'Content-Type': 'Aplication/json',
          Authorization: String(Cookie.get('token')),
        },
      });
      const result = await posting;
      setLoading(false);
      setIsError(Date.now());
      clearState();
      return result;
    } catch (error) {
      setLoading(false);
      message.error(error.data.message);
      // setIsError(error.response.message);
    }
  };

  return [loading, isError, handlePost];
}

export default App;
