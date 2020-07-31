import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import styles from './index.less';

import TableComponent from './Table';
import AddComponent from './Add';
import EditComponent from './Edit';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface Piutang {
  url: string;
  json: {};
  clear: () => void;
}

const Component: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [id_row, setIdRow] = useState(0);
  const [id_edit, setIdEdit] = useState(0);

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisible = () => setVisible(!visible);

  const handleVisibleUpdate = (id: string) => {
    setVisibleUpdate(!visibleUpdate);
    setIdRow(Number(id));
  };

  const handleVisibleEdit = (id: string) => {
    setVisibleEdit(!visibleEdit);
    setIdEdit(Number(id));
  };

  const handleClearEdit = () => {
    setVisibleEdit(false);
    setIdEdit(0);
  };

  const handleClearUpdate = () => {
    setVisibleUpdate(false);
    setIdRow(0);
  };

  const createPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const editPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const acceptPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const cancelPiutang = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/finance/piutang/${id}/update`,
      JSON.stringify({ status: 2 }),
      handleClearEdit,
    );
  };

  return (
    <div>
      <p className={styles.title}>Piutang Toko</p>
      <Row justify="space-between">
        <p className={styles.title}>Piutang Antar Toko</p>
        <p className={styles.title_add} onClick={handleVisible}>
          + Tambah
        </p>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        error={error_list}
        cancel={cancelPiutang}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleEdit={handleVisibleEdit}
      />

      <AddComponent
        visible={visible}
        onError={error_list}
        onCancel={handleVisible}
        onCreate={createPiutang}
        onLoadButton={Boolean(isLoading_list)}
      />

      {visibleEdit ? (
        <EditComponent
          visible={visibleEdit}
          onCreate={editPiutang}
          onCancel={handleClearEdit}
          id_edit={id_edit}
        />
      ) : null}

      {visibleUpdate ? (
        <UpdateComponent
          id_row={id_row}
          visible={visibleUpdate}
          onCancel={handleClearUpdate}
          onUpdate={acceptPiutang}
        />
      ) : null}
    </div>
  );
};

export default Component;
