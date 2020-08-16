import React, { useState, useMemo } from 'react';
import { Table, Card, Button } from 'antd';

import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: [];
  loading: boolean;
  status: number;
  error: boolean;
  handleVisible: (id: any) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, handleVisible }) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
      },
      {
        align: 'center',
        title: 'Keterangan pengeluaran',
        key: 'keterangan',
        dataIndex: 'keterangan',
        ...getColumnSearchProps('keterangan'),
      },
      {
        align: 'center',
        title: 'Total',
        key: 'total',
        dataIndex: 'total',
        ...getColumnSearchProps('total'),
      },
      {
        align: 'center',
        render: ({ id }: any) => (
          <Button onClick={() => handleVisible(id)} type="primary">
            Edit
          </Button>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <Card style={{ height: '50%', width: '45%' }}>
      <p className={styles.title}>Pengeluaran Operational</p>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </div>
    </Card>
  );
};

export default TableComponent;
