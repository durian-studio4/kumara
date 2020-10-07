import React, { useState, useEffect, useCallback } from 'react';
import { Button, Input } from 'antd';
import styles from './index.less';

import TableComponent from './Table';
import DetailComponent from './Detail';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface Suplier {
  url: string;
  json: {};
  clear: () => void;
}

const SetoranComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [visible_update, setVisibleUpdate] = useState(false);

  const [id_order, setIdOrder] = useState('');

  const [isConfirm, setIsConfirm] = useState(false);

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
    setName('');
  }, [fetchList, name]);

  const handleVisibleUpdate = (id_order: string, confirm: boolean) => {
    setIdOrder(id_order);
    setVisibleUpdate(!visible_update);
    setIsConfirm(confirm);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const handleClearUpdate = () => {
    setIdOrder('');
    setIsConfirm(false);
    setVisibleUpdate(false);
  };

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const confirmOrder = ({ url, json, clear }: Suplier) => {
    postUpdate(url, json, clear);
  };

  const cancelOrder = ({ url, json, clear }: Suplier) => {
    postUpdate(url, json, clear);
  };

  return (
    <div>
      <p className={styles.title}>Suplier</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Suplier"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <TableComponent
        data={data_list}
        status={Number(status_list)}
        loading={Boolean(loading_list)}
        error={Boolean(error_list)}
        handleVisibleUpdate={handleVisibleUpdate}
      />
      {visible_update ? (
        <DetailComponent
          visible={visible_update}
          id_order={id_order}
          isConfirm={isConfirm}
          onConfirmOrder={confirmOrder}
          onCancelOrder={cancelOrder}
          onCancel={handleClearUpdate}
          onLoadButton={Boolean(loading_update)}
        />
      ) : null}
    </div>
  );
};

export default SetoranComponent;
