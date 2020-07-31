import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';
import styles from './styles.less';

const Option = AutoComplete.Option;

interface Props {
  value?: string;
  onSelect?: (value: any, e: any) => void;
  onChange?: (value: string) => void;
  id?: string;
}

const ProvinsiComponent: React.FC<Props> = ({ value, onSelect, onChange, id }) => {
  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 50);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/general/provinsi`);
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
        value={value}
        filterOption={(inputValue, option) =>
          option.props.children.toLowerCase().includes(inputValue.toLowerCase())
        }
        onSelect={onSelect}
        disabled={isLoading}
        onChange={onChange}
        style={{ width: '100%' }}
        placeholder="Isi Provinsi"
      >
        {dataSource.map((val: any) => (
          <Option key={val.id} id={id}>
            {val.provinsi}
          </Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default ProvinsiComponent;
