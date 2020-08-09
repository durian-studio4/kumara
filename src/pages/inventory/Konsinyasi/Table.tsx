import React, { useMemo } from 'react';
import { Table, Row, Button } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error }) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Quantity',
        render: (props: any) => <span>{`${props.qty} - ${props.satuan_barang}`}</span>,
      },
      {
        align: 'center',
        title: 'Harga Satuan',
        dataIndex: 'harga',
        ...getColumnSearchProps('harga'),
      },
      {
        align: 'center',
        title: 'Total Harga',
        dataIndex: 'total',
        ...getColumnSearchProps('total'),
      },
      {
        align: 'center',
        title: 'Nama Supplier',
        dataIndex: 'nama_suplier',
        ...getColumnSearchProps('nama_suplier'),
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
                  // onClick={handleVisibleConfirm}
                  type="primary"
                >
                  Selesai
                </Button>
                <Button
                  className={styles.button}
                  // onClick={() => cancel(props.id)}
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
