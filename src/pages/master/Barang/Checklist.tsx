import React, { useState, useEffect } from 'react';
import { Checkbox, Row } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

import PageLoading from '@/components/PageLoading';

interface Props {
  onChange?: (e: any) => void;
  onDisabled?: boolean;
}

const Checklist: React.FC<Props> = ({ onChange, onDisabled }) => {
  const [item_checkbox, setItem] = useState([]);
  const [item_loading, setItemLoading] = useState(false);
  const [item_error, setItemError] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchItem();
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);

  const fetchItem = async () => {
    setItemLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/master/barang/satuanBarang`, {
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await fetching.json();
      const result = await json;
      setItem(result.data);
      setItemLoading(false);
    } catch (err) {
      setItemLoading(false);
      setItemError(err);
    }
  };

  const renderItem = () => {
    if (item_loading) {
      return <PageLoading />;
    } else if (item_error) {
      return 'An Error Occured';
    } else {
      return item_checkbox.map(({ satuan, id }) => (
        <div className={styles.box3} key={id}>
          <div className={styles.group} style={{ padding: '0.5em' }}>
            <Checkbox
              id={`item_${String(satuan).toLowerCase()}`}
              disabled={onDisabled}
              onChange={onChange}
            >
              {satuan}
            </Checkbox>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className={styles.box5}>
      <Row>{renderItem()}</Row>
    </div>
  );
};

export default Checklist;
