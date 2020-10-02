import React, { useState, useMemo } from 'react';
import { Table, Row, Button } from 'antd';

import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  cancel: (id: string) => void;
  handleVisibleUpdate: (e: any) => void;
  handleVisibleConfirm: (e: any) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
  status,
  error,
  handleVisibleUpdate,
  handleVisibleConfirm,
  cancel,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id: data[key].id,
      tanggal: data[key].tanggal,
      nama_pembeli: data[key].pembeli.name,
      invoice: data[key].invoice,
      nama_sales: data[key].nama_sales,
      nama_bank: data[key].nama_bank,
      status_pembayaran: data[key].status_pembayaran,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal Transaksi',
        key: 'tanggal',
        dataIndex: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Pembeli',
        key: 'nama_pembeli',
        dataIndex: 'nama_pembeli',
        ...getColumnSearchProps('nama_pembeli'),
      },
      {
        align: 'center',
        title: 'No. Invoice',
        key: 'invoice',
        render: (props: any) => (
          <span className={styles.span} onClick={() => handleVisibleUpdate(props.id)}>
            {props.invoice}
          </span>
        ),
        ...getColumnSearchProps('invoice'),
      },
      {
        align: 'center',
        title: 'Nama Bank',
        key: 'nama_bank',
        dataIndex: 'nama_bank',
        ...getColumnSearchProps('nama_bank'),
      },
      {
        align: 'center',
        title: 'Nama Sales',
        key: 'nama_sales',
        dataIndex: 'nama_sales',
        ...getColumnSearchProps('nama_sales'),
      },
      {
        align: 'center',
        title: 'Status',
        key: 'status_pembayaran',
        render: (props: any) => (
          <>
            {props.status_pembayaran === 0 ? (
              <Row justify="space-around">
                <Button
                  className={styles.button}
                  id={props.id}
                  onClick={() => handleVisibleConfirm(props.id)}
                  type="primary"
                >
                  Selesai
                </Button>
                <Button
                  className={styles.button}
                  onClick={() => cancel(props.id)}
                  type="primary"
                  danger
                >
                  Batal
                </Button>
              </Row>
            ) : null}
            {props.status_pembayaran === 1 ? <p style={{ color: '#1890ff' }}>Selesai</p> : null}
            {props.status_pembayaran === 2 ? <p style={{ color: '#ff4d4f' }}>Batal</p> : null}
          </>
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
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data_array.reverse()} loading={loading} />;
    </div>
  );
};

export default TableComponent;
