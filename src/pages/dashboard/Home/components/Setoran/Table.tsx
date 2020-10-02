import React, { useMemo } from 'react';
import { Table } from 'antd';

interface Props {
  data: any;
  isLoading: boolean;
}

const TableComponent: React.FC<Props> = ({ data, isLoading }) => {
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
      <Table columns={columns} dataSource={data.reverse()} loading={isLoading} />;
    </div>
  );
};

export default TableComponent;
