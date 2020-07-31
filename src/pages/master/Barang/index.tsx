import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input, message } from 'antd';
import styles from './index.less';

import TableComponent from './Table';
import AddComponent from './Add';

import useFetch from './hooks/useFetch';
import useCreate from '@/hooks/useCreate';

message.config({
  top: 100,
  duration: 1,
  maxCount: 1,
});

export interface CreateBarang {
  formData: any;
  clear: () => void;
}

interface Props {}

const BarangComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');

  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(false);

  const [isLoading_barang, isStatus_barang, postBarang] = useCreate();

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/barang/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatus_barang]);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/master/barang/list?filter=${name}`);
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleVisible = () => setVisible(!visible);
  const handleClearState = () => {
    setVisible(false);
    setUpdate(false);
  };

  const handleChangeInput = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setName(value);
  };

  const createBarang = ({ formData, clear }: CreateBarang) => {
    postBarang(`${REACT_APP_ENV}/admin/v1/master/barang/create`, formData, clear);
  };

  const updateBarangPPN = (id: string, value: string) => {
    const formData = new FormData();
    formData.append('include_ppn', value);

    postList(`${REACT_APP_ENV}/admin/v1/master/barang/${id}/update`, formData, Confirm);
  };

  const removeBarang = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/master/barang/${id}/delete`,
      JSON.stringify(null),
      handleClearState,
    );
  };

  const Confirm = () => {
    if (status_list === 200) {
      message.success(`Success`);
    } else {
      message.error(`Failed`);
    }
  };

  return (
    <div>
      <p className={styles.title}>Data Barang</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Barang"
          onChange={handleChangeInput}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="end">
        <p className={styles.title_add} onClick={handleVisible}>
          + Tambah
        </p>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        error={Boolean(error_list)}
        update={updateBarangPPN}
        remove={removeBarang}
        handleVisible={handleVisible}
        handleUpdate={handleUpdate}
      />
      {visible ? (
        <AddComponent
          visible={visible}
          onCancel={handleClearState}
          onCreate={createBarang}
          onError={isStatus_barang}
          onLoadButton={Boolean(isLoading_barang)}
        />
      ) : null}
    </div>
  );
};

export default BarangComponent;
