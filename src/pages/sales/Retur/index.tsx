import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Button } from 'antd';
import styles from './index.less';

import ModalAdd from './Add';
import TableRetur from './Table';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface CreateRetur {
  url: string;
  json: {};
  clear: () => void;
}

const ReturComponent: React.FC<Props> = ({}) => {
  const [visibleAdd, setVisibleAdd] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/sales/retur`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisibleAdd = () => setVisibleAdd(!visibleAdd);

  const createRetur = ({ url, json, clear }: CreateRetur) => {
    postList(url, json, clear);
  };

  return (
    <GridContent>
      <div className={styles.row_box}>
        <p className={styles.title}>Retur Sales</p>
        <Button className={styles.button} type="primary" onClick={handleVisibleAdd}>
          Tambah Retur
        </Button>
      </div>
      <TableRetur data={data_list} loading={loading_list} status={status_list} error={error_list} />
      <ModalAdd
        visible={visibleAdd}
        onCreate={createRetur}
        onCancel={handleVisibleAdd}
        onLoadButton={Boolean(loading_list)}
        onError={Boolean(error_list)}
      />
    </GridContent>
  );
};

export default ReturComponent;
