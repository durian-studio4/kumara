import React, { useState, useMemo } from 'react';
import { Table } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  handleVisible: (e: string) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, handleVisible }) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal Transaksi',
        dataIndex: 'tanggal',
        key: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Pembeli',
        dataIndex: 'pembeli',
        key: 'pembeli',
        ...getColumnSearchProps('pembeli'),
      },
      {
        align: 'center',
        title: 'No. Invoice',
        key: 'invoice',
        render: (props: any) => (
          <span className={styles.span} onClick={() => handleVisible(props.id)}>
            {props.invoice}
          </span>
        ),
        ...getColumnSearchProps('invoice'),
      },
      {
        align: 'center',
        title: 'Total Transaksi',
        dataIndex: 'total_transaksi',
        key: 'total_transaksi',
        ...getColumnSearchProps('total_transaksi'),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return <Table columns={columns} dataSource={data} loading={loading} />;
};

export default TableComponent;
