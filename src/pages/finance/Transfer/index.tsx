import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button } from 'antd';
import styles from './index.less';

import TableComponent from './Table';
import ConfirmComponent from './Confirm';
import DetailComponent from './Detail';

import useFetch from '@/hooks/useFetch';

interface Props {}

const TransferComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');

  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [id_row_confirm, setIdConfirm] = useState(0);
  const [id_row_update, setIdUpdate] = useState(0);

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/transfer`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/finance/transfer?filter=${name}`);
    setName('');
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const handleVisibleUpdate = (id: string) => {
    setVisibleUpdate(!visibleUpdate);
    setIdUpdate(Number(id));
  };

  const handleVisibleConfirm = (id: string) => {
    setVisibleConfirm(!visibleConfirm);
    setIdConfirm(Number(id));
  };

  const handleClearVisibleUpdate = () => {
    setVisibleUpdate(false);
    setIdUpdate(0);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
    setIdConfirm(0);
  };

  const acceptTransfer = () => {
    postList(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id_row_confirm}/update`,
      JSON.stringify({ status_pembayaran: 1 }),
      handleClearVisibleConfirm,
    );
  };

  const cancelTransfer = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id}/update`,
      JSON.stringify({ status_pembayaran: 2 }),
      handleClearVisibleConfirm,
    );
  };

  return (
    <div>
      <p className={styles.title}>Cek Transfer</p>

      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Transfer"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} onClick={filtering} type="primary">
          Cari
        </Button>
      </div>

      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        error={error_list}
        cancel={cancelTransfer}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleConfirm={handleVisibleConfirm}
      />
      {visibleConfirm ? (
        <ConfirmComponent
          visible={visibleConfirm}
          onCancel={handleClearVisibleConfirm}
          onUpdate={acceptTransfer}
        />
      ) : null}
      {visibleUpdate ? (
        <DetailComponent
          visible={visibleUpdate}
          onCancel={handleClearVisibleUpdate}
          idParams={id_row_update}
        />
      ) : null}
    </div>
  );
};

export default TransferComponent;
