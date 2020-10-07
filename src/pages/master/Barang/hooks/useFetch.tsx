import { useState } from 'react';
import { message } from 'antd';
import Cookie from 'js-cookie';

message.config({
  top: 100,
  duration: 5,
  maxCount: 1,
});

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFetch = async (url: string) => {
    setLoading(true);
    try {
      const fetching = await fetch(url, {
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await fetching.json();
      const result = await json;
      setData(result.data);
      setStatus(result.status_code);
      setLoading(false);
      setIsError(false);
    } catch (err) {
      setLoading(false);
      setIsError(true);
    }
  };

  const handlePost = async (url: string, data: any, clearState: () => void): Promise<any> => {
    setLoading(true);
    try {
      const posting = await fetch(url, {
        body: data,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await posting.json;
      const result = await json;
      console.log(result);
      setLoading(false);
      setIsError(false);
      // setStatus(result.status_code || 200);
      // setData(result);
      message.success('success');
      clearState();
      return result;
    } catch (error) {
      clearState();
      setLoading(false);
      setIsError(true);
    }
  };

  return [data, status, loading, isError, handleFetch, handlePost];
}

export default App;
