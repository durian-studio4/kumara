import React, { useState, useMemo } from 'react';
import { Table, Card } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: [];
  loading: boolean;
  status: number;
  error: boolean;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error }) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Sales',
        key: 'id',
        dataIndex: 'nama_sales',
        ...getColumnSearchProps('nama_sales'),
      },
      {
        align: 'center',
        title: 'Setoran',
        key: 'jumlah_setoran',
        dataIndex: 'jumlah_setoran',
        ...getColumnSearchProps('jumlah_setoran'),
      },
      {
        align: 'center',
        title: 'Waktu',
        key: 'waktu',
        dataIndex: 'waktu',
        ...getColumnSearchProps('waktu'),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Card style={{ height: '50%', width: '45%' }}>
      <p className={styles.title}>Riwayat Setoran</p>
      {Boolean(error) ? <PageError status={status} /> : null}
      <Table columns={columns} dataSource={data} loading={loading} />;
    </Card>
  );
};

export default TableComponent;
