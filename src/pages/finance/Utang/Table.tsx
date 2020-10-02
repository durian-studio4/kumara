import React, { useMemo } from 'react';
import { Table, Row, Button } from 'antd';
// import { format } from 'date-fns';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  cancel: (id: string) => void;
  handleVisibleUpdate: (id: string) => void;
  handleVisibleEdit: (id: string) => void;
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
        render: (props: any) => <span>{props.tanggal}</span>,
        ...getColumnSearchProps('tanggal'),
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
        title: 'Nama Barang',
        key: 'nama_barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Toko / Supplier',
        key: 'suplier',
        dataIndex: 'suplier',
        ...getColumnSearchProps('suplier'),
      },
      {
        align: 'center',
        title: 'Qty / Pcs',
        key: 'qty',
        dataIndex: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Satuan Barang',
        key: 'satuan_barang',
        dataIndex: 'satuan_barang',
        ...getColumnSearchProps('satuan_barang'),
      },
      {
        align: 'center',
        title: 'Harga / Satuan',
        qty: 'harga',
        dataIndex: 'harga',
        ...getColumnSearchProps('harga'),
      },
      {
        align: 'center',
        title: 'Total',
        key: 'total',
        dataIndex: 'total',
        ...getColumnSearchProps('total'),
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
                  id={props.id}
                  onClick={() => handleVisibleUpdate(props.id)}
                  type="primary"
                >
                  Selesai
                </Button>
                <Button
                  className={styles.button}
                  id={props.id}
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

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data.reverse()} loading={loading} />;
    </div>
  );
};

export default TableComponent;
