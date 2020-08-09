import React, { useState, useMemo } from 'react';
import { Table, Row, Button } from 'antd';
import styles from './index.less';
// import { format } from 'date-fns';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  cancel: (id: string) => void;
  handleVisibleUpdate: (id: any) => void;
  handleVisibleEdit: (id: any) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  handleVisibleUpdate,
  handleVisibleEdit,
  cancel,
  loading,
  status,
  error,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
        render: (props: any) => <span>{props}</span>,
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Toko',
        key: 'nama_suplier',
        dataIndex: 'nama_suplier',
        ...getColumnSearchProps('nama_suplier'),
      },
      {
        align: 'center',
        title: 'Nama Pengambil',
        key: 'nama_pengambil',
        dataIndex: 'nama_pengambil',
        ...getColumnSearchProps('nama_pengambil'),
      },
      {
        align: 'center',
        title: 'Nama Barang',
        key: 'nama_barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Qtc / Satuan',
        key: 'qty',
        dataIndex: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Harga / Satuan',
        key: 'harga',
        dataIndex: 'harga',
        ...getColumnSearchProps('harga'),
      },
      {
        align: 'center',
        title: 'Harga Total',
        key: 'total',
        dataIndex: 'total',
        ...getColumnSearchProps('total'),
      },
      {
        align: 'center',
        title: 'Nama Sales',
        key: 'nama_sales',
        dataIndex: 'nama_sales',
        ...getColumnSearchProps('nama_sales'),
      },
      {
        key: 'id',
        align: 'center',
        render: (props: any) => (
          <>
            {props.status === 0 ? (
              <Row justify="space-around">
                <Button
                  className={styles.button}
                  onClick={() => handleVisibleUpdate(props.id)}
                  type="primary"
                >
                  Selesai
                </Button>
                <Button
                  className={styles.button}
                  onClick={() => handleVisibleEdit(props.id)}
                  type="primary"
                >
                  Edit
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
            {props.status === 1 ? <p style={{ color: '#1890ff' }}>Selesai</p> : null}
            {props.status === 2 ? <p style={{ color: '#ff4d4f' }}>Batal</p> : null}
          </>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error) {
    return <PageError status={status} />;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data} loading={loading} />;
    </div>
  );
};

export default TableComponent;
