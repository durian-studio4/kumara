import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import styles from './index.less';

import Table from './Table';
import AddComponent from './Add';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface CreateKonsinyasi {
  json: {};
  clear: () => void;
}

const KonsinyasiComponent: React.FC<Props> = () => {
  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/konsinyasi`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisible = () => setVisible(!visible);

  const createKonsinyasi = ({ json, clear }: CreateKonsinyasi) => {
    postList(`${REACT_APP_ENV}/admin/v1/inventory/konsinyasi`, json, clear);
  };

  return (
    <div>
      <p className={styles.title}>Konsinyasi</p>
      <Row justify="space-between">
        <p className={styles.title}>List Barang Titip Jual</p>
        <p className={styles.title_add} onClick={handleVisible}>
          + Tambah
        </p>
      </Row>
      <Table
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={error_list}
      />
      {visible ? (
        <AddComponent
          visible={visible}
          onCancel={handleVisible}
          onCreate={createKonsinyasi}
          onLoadButton={Boolean(loading_list)}
        />
      ) : null}
    </div>
  );
};

export default KonsinyasiComponent;
