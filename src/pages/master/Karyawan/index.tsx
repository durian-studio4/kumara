import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import styles from './index.less'; // import Add from './Add';

import TableComponent from './Table';
import AddComponent from './Add';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface CreateKaryawan {
  json: {};
  clear: () => void;
}

export interface EditKaryawan {
  url: string;
  json: {};
  clear: () => void;
}

const KaryawanComponent: React.FC<Props> = () => {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [id_update, setIdUpdate] = useState(0);

  const [isLoading_karyawan, isStatus_karyawan, postKaryawan] = useCreate();
  const [isLoading_karyawan_update, isStatus_karyawan_update, updateKaryawan] = useCreate();

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/karyawan/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatus_karyawan, isStatus_karyawan_update]);

  const handleVisibleAdd = () => setVisibleAdd(!visibleAdd);

  const handleVisibleUpdate = (id: string) => {
    setIdUpdate(Number(id));
    setVisibleUpdate(true);
  };

  const handleVisibleUpdateCancel = () => {
    setIdUpdate(0);
    setVisibleUpdate(false);
  };

  const createKaryawan = ({ json, clear }: CreateKaryawan) => {
    postKaryawan(`${REACT_APP_ENV}/admin/v1/master/karyawan/create`, json, clear);
  };

  const editKaryawan = ({ url, json, clear }: EditKaryawan) => {
    updateKaryawan(url, json, clear);
  };

  const removeKaryawan = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/master/karyawan/${id}/delete`,
      JSON.stringify(null),
      handleVisibleUpdateCancel,
    );
  };

  return (
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Data Karyawan</p>
        <Button className={styles.button} type="primary" onClick={handleVisibleAdd}>
          Tambah Daftar
        </Button>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={Boolean(error_list)}
        remove={removeKaryawan}
        visibleUpdate={handleVisibleUpdate}
      />
      {visibleAdd ? (
        <AddComponent
          visible={visibleAdd}
          onError={Boolean(isStatus_karyawan)}
          onLoadButton={Boolean(isLoading_karyawan)}
          onCreate={createKaryawan}
          onCancel={handleVisibleAdd}
        />
      ) : null}
      {visibleUpdate ? (
        <UpdateComponent
          visible={visibleUpdate}
          onCancel={handleVisibleUpdateCancel}
          onUpdate={editKaryawan}
          onError={Boolean(isStatus_karyawan_update)}
          onLoadButton={Boolean(isLoading_karyawan_update)}
          id_update={id_update}
        />
      ) : null}
    </div>
  );
};

export default KaryawanComponent;
