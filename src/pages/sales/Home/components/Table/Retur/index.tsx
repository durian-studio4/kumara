import React, { useMemo, useEffect } from 'react';
import { Table } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {}

const TableRetur: React.FC<Props> = () => {
  const [data, status, loading, error, fetchRetur] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchRetur(`${REACT_APP_ENV}/admin/v1/inventory/retur`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = useMemo(
    () => [
      {
        title: 'No',
        dataIndex: 'id',
      },
      {
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
      },
      {
        title: 'Nama Sales',
        dataIndex: 'nama_sales',
      },
      {
        title: 'Qty',
        dataIndex: 'qty',
      },
      {
        title: 'Keterangan',
        dataIndex: 'keterangan',
      },
    ],
    [],
  );

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div style={{ marginTop: '2em' }}>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="retur-sales" defaultMessage="Retur Sales" />
      </div>
      {/* <p className={styles.title}>Retur Sales</p> */}
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data.reverse()} loading={Boolean(loading)} />
      </div>
    </div>
  );
};

export default TableRetur;
