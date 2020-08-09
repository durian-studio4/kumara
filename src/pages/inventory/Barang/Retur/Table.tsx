import React, { useMemo } from 'react';
import { Table } from 'antd';

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
        dataIndex: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Satuan Quantity',
        dataIndex: 'satuan_barang',
      },
      {
        align: 'center',
        title: 'Keterangan/Alsan',
        dataIndex: 'keterangan',
        ...getColumnSearchProps('keterangan'),
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
      <Table columns={columns} loading={loading} dataSource={data} />;
    </div>
  );
};

export default TableComponent;
