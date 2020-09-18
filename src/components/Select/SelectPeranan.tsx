import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

import { Select } from 'antd';

const Option = Select.Option;

interface Props {
  initial?: string;
  handleChange: (value: any, option: any) => void;
  disabled?: boolean;
}

const SelectAllComponent: React.FC<Props> = ({ initial, handleChange, disabled }) => {
  const [data, setData] = useState([
    {
      id: -1,
      role: 'Global',
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetching();
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);

  const fetching = async (param: string) => {
    setLoading(true);
    try {
      const wait = await fetch(`${REACT_APP_ENV}/admin/v1/pengaturan/role/get`, {
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await wait.json();
      const result = await json.data;
      setLoading(false);
      setData((state) => [...state, ...result]);
    } catch (err) {
      console.log(err.message, 'error');
      setLoading(false);
    }
  };

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
      disabled={disabled}
    >
      {data &&
        data.map((data) => {
          return (
            <Option key={data.id} id={data.id} value={data.role}>
              {data.role}
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectAllComponent;
