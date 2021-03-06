import React, { useMemo } from 'react';
import { Table, Button } from 'antd';
import { format } from 'date-fns';

import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  handleVisible: (id: string) => void;
  handleVisibleEdit: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
  status,
  error,
  handleVisible,
  handleVisibleEdit,
}) => {
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
        title: 'SKU',
        dataIndex: 'sku',
        ...getColumnSearchProps('sku'),
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Qty Display',
        dataIndex: 'qty_display',
        ...getColumnSearchProps('qty_display'),
      },
      {
        align: 'center',
        title: 'Satuan Qty Display',
        dataIndex: 'satuan_display',
      },
      {
        align: 'center',
        title: 'Qty Gudang',
        dataIndex: 'qty_gudang',
        ...getColumnSearchProps('qty_gudang'),
      },
      {
        align: 'center',
        title: 'Satuan Qty Gudang',
        dataIndex: 'satuan_gudang',
      },
      {
        align: 'center',
        title: 'Stok Minimal',
        dataIndex: 'stok_minimum',
        ...getColumnSearchProps('stok_minimum'),
      },
      {
        align: 'center',
        title: 'Expired Date',
        dataIndex: 'expired_date',
        render: (props: Date) => (
          <span>{props ? format(new Date(props), 'dd/MM/yyyy') : null}</span>
        ),
        ...getColumnSearchProps('expired_date'),
      },
      {
        align: 'center',
        title: 'Status',
        dataIndex: 'expired_status',
        ...getColumnSearchProps('expired_status'),
      },
      {
        align: 'center',
        title: 'Foto Produk',
        render: ({ id }: any) => (
          <Button onClick={() => handleVisible(id)} className={styles.button} type="primary">
            Lihat
          </Button>
        ),
      },
      {
        align: 'center',
        render: ({ id }: any) => (
          <Button onClick={() => handleVisibleEdit(id)} className={styles.button} type="primary">
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
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} loading={loading} dataSource={data.reverse()} />;
    </div>
  );
};

export default TableComponent;
