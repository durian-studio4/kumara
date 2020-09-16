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
      setIsError(false);
      setStatus(200);
      setData(fetching.data);
      return fetching.data;
    } catch (err) {
      setLoading(false);
      setIsError(true);
      setStatus(err.response.status);
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
      setIsError(false);
      setStatus(200);
      setData(result);
      setLoading(false);
      clearState();
      return posting.data;
    } catch (error) {
      setIsError(error.data.message);
      setStatus(error.data.status);
      setLoading(false);
      clearState();
    }
  };

  return [data, status, loading, isError, handleFetch, handlePost];
}

export default App;
