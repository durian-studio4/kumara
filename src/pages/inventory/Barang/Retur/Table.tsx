import React, { useMemo } from 'react';
import { Table, Button } from 'antd';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';
import useCreate from '@/hooks/useCreate';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  onUpdate: any;
}

const TableComponent: React.FC<Props> = (props) => {
  const { data, loading, status, error } = props;
  const [getColumnSearchProps] = useFilterColumn();

  const [loading_update, status_update, postUpdate] = useCreate();

  const updateStatus = (id:any, status:any, clear:any) => {
    postUpdate(`${REACT_APP_ENV}/admin/v1/inventory/retur/${id}`, { status }, clear);
    props.onUpdate();
  };

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Quantity',
        dataIndex: 'qty',
        ...getColumnSearchProps('qty'),
      },
      {
        align: 'center',
        title: 'Satuan Quantity',
        dataIndex: 'satuan_barang',
      },
      {
        align: 'center',
        title: 'Keterangan/Alsan',
        dataIndex: 'keterangan',
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
            <div style={{color:"green"}}>
              Barang telah ditukar
            </div>
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
      <Table columns={columns} loading={loading} dataSource={data.reverse()} />;
    </div>
  );
};

export default TableComponent;
