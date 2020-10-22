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
  const [isRerender, setRerender] = useState(Date.now());

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
      setRerender(Date.now());
      clearState();
      message.success('success');
      return result;
    } catch (error) {
      setLoading(false);
      if (error.data) {
        message.error(error.data.message);
      }
      // setIsError(error.response.message);
    }
  };

  return [loading, isRerender, handlePost];
}

export default App;
