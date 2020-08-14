import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import styles from './index.less'; // import Add from './Add';

import TableComponent from './Table';
import AddComponent from './Add';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface CreateNotifikasi {
  json: {};
  clear: () => void;
}

const NotifikasiComponent: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  const [isLoading_notif, isStatus_notif, postNotif] = useCreate();

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/notifikasi/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatus_notif]);

  const handleVisible = () => setVisible(!visible);
  const handleClearState = () => {
    setVisible(false);
  };

  const createNotif = ({ json, clear }: CreateNotifikasi) => {
    postNotif(`${REACT_APP_ENV}/admin/v1/notifikasi/create`, json, clear);
  };

  const removeNotif = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/notifikasi/${id}/delete`,
      JSON.stringify(null),
      handleClearState,
    );
  };

  return (
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Data Notifikasi</p>
        <Button className={styles.button} type="primary" onClick={handleVisible}>
          Tambah Notifikasi
        </Button>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        remove={removeNotif}
        error={Boolean(error_list)}
      />
      <AddComponent
        visible={visible}
        onCancel={handleClearState}
        onCreate={createNotif}
        onError={isStatus_notif}
        onLoadButton={Boolean(isLoading_notif)}
      />
    </div>
  );
};

export default NotifikasiComponent;
