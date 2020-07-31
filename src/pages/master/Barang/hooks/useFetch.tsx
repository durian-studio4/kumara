import { useState } from 'react';
import request from 'umi-request';
import Cookie from 'js-cookie';

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

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await request.post(url, {
        data,
        headers: {
          'Content-Type': 'multipart/form-data"',
          Authorization: String(Cookie.get('token')),
        },
      });
      const result = await posting.data;
      setLoading(false);
      setIsError(false);
      setStatus(result.status_code || 200);
      setData(result);
      clearState();
    } catch (error) {
      clearState();
      setLoading(false);
      setIsError(true);
    }
  };

  return [data, status, loading, isError, handleFetch, handlePost];
}

export default App;
