import { useState } from 'react';
import request from 'umi-request';
import Cookie from 'js-cookie';

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const token = Cookie.get('token');

  const handleFetch = async (url: string) => {
    setLoading(true);
    try {
      const fetching = await request.get(url, {
        headers: {
          Authorization: String(token),
        },
      });
      setLoading(false);
      setData(fetching.data);
    } catch (err) {
      setStatus(err.response.status);
      setIsError(true);
      setLoading(false);
    }
  };

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    try {
      const posting = await request.post(url, {
        data,
        headers: {
          'Content-Type': 'Aplication/json',
          Authorization: String(token),
        },
      });
      const result = await posting.data;
      setLoading(false);
      setIsError(false);
      setStatus(200);
      setData(result);
      clearState();
    } catch (error) {
      setLoading(false);
      setIsError(true);
      clearState();
    }
  };

  return [data, status, loading, isError, handleFetch, handlePost];
}

export default App;
