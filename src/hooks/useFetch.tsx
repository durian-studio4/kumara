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
    if (token) {
      try {
        const fetching = await fetch(url, {
          headers: {
            Authorization: String(token),
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
    } else {
      setLoading(false);
      return false;
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
