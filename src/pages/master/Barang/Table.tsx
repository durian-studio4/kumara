import React, { useMemo, Fragment } from 'react';
import { Table, Popconfirm, Checkbox, Button, Row } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: boolean;
  remove: (id: string) => void;
  update: (id: string, value: string) => void;
  handleVisible: () => void;
  handleVisibleEdit: (id: string) => void;
  handleUpdate: () => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  handleVisible,
  handleVisibleEdit,
  handleUpdate,
  loading,
  status,
  error,
  remove,
  update,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        key: 'id',
        dataIndex: 'id',
      },
      {
        align: 'center',
        title: 'SKU/Barode',
        key: 'sku',
        dataIndex: 'sku',
        ...getColumnSearchProps('sku'),
      },
      {
        align: 'center',
        title: 'Brand',
        key: 'brand',
        dataIndex: 'brand',
        ...getColumnSearchProps('brand'),
      },
      {
        align: 'center',
        title: 'Satuan Barang',
        key: 'satuan_display',
        dataIndex: 'satuan_display',
        ...getColumnSearchProps('satuan_display'),
      },
      {
        align: 'center',
        title: 'Tipe Barang',
        key: 'type_barang',
        dataIndex: 'type_barang',
        ...getColumnSearchProps('type_barang'),
      },
      {
        align: 'center',
        title: 'Expired Date',
        key: 'expired_date',
        dataIndex: 'expired_date',
        render: (props: Date) => (
          <span>{props ? format(new Date(props), 'dd/MM/yyyy') : null}</span>
        ),
        ...getColumnSearchProps('expired_date'),
      },
      // {
      //   align: 'center',
      //   title: 'Satuan Stock',
      //   key: 'stok_minimum',
      //   dataIndex: 'stok_minimum',
      //   ...getColumnSearchProps('stok_minimum'),
      // },
      {
        align: 'center',
        title: 'PPN',
        render: (props: any) => (
          <Popconfirm
            title="Apakah Pakai PPN?"
            onConfirm={() => {
              update(props.id, '1');
            }}
            onCancel={() => {
              update(props.id, '0');
            }}
            okText="Yes"
            cancelText="No"
          >
            <Checkbox checked={props.include_ppn} />
          </Popconfirm>
        ),
      },
      {
        align: 'center',
        fixed: 'right',
        render: (props: any) => (
          <Row justify="space-around">
            <Button
              className={styles.button}
              onClick={() => handleVisibleEdit(props.id)}
              type="primary"
            >
              Edit
            </Button>
            <Button
              className={styles.button}
              onClick={() => remove(props.id)}
              type="primary"
              danger
            >
              Delete
            </Button>
          </Row>
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
      <Table columns={columns} dataSource={data.reverse()} loading={loading} scroll={{ x: 1300 }} />
      ;
    </div>
  );
};

export default TableComponent;
