import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input } from 'antd';
import styles from './index.less';

import Table from './Table';
import AddComponent from './Add';

import useFetch from '@/hooks/useFetch';

interface Props {}

interface CreateBarang {
  json: {};
  clear: () => void;
}

const ReturBarangComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/retur`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/inventory/retur?filter=${name}`);
    setName('');
  }, [fetchList, name]);

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const handleVisible = () => setVisible(!visible);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const onUpdateTable = () => {
    fetchList(`${REACT_APP_ENV}/admin/v1/inventory/retur`);
    window.location.reload();
  }

  const createBarang = ({ json, clear }: CreateBarang) =>
    postList(`${REACT_APP_ENV}/admin/v1/inventory/retur`, json, clear);

  return (
    <div>
      <p className={styles.title}>Inventory - Retur</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_search}
          id="name"
          type="text"
          placeholder="Search Barang"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_search} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="space-between">
        <p className={styles.title}>Retur Barang</p>
        <p className={styles.title_add} onClick={handleVisible}>
          {' '}
          + Tambah
        </p>
      </Row>
      <Table
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={error_list}
        onUpdate={()=>onUpdateTable()}
      />
      {visible ? (
        <AddComponent
          visible={visible}
          onCancel={handleVisible}
          onCreate={createBarang}
          onLoadButton={Boolean(loading_list)}
        />
      ) : null}
    </div>
  );
};

export default ReturBarangComponent;
