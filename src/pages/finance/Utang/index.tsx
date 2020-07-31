import React, { useState, useEffect, useCallback } from 'react';
import { Row, Input, Button } from 'antd';
import styles from './index.less';

import TableComponent from './Table';
import AddComponent from './Add';
import EditComponent from './Edit';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface Utang {
  url: string;
  json: {};
  clear: () => void;
}

const UtangTokoComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [id_row, setIdRow] = useState(0);
  const [id_edit, setIdEdit] = useState(0);

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/utang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/finance/utang?filter=${name}`);
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

  const createUtang = ({ url, json, clear }: Utang) => {
    postList(url, json, clear);
  };

  const editUtang = ({ url, json, clear }: Utang) => {
    postList(url, json, clear);
  };

  const acceptUtang = ({ url, json, clear }: Utang) => {
    postList(url, json, clear);
  };

  const cancelUtang = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/finance/utang/${id}/update`,
      JSON.stringify({ status: 2 }),
      handleClearUpdate,
    );
  };

  return (
    <div>
      <p className={styles.title}>Utang Toko</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Utang Toko"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row justify="space-between">
        <p className={styles.title}>Utang Antar Toko</p>
        <p className={styles.title_add} onClick={handleVisible}>
          + Tambah
        </p>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        error={error_list}
        cancel={cancelUtang}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleEdit={handleVisibleEdit}
      />

      <AddComponent
        visible={visible}
        onError={error_list}
        onCancel={handleVisible}
        onCreate={createUtang}
        onLoadButton={Boolean(isLoading_list)}
      />

      {visibleEdit ? (
        <EditComponent
          visible={visibleEdit}
          onCreate={editUtang}
          onCancel={handleClearEdit}
          id_edit={id_edit}
        />
      ) : null}

      {visibleUpdate ? (
        <UpdateComponent
          visible={visibleUpdate}
          onCancel={handleClearUpdate}
          onUpdate={acceptUtang}
          id_row={id_row}
        />
      ) : null}
    </div>
  );
};

export default UtangTokoComponent;
