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
  effect?: any;
}

const AutoSuplierComponent: React.FC<Props> = ({ value, onSelect, onChange, id, effect }) => {
  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/master/suplier/list`, {
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
        style={{ width: '100%' }}
        value={value}
        filterOption={(inputValue, option) =>
          option.props.children.toLowerCase().includes(inputValue.toLowerCase())
        }
        onSelect={onSelect}
        onChange={onChange}
        disabled={isLoading}
        placeholder="Isi Suplier"
      >
        {dataSource.map((val) => (
          <Option key={val.id}>{val.name}</Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default AutoSuplierComponent;
