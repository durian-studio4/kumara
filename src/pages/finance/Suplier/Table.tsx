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
  handleVisibleConfirm: (id: any) => void;
  handleVisibleUpdate: (id: any) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  status,
  loading,
  error,
  handleVisibleConfirm,
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
        title: 'Detail Barang',
        render: ({ id }: any) => (
          <Button type="primary" onClick={() => handleVisibleUpdate(id)}>
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
        render: (props: any) => (
          <Checkbox
            checked={props.confirm_finance}
            disabled={props.confirm_finance}
            id={String(props.id)}
            onClick={handleVisibleConfirm}
          />
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
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Suplier</p>
        <p className={styles.title_add}>Approve</p>
      </Row>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </div>
    </div>
  );
};

export default TableComponent;
