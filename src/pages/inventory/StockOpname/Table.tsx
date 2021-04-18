import React, { useMemo } from 'react';
import { history } from 'umi';
import { Table, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  handleVisible: (id: string) => void;
  handleVisibleEdit: (id: string) => void;
}


const onClickEdit = (id: String) =>{
  history.push(`/inventory/stok-opname/edit/${id}`)
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
}) => {
  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'center',
        title: 'Status',
        dataIndex: 'status',
      },
      {
        align: 'center',
        title: 'Operator',
        dataIndex: 'operator_name',
      },
      {
        align: 'center',
        title: 'Note',
        dataIndex: 'note',
      },
      {
        align: 'center',
        title: 'Date',
        dataIndex: 'date',
        render: (props: Date) => (
          <span>{props ? format(new Date(props), 'dd/MM/yyyy') : null}</span>
        ),
      },
      {
        title: "Action",
        align: 'center',
        render: ({ id }: any) => (
          <Button className={styles.button} type="primary" onClick={()=>onClickEdit(id)}>
            Edit
          </Button>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} loading={loading} dataSource={data} />;
    </div>
  );
};

export default TableComponent;
