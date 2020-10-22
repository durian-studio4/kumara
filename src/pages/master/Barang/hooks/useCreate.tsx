import { useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
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
      const posting = await axios({
        method: 'post',
        baseURL: url,
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: String(Cookie.get('token')),
        },
      });
      const result = await posting.data;
      setLoading(false);
      setIsError(Date.now());
      clearState();
      message.success('success');
      return result;
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message);
      }
      setLoading(false);
    }
  };

  const handleUpdate = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await axios({
        method: 'post',
        baseURL: url,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: String(Cookie.get('token')),
        },
      });
      const result = await posting.data;
      setLoading(false);
      setIsError(Date.now());
      clearState();
      message.success('success');
      return result;
    } catch (error) {
      setLoading(false);
      if (error.response) {
        message.error(error.response.data.message);
      }
    }
  };

  return [loading, isError, handlePost, handleUpdate];
}

export default App;
