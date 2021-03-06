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
  handleVisibleUpdate: (order: string, confirm: boolean) => void;
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

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id_order: data[key].order_group,
      id: Number(key) + 1,
      nama_suplier: data[key].nama_supplier,
      tanggal: data[key].tanggal,
      total: data[key].total.toLocaleString(),
      confirm_sales: data[key].confirm_sales,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
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
        render: ({ id_order, confirm_sales }: any) => (
          <Button
            type="primary"
            className={styles.button}
            onClick={() => handleVisibleUpdate(id_order, confirm_sales)}
          >
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
              onPenerima(props.id_order);
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

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} loading={loading} dataSource={data_array.reverse()} />;
    </div>
  );
};

export default TableComponent;
