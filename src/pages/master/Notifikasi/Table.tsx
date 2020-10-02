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
        title: 'Judul',
        key: 'judul',
        dataIndex: 'judul',
        ...getColumnSearchProps('judul'),
      },
      {
        align: 'center',
        title: 'Deskripsi',
        key: 'deskripsi',
        dataIndex: 'deskripsi',
        ...getColumnSearchProps('deskripsi'),
      },
      // {
      //   align: 'center',
      //   render: (props: any) => (
      //     <Fragment>
      //       <Button id={props.id} onClick={() => remove(props.id)} type="primary" danger>
      //         Delete
      //       </Button>
      //     </Fragment>
      //   ),
      // },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data.reverse()} loading={loading} />;
    </div>
  );
};

export default TableComponent;
