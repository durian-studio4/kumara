import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

const { Option } = Select;

interface Props {
  handleChange?: (value: any, option: any) => void;
  address?: string;
  initial?: string;
  disabled?: boolean;
}

interface CabangType {
  id: string;
  nama_cabang: string;
}

const SelectCabang: React.FC<Props> = ({ handleChange, address = '', initial, disabled }) => {
  const [data, setData] = useState<CabangType[]>([]);
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

  return (
    <Select
      labelInValue
      defaultValue={{ key: initial || 'Pilih Cabang' }}
      onChange={handleChange}
      loading={loading}
      disabled={disabled}
      className={styles.main}
    >
      {data &&
        data.map((data) => {
          return (
            <Option key={data.id} id={data.id} value={data.nama_cabang}>
              {data.nama_cabang}
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectCabang;
