import React, { useMemo } from 'react';
import { Table, Row, Button } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: boolean;
  cancel: (id: string) => void;
  handleVisibleUpdate: (e: any) => void;
  handleVisibleConfirm: (e: any) => void;
}

const TableRetur: React.FC<Props> = ({
  data,
  loading,
  error,
  status,
  cancel,
  handleVisibleUpdate,
  handleVisibleConfirm,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id: data[key].id,
      tanggal: data[key].tanggal,
      pembeli: data[key].pembeli.name,
      tempo: data[key].tempo,
      total_harga: data[key].total_harga,
      invoice: data[key].invoice,
      nama_sales: data[key].nama_sales,
      status_pembayaran: data[key].status_pembayaran,
    });
  }

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
        title: 'Nama Pembeli',
        key: 'pembeli',
        dataIndex: 'pembeli',
        ...getColumnSearchProps('pembeli'),
      },
      {
        align: 'center',
        title: 'No. Invoice',
        key: 'invoice',
        render: (props: any) => (
          <span className={styles.span} id={props.id} onClick={handleVisibleUpdate}>
            {props.invoice}
          </span>
        ),
        ...getColumnSearchProps('invoice'),
      },
      {
        align: 'center',
        title: 'Total Harga',
        key: 'total_harga',
        dataIndex: 'total_harga',
        ...getColumnSearchProps('total_harga'),
      },
      {
        align: 'center',
        title: 'Waktu Jatuh Tempo',
        key: 'tempo',
        dataIndex: 'tempo',
        ...getColumnSearchProps('tempo'),
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
        title: 'Status Pembayaran',
        key: 'status_pembayaran',
        render: (props: any) => (
          <>
            {props.status_pembayaran === 0 ? (
              <Row justify="space-around">
                <Button
                  className={styles.button}
                  id={props.id}
                  onClick={handleVisibleConfirm}
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
            {props.status_pembayaran === 1 ? (
              <p className={styles.p} style={{ color: '#1890ff' }}>
                Selesai
              </p>
            ) : null}
            {props.status_pembayaran === 2 ? (
              <p className={styles.p} style={{ color: '#ff4d4f' }}>
                Batal
              </p>
            ) : null}
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
    <div>
      <p className={styles.title}>List Pembayaran Tempo</p>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data_array} loading={loading} />
      </div>
    </div>
  );
};

export default TableRetur;
