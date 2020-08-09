import React, { useMemo } from 'react';
import { Table } from 'antd';

import PageError from '@/components/PageError';

interface Props {
  data: any;
  status: number;
  isLoading: boolean;
  isError: any;
}

const TableComponent: React.FC<Props> = ({ data, status, isError, isLoading }) => {
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

  if (Boolean(isError)) {
    return (
      <div>
        <PageError status={status} />
      </div>
    );
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data} loading={isLoading} />;
    </div>
  );
};

export default TableComponent;
