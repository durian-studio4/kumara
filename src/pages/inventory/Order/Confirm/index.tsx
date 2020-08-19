import React, { useState, useEffect, useCallback } from 'react';
import { Row, message, Input, Button } from 'antd';
import styles from './index.less';

import Table from './Table';
import Detail from './Detail';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

message.config({
  top: 100,
  duration: 1,
  maxCount: 1,
});

const ConfirmComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [id_update, setIdUpdate] = useState('');
  const [id, setId] = useState('');
  const [visible_update, setVisibleUpdate] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();
  const [loading_update, time_update, postUpdate] = useCreate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time_update]);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/list?filter=${name}`);
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const handleChangeName = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const handleVisibleUpdate = (id_update: string, id: string) => {
    setIdUpdate(id_update);
    setVisibleUpdate(!visible_update);
    setId(id);
  };

  const handleClearUpdate = () => {
    setIdUpdate('');
    setId('');
    setVisibleUpdate(!visible_update);
  };

  const confirmPenerima = (id: string) => {
    postUpdate(
      `${REACT_APP_ENV}/admin/v1/inventory/order/${id}/konfirmasi`,
      JSON.stringify({ confirm_sales: 1 }),
      Confirm,
    );
    setVisibleUpdate(false);
  };

  const batalOrder = () => {
    postUpdate(
      `${REACT_APP_ENV}/admin/v1/inventory/order/${id_update}/batal`,
      JSON.stringify({ confirm_sales: 0 }),
      handleClearUpdate,
    );
  };

  const Confirm = () => {
    if (status_list === 200) {
      message.success(`Confirm Success`);
    } else {
      message.error(`Confirm Batal`);
    }
  };

  return (
    <div>
      <p className={styles.title}>Confirm Order</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_search}
          id="name"
          type="text"
          placeholder="Search Barang"
          onChange={handleChangeName}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_search} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="end">
        <p className={styles.title_add}>Approve</p>
      </Row>
      <Table
        data={data_list}
        status={Number(status_list)}
        loading={Boolean(loading_list)}
        error={error_list}
        onPenerima={confirmPenerima}
        handleVisibleUpdate={handleVisibleUpdate}
      />
      {visible_update ? (
        <Detail
          visible={visible_update}
          id_update={id_update}
          id={id}
          onLoadButton={Boolean(loading_update)}
          onConfirmOrder={confirmPenerima}
          onBatalOrder={batalOrder}
          onCancel={handleClearUpdate}
        />
      ) : null}
    </div>
  );
};

export default ConfirmComponent;
