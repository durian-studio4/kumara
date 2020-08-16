import React, { useMemo, Fragment } from 'react';
import { Table } from 'antd';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
}

const TableRetur: React.FC<Props> = ({ data, loading, status, error }) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        dataIndex: 'tanggal',
        key: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        key: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Qty',
        render: ({ qty, satuan_barang }: any) => (
          <span>
            {qty} {satuan_barang}
          </span>
        ),
        key: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Keterangan',
        dataIndex: 'keterangan',
        key: 'keterangan',
        ...getColumnSearchProps('keterangan'),
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
      <Table columns={columns} dataSource={data} loading={loading} />;
    </div>
  );
};

export default TableRetur;
