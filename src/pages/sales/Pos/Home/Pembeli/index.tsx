import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import styles from './index.less';

import { AutoComplete } from 'antd';

const Option = AutoComplete.Option;

interface Props {
  value?: string;
  onSelect?: (value: any, e: any) => void;
  onChange?: (value: string) => void;
  id?: string;
}

const PembeliComponent: React.FC<Props> = ({ value, onSelect, onChange, id }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/master/pembeli/list`, {
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
        disabled={isLoading}
        onSelect={onSelect}
        onChange={onChange}
        placeholder="Isi Pembeli"
      >
        {dataSource.map((val: { id: string; name: string }) => (
          <Option key={val.id}>{val.name}</Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default PembeliComponent;
