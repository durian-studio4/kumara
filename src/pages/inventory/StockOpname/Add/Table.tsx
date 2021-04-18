import React, { useMemo } from 'react';
import { Table, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

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
}) => {
  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'left',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
      },
      {
        align: 'center',
        title: 'Qty',
        dataIndex: 'operator_name',
        render: (value, item) => (
          <span>{item.qty_gudang + item.qty_display}</span>
        ),
      },
      {
        align: 'center',
        title: 'Harga Jual',
        dataIndex: 'harga_jual',
        render: (props) => (
          <span>Rp{props}</span>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} loading={loading} dataSource={data} />;
    </div>
  );
};

export default TableComponent;
