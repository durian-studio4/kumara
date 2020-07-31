import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input } from 'antd';
import styles from './index.less'; // import Add from './Add';

import TableComponent from './Table';
import AddComponent from './Add';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

export interface TambahPembeli {
  json: {};
  clear: () => void;
}

export interface EditPembeli {
  url: string;
  json: {};
  clear: () => void;
}

interface Props {}

const PelangganComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [id_update, setIdUpdate] = useState(0);

  const [isLoading_pembeli, isStatus_pembeli, postPembeli] = useCreate();
  const [isLoading_pembeli_update, isStatus_pembeli_update, updatePembeli] = useCreate();

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/pembeli/list`);
    }, 0);
    return () => clearTimeout(timeOut);
  }, [isStatus_pembeli]);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/master/pembeli/list?filter=${name}`);
    setName('');
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const handleVisibleAdd = () => setVisibleAdd(!visibleAdd);
  const handleVisibleUpdate = (id: string) => {
    setIdUpdate(Number(id));
    setVisibleUpdate(true);
  };

  const handleVisibleUpdateCancel = () => {
    setIdUpdate(0);
    setVisibleUpdate(false);
  };

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const tambahPembeli = ({ json, clear }: TambahPembeli) => {
    postPembeli(`${REACT_APP_ENV}/admin/v1/master/pembeli/create`, json, clear);
  };

  const editPembeli = ({ url, json, clear }: EditPembeli) => {
    updatePembeli(url, json, clear);
  };

  const removePembeli = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/master/pembeli/${id}/delete`,
      JSON.stringify,
      handleVisibleUpdateCancel,
    );
  };

  return (
    <div>
      <p className={styles.title}>Data Pelanggan</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name_barang"
          type="text"
          placeholder="Search Pelanggan"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="end">
        <p className={styles.title_add} onClick={handleVisibleAdd}>
          + Tambah
        </p>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={Boolean(error_list)}
        remove={removePembeli}
        onUpdate={handleVisibleUpdate}
      />
      {visibleAdd ? (
        <AddComponent
          visible={visibleAdd}
          onCreate={tambahPembeli}
          onCancel={handleVisibleAdd}
          onLoadButton={Boolean(isLoading_pembeli)}
          onError={isStatus_pembeli}
        />
      ) : null}
      {visibleUpdate ? (
        <UpdateComponent
          visible={visibleUpdate}
          onCancel={handleVisibleUpdateCancel}
          onUpdate={editPembeli}
          onError={isStatus_pembeli_update}
          onLoadButton={Boolean(isLoading_pembeli_update)}
          id_update={id_update}
        />
      ) : null}
    </div>
  );
};

export default PelangganComponent;
