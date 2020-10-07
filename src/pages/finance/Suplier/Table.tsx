import React, { useState, useMemo } from 'react';
import { Table, Row, Button, Checkbox } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: boolean;
  handleVisibleUpdate: (id_order: string, confirm: boolean) => void;
}

const TableComponent: React.FC<Props> = ({ data, status, loading, error, handleVisibleUpdate }) => {
  const [getColumnSearchProps] = useFilterColumn();

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id_order: data[key].order_group,
      id: Number(key) + 1,
      tanggal: data[key].tanggal,
      nama_suplier: data[key].nama_supplier,
      total: data[key].total,
      confirm_sales: data[key].confirm_sales,
      confirm_finance: data[key].confirm_finance,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
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
        render: (props) => <p>{props ? Number(props).toLocaleString() : null}</p>,
        ...getColumnSearchProps('total'),
      },
      {
        align: 'center',
        title: 'Detail Barang',
        render: ({ id_order, confirm_finance }: any) => (
          <Button type="primary" onClick={() => handleVisibleUpdate(id_order, confirm_finance)}>
            Detail
          </Button>
        ),
      },
      {
        align: 'center',
        title: 'Penerima',
        render: (props: any) => (
          <span>
            <Checkbox checked={props.confirm_sales} disabled={true} />
          </span>
        ),
      },
      {
        align: 'center',
        title: 'Finance',
        render: (props: any) => <Checkbox checked={props.confirm_finance} disabled={true} />,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Suplier</p>
        <p className={styles.title_add}>Approve</p>
      </Row>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data_array.reverse()} loading={loading} />
      </div>
    </div>
  );
};

export default TableComponent;
