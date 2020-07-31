import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { AutoComplete } from 'antd';
import styles from './index.less';

const Option = AutoComplete.Option;

interface Props {
  value: any;
  onSelect: (value: any, e: any) => void;
  onChange: (value: string) => void;
  id: string;
}

const AutoBarangComponent: React.FC<Props> = ({ value, onSelect, onChange, id }) => {
  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/master/barang/listgroup`, {
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
    }
  };

  return (
    <div className={styles.auto_complete}>
      <AutoComplete
        id={id}
        data-testid={id}
        style={{ width: '100%' }}
        value={value}
        filterOption={(inputValue, option) =>
          option.props.children.toLowerCase().includes(inputValue.toLowerCase())
        }
        onSelect={onSelect}
        onChange={onChange}
        disabled={isLoading}
        placeholder="Isi Barang"
      >
        {dataSource.map((val, i) => (
          <Option key={i} id={val.id}>
            {val.nama_barang}
          </Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default AutoBarangComponent;
