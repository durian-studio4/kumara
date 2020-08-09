import React, { useMemo } from 'react';
import { Table } from 'antd';

interface Props {
  data: any;
  loading: boolean;
}

const TableComponent: React.FC<Props> = ({ data, loading }) => {
  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
      },
      {
        align: 'center',
        title: 'Nama Cabang',
        key: 'nama_cabang',
        dataIndex: 'nama_cabang',
      },
      {
        align: 'center',
        title: 'Total',
        key: 'total',
        dataIndex: 'total',
      },
    ],
    [],
  );

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data} loading={loading} />;
    </div>
  );
};

export default TableComponent;
