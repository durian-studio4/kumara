import React, { useMemo } from 'react';
import { Table, Button, Row, Tag } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

import PageError from '@/components/PageError';
import useFilterColumn from '@/hooks/useFilterColumn';

interface Props {
  data: any;
  status: number;
  loading: boolean;
  isError: any;
  handleVisibleAdd: () => void;
  handleVisibleSelect: (id: string) => void;
}

const TableResi: React.FC<Props> = ({
  data,
  status,
  loading,
  isError,
  handleVisibleAdd,
  handleVisibleSelect,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id: data[key].id,
      tanggal: data[key].tanggal,
      nama: data[key].nama,
      no_resi: data[key].no_resi,
      total_ongkir: data[key].total_ongkir,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal Ekspedisi',
        dataIndex: 'tanggal',
        render: (props: any) => <div>{format(new Date(props), 'dd-MM-yyyy')}</div>,
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama',
        dataIndex: 'nama',
        ...getColumnSearchProps('nama'),
      },
      {
        align: 'center',
        title: 'No Resi',
        dataIndex: 'no_resi',
        ...getColumnSearchProps('no_resi'),
      },
      {
        align: 'center',
        title: 'Total Ongkir',
        dataIndex: 'total_ongkir',
        ...getColumnSearchProps('total_ongkir'),
      },
      {
        align: 'center',
        title: 'Lihat Resi',
        render: ({ id }: any) => (
          <Button onClick={() => handleVisibleSelect(id)} type="primary">
            Lihat
          </Button>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (status !== 200 || isError) {
    return <PageError />;
  }

  return (
    <div style={{ marginTop: '2em' }}>
      <Row justify="space-between">
        <p className={styles.title}>List Resi</p>
        <p className={styles.title_add} onClick={handleVisibleAdd}>
          + Tambah
        </p>
      </Row>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </div>
    </div>
  );
};

export default TableResi;
