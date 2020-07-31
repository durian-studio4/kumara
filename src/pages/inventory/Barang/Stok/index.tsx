import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input } from 'antd';
import styles from './index.less'; // import Add from './Add';

import Table from './Table';
import DetailProduk from './Detail';

import useFetch from '@/hooks/useFetch';

interface Props {}

const StokBarangComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [id_produk, setIdProduk] = useState(0);
  const [visible, setVisible] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/list?filter=${name}`);
    setName('');
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const onHandleVisible = (id: string) => {
    setIdProduk(Number(id));
    setVisible(!visible);
  };

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const onClearVisible = () => {
    setIdProduk(0);
    setVisible(false);
  };

  return (
    <div>
      <p className={styles.title}>Stok Barang</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Barang"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="space-between">
        <p className={styles.title}>Expired Date</p>
      </Row>
      <Table
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={error_list}
        handleVisible={onHandleVisible}
      />
      {visible ? (
        <DetailProduk visible={visible} id_produk={String(id_produk)} onCancel={onClearVisible} />
      ) : null}
    </div>
  );
};

export default StokBarangComponent;
