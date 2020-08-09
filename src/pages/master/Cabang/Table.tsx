import React, { useState, useMemo, Fragment } from 'react';
import { Table, Button } from 'antd';

import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: [];
  loading: boolean;
  status: number;
  error: boolean;
  remove: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, remove }) => {
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
        title: 'Nama Cabang',
        key: 'nama_cabang',
        dataIndex: 'nama_cabang',
        ...getColumnSearchProps('nama_cabang'),
      },
      {
        align: 'center',
        render: (props: any) => (
          <Fragment>
            <Button id={props.id} onClick={() => remove(props.id)} type="primary" danger>
              Delete
            </Button>
          </Fragment>
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
