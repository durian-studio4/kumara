import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';

import styles from './styles.less';

const Option = AutoComplete.Option;

interface Props {
  id?: string;
  value?: string;
  onSelect?: (value: any, e: any) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  filter?: any;
}

const KelurahanComponent: React.FC<Props> = ({
  value,
  id,
  onSelect,
  onChange,
  onClear,
  filter,
}) => {
  const [text, setText] = useState('');
  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleFetch();
    }, 50);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/general/kelurahan?id_kecamatan=${text}`,
      );
      const json = await fetching.json();
      const result = await json;
      setData(result.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  if (filter !== text) {
    setText(filter);
    setData([]);
    onClear();
  }

  return (
    <div className={styles.auto_complete}>
      <AutoComplete
        id={id}
        value={value}
        filterOption={(inputValue, option) =>
          option.props.children.toLowerCase().includes(inputValue.toLowerCase())
        }
        onSelect={onSelect}
        onChange={onChange}
        disabled={isLoading}
        style={{ width: '100%' }}
        placeholder="Isi Kelurahan"
      >
        {dataSource.map((val: { id: string; kelurahan: string }) => (
          <Option key={val.id}>{val.kelurahan}</Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default KelurahanComponent;
