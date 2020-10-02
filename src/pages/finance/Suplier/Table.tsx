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
  handleVisibleUpdate: (id: string, id_order: string, confirm: boolean) => void;
}

const TableComponent: React.FC<Props> = ({ data, status, loading, error, handleVisibleUpdate }) => {
  const [getColumnSearchProps] = useFilterColumn();

  let data_array = [];

  for (let key in data.item) {
    data_array.push({
      id_order: key,
      id: data.item[key][0].id,
      tanggal: data.item[key][0].tanggal,
      nama_suplier: data.item[key][0].nama_suplier,
      nama_barang: data.item[key][0].nama_barang,
      satuan_barang: data.item[key][0].satuan_barang,
      total: data.item[key][0].total,
      confirm_sales: data.item[key][0].confirm_sales,
      confirm_finance: data.item[key][0].confirm_finance,
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
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Satuan Barang',
        dataIndex: 'satuan_barang',
        ...getColumnSearchProps('satuan_barang'),
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
        render: ({ id, id_order, confirm_finance }: any) => (
          <Button type="primary" onClick={() => handleVisibleUpdate(id, id_order, confirm_finance)}>
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
