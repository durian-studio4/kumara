import React, { useMemo } from 'react';
import { Table, Button, Row } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: boolean;
  remove: (id: string) => void;
  onUpdate: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, onUpdate, remove }) => {
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
        title: 'Kode Pelanggan',
        dataIndex: 'kode',
        ...getColumnSearchProps('kode'),
      },
      {
        align: 'center',
        title: 'Nama Pembeli',
        dataIndex: 'name',
        ...getColumnSearchProps('name'),
      },
      {
        align: 'center',
        title: 'Group',
        dataIndex: 'pembeli_grup',
        ...getColumnSearchProps('pembeli_grup'),
      },
      {
        align: 'center',
        title: 'Alamat',
        dataIndex: 'alamat',
        ...getColumnSearchProps('alamat'),
      },
      {
        align: 'center',
        title: 'Jenis Kelamin',
        dataIndex: 'gender',
        ...getColumnSearchProps('gender'),
      },
      {
        align: 'center',
        title: 'NPWP',
        dataIndex: 'npwp',
        ...getColumnSearchProps('npwp'),
      },
      {
        align: 'center',
        title: 'No. Telp',
        dataIndex: 'phone',
        ...getColumnSearchProps('phone'),
      },
      {
        align: 'center',
        title: 'Email',
        dataIndex: 'email',
        ...getColumnSearchProps('email'),
      },
      {
        align: 'center',
        fixed: 'right',
        render: (props: any) => (
          <Row justify="space-around">
            <Button
              className={styles.button}
              id={props.id}
              onClick={() => onUpdate(props.id)}
              type="primary"
            >
              Edit
            </Button>
            <Button
              className={styles.button}
              id={props.id}
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
    </div>
  );
};

export default TableComponent;
