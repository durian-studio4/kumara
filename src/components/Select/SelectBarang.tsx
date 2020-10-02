import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

import { Select, Spin } from 'antd';

const Option = Select.Option;

interface Props {
  address: string;
  initial?: string;
  handleChange: (value: any, option: any) => void;
  disabled?: boolean;
}

const SelectBarangComponent: React.FC<Props> = ({ address, initial, handleChange, disabled }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetching(address);
    }, 0);
    return () => clearTimeout(timeOut);
  }, [address]);

  const fetching = async (param: string) => {
    setLoading(true);
    try {
      const wait = await fetch(param, {
        headers: {
          Authorization: Cookie.get('token'),
        },
      });
      const json = await wait.json();
      const result = await json.data;
      setLoading(false);
      setData(result);
    } catch (err) {
      console.log(err.message, 'error');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
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
      disabled={disabled}
    >
      {data &&
        data.map((data, i) => {
          return (
            <Option key={data.nama_barang} id={data.id} value={data.nama_barang}>
              {data.nama_barang}
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectBarangComponent;
