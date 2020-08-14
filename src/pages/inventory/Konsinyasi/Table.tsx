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
  onDelete: (id: string) => void;
  onSelesai: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, onDelete, onSelesai }) => {
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
        render: ({ id }: any) => (
          <Row justify="space-around">
            <Button onClick={() => onSelesai(id)} className={styles.button} type="primary">
              Selesai
            </Button>
            <Button onClick={() => onDelete(id)} className={styles.button} type="primary" danger>
              Delete
            </Button>
          </Row>
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
