import { useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'umi';
import request from 'umi-request';
import Cookie from 'js-cookie';

message.config({
  top: 100,
  duration: 1,
  maxCount: 1,
});

function App() {
  const history = useHistory();

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
      if (err.response) {
        setStatus(err.response.status);
      }
      if (err.data) {
        message.error(err.data.message);
      }
      if (err.data && err.data.error === 'Invalid token id') {
        message.error('Sesi Telah Habis');
        history.push('/user/login');
      }
    }
  };

  const handlePost = async (url: string, data: any, clearState: () => void) => {
    setLoading(true);
    setIsError(false);
    setStatus(200);
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
      message.success('success');
      return posting.data;
    } catch (error) {
      setLoading(false);
      clearState();
      if (error.data) {
        setIsError(error.data.message);
        setStatus(error.data.status);
        message.error(error.data.message);
      }
    }
  };

  return [data, status, loading, isError, handleFetch, handlePost];
}

export default App;
