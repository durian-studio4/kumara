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
  handleVisibleUpdate: (id: string, order: string) => void;
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

  for (let key in data.item) {
    data_array.push({
      id_order: key,
      id: data.item[key][0].id,
      nama_suplier: data.item[key][0].nama_suplier,
      tanggal: data.item[key][0].tanggal,
      total: data.item[key][0].total,
      confirm_sales: data.item[key][0].confirm_sales,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Id',
        dataIndex: 'id',
        defaultSortOrder: 'ascend',
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
        render: ({ id_order, id }: any) => (
          <Button
            type="primary"
            className={styles.button}
            onClick={() => handleVisibleUpdate(id_order, id)}
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
      <Table columns={columns} loading={loading} dataSource={data_array} />;
    </div>
  );
};

export default TableComponent;
