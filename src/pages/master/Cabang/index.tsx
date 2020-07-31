import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import styles from './index.less'; // import Add from './Add';

import TableComponent from './Table';
import AddComponent from './Add';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface CreateCabang {
  json: {};
  clear: () => void;
}

const KeranjangComponent: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  const [isLoading_cabang, isStatus_cabang, postCabang] = useCreate();

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/get`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatus_cabang]);

  const handleVisible = () => setVisible(!visible);
  const handleClearState = () => {
    setVisible(false);
  };

  const createCabang = ({ json, clear }: CreateCabang) => {
    postCabang(`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/create`, json, clear);
  };

  const removeCabang = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/pengaturan/cabang/${id}/delete`,
      JSON.stringify(null),
      handleClearState,
    );
  };

  return (
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Data Cabang</p>
        <Button className={styles.button} type="primary" onClick={handleVisible}>
          Tambah Cabang
        </Button>
      </Row>
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        remove={removeCabang}
        error={Boolean(error_list)}
      />
      <AddComponent
        visible={visible}
        onCancel={handleClearState}
        onCreate={createCabang}
        onError={isStatus_cabang}
        onLoadButton={Boolean(isLoading_cabang)}
      />
    </div>
  );
};

export default KeranjangComponent;
