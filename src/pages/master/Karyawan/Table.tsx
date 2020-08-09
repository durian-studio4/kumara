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
  visibleUpdate: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
  error,
  status,
  visibleUpdate,
  remove,
}) => {
  const [getColumnSearchProps] = useFilterColumn();
  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No. ID',
        dataIndex: 'id',
        key: 'id',
        ...getColumnSearchProps('id'),
      },
      {
        align: 'center',
        title: 'Nama Karyawan',
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps('name'),
      },
      {
        align: 'center',
        title: 'Peranan',
        dataIndex: 'role',
        key: 'no_id',
        ...getColumnSearchProps('peranan'),
      },
      {
        align: 'center',
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        ...getColumnSearchProps('username'),
      },
      {
        align: 'center',
        render: (props: any) => (
          <Row justify="space-around">
            <Button
              className={styles.button}
              id={props.id}
              onClick={() => visibleUpdate(props.id)}
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

  if (error) {
    return <PageError status={status} />;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data} loading={loading} />;
    </div>
  );
};

export default TableComponent;
