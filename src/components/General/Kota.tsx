import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';
import styles from './styles.less';

const Option = AutoComplete.Option;

interface Props {
  id: string;
  value: string;
  onSelect: (value: any, e: any) => void;
  onChange: (value: string) => void;
  onClear: () => void;
  filter: any;
}

const KotaComponent: React.FC<Props> = ({ value, id, onSelect, onChange, onClear, filter }) => {
  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 50);
    return () => clearTimeout(timeOut);
  }, [filter]);

  useEffect(() => {
    onClear();
  }, [filter]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/general/kota?id_provinsi=${filter}`);
      const json = await fetching.json();
      const result = await json;
      setData(result.data);
      setLoading(false);
      return result;
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <div className={styles.auto_complete}>
      <AutoComplete
        id={id}
        value={value}
        filterOption={(inputValue, option) =>
          option.props.children.toLowerCase().includes(inputValue.toLowerCase())
        }
        onSelect={onSelect}
        disabled={isLoading}
        onChange={onChange}
        style={{ width: '100%' }}
        placeholder="Isi Kota"
      >
        {dataSource.map((val: any) => (
          <Option key={val.id}>{val.kota}</Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default KotaComponent;
