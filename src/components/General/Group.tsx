import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import { Select } from 'antd';

const Option = Select.Option;

interface Props {
  initial?: string;
  handleChange?: (value: any, option: any) => void;
}

const GroupComponent: React.FC<Props> = ({ initial, handleChange }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/master/pembeli/grup`, {
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await fetching.json();
      const result = await json;
      setData(result.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <Select
      labelInValue
      defaultValue={{ key: initial || 'Mohon Pilih' }}
      style={{
        width: '100%',
        minHeight: '2em',
      }}
      onChange={handleChange}
      loading={loading}
    >
      {data &&
        data.map((arr) => {
          return (
            <Option key={arr.id} id={arr.id} value={arr.pembeli_grup}>
              {arr.pembeli_grup}
            </Option>
          );
        })}
    </Select>
  );
};

export default GroupComponent;
