import React, { useMemo } from 'react';
import { Table, Popconfirm, Checkbox, Button } from 'antd';

import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  onPenerima: (id: string) => void;
  handleVisibleUpdate: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  status,
  loading,
  error,
  onPenerima,
  handleVisibleUpdate,
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
        title: 'Tanggal',
        dataIndex: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Suplier',
        dataIndex: 'nama_suplier',
        ...getColumnSearchProps('nama_suplier'),
      },
      {
        align: 'center',
        title: 'Total',
        dataIndex: 'total',
        ...getColumnSearchProps('total'),
      },
      {
        align: 'center',
        title: 'Detail Barang',
        render: ({ id }: any) => (
          <Button type="primary" className={styles.button} onClick={() => handleVisibleUpdate(id)}>
            Detail
          </Button>
        ),
      },
      {
        align: 'center',
        title: 'Penerima',
        render: (props) => (
          <Popconfirm
            title="Apakah Anda Ingin Confirm?"
            onConfirm={() => {
              onPenerima(props.id);
            }}
            okText="Yes"
            cancelText="No"
            disabled={props.confirm_sales}
          >
            <Checkbox checked={props.confirm_sales} disabled={props.confirm_sales} />
          </Popconfirm>
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
      <Table columns={columns} loading={loading} dataSource={data} />;
    </div>
  );
};

export default TableComponent;
