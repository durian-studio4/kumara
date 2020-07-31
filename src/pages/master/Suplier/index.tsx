import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input } from 'antd';
import styles from './index.less'; // import Add from './Add';

import TableComponent from './Table';
import AddComponent from './Add';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface TambahSuplier {
  json: {};
  clear: () => void;
}

export interface EditSuplier {
  url: string;
  json: {};
  clear: () => void;
}

const SuplierComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [id_update, setIdUpdate] = useState(0);

  const [isLoading_supplier, isStatus_supplier, postSupplier] = useCreate();
  const [isLoading_supplier_update, isStatus_supplier_update, updateSupplier] = useCreate();

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/suplier/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatus_supplier]);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/master/suplier/list?filter=${name}`);
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

  const tambahSupplier = ({ json, clear }: TambahSuplier) => {
    postSupplier(`${REACT_APP_ENV}/admin/v1/master/suplier/create`, json, clear);
  };

  const editSupplier = ({ url, json, clear }: EditSuplier) => {
    updateSupplier(url, json, clear);
  };

  const removeSupplier = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/master/suplier/${id}/delete`,
      JSON.stringify,
      handleVisibleUpdateCancel,
    );
  };

  return (
    <div>
      <p className={styles.title}>Data Suplier</p>
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
        remove={removeSupplier}
        onUpdate={handleVisibleUpdate}
      />
      {visibleAdd ? (
        <AddComponent
          visible={visibleAdd}
          onCreate={tambahSupplier}
          onCancel={handleVisibleAdd}
          onLoadButton={Boolean(isLoading_supplier)}
          onError={isStatus_supplier}
        />
      ) : null}
      {visibleUpdate ? (
        <UpdateComponent
          visible={visibleUpdate}
          onCancel={handleVisibleUpdateCancel}
          onUpdate={editSupplier}
          onError={isStatus_supplier_update}
          onLoadButton={Boolean(isLoading_supplier_update)}
          id_update={id_update}
        />
      ) : null}
    </div>
  );
};

export default SuplierComponent;
