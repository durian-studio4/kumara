import React, { useMemo, Fragment } from 'react';
import { Table, Button } from 'antd';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';
import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
}

const TableRetur: React.FC<Props> = (props) => {
  const { data, loading, status, error } = props;
  const [getColumnSearchProps] = useFilterColumn();

  const [loading_update, status_update, postUpdate] = useCreate();

  const updateStatus = (id:any, status:any, clear:any) => {
    postUpdate(`${REACT_APP_ENV}/admin/v1/sales/retur/${id}/update`, { status }, clear);
    props.onUpdate();
  };

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        dataIndex: 'tanggal',
        key: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        key: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Qty',
        render: ({ qty, satuan_barang }: any) => (
          <span>
            {qty} {satuan_barang}
          </span>
        ),
        key: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Keterangan',
        dataIndex: 'keterangan',
        key: 'keterangan',
        ...getColumnSearchProps('keterangan'),
      },
      {
        align: 'center',
        render: ({ id, status }: any) => (
        <div>
          {status == 'returned_to_sales'?
            <Button
              type="primary"
              danger
              onClick={() => updateStatus(id, 'returned_to_supplier', null)}
            >
              Kembalikan ke Supplier
            </Button>
          : null }
          {status == 'returned_to_supplier'?
            <Button
              type="primary"
              onClick={() => updateStatus(id, 'exchanged', null)}
            >
              Dikembalikan ke Gudang
            </Button>
          : null }
          {status == 'exchanged'?
            <Button
            type="primary"
            onClick={() => updateStatus(id, 'returned_to_consumer', null)}
          >
            Kembalikan ke Pembeli
          </Button>
          : null }
          {status == 'returned_to_consumer'?
            <div style={{color:"green"}}>
              Barang telah dikembalikan ke pembeli
            </div>
          : null }
        </div>
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
      <Table columns={columns} dataSource={data.reverse()} loading={loading} />;
    </div>
  );
};

export default TableRetur;
