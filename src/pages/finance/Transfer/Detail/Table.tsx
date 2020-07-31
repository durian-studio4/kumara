import React, { useMemo } from 'react';
import { Table } from 'antd';

interface Props {
  data: any;
}

const TableComponent: React.FC<Props> = ({ data }) => {
  const columns_data = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'no',
      },
      {
        align: 'left',
        title: 'Nama',
        dataIndex: 'nama_barang',
      },
      {
        align: 'center',
        title: 'Unit',
        dataIndex: 'qty',
      },
      {
        align: 'center',
        title: 'Harga',
        dataIndex: 'harga',
      },
      {
        align: 'center',
        title: 'Diskon',
        dataIndex: 'diskon',
      },
      {
        align: 'center',
        title: 'Total',
        dataIndex: 'jumlah',
      },
    ],
    [],
  );

  const columns_total = useMemo(
    () => [
      {
        align: 'center',
        title: 'Sub Total',
        dataIndex: 'sub_total',
      },
      {
        align: 'center',
        title: 'Biaya lain-lain',
        dataIndex: 'biaya_lain',
      },
      {
        align: 'center',
        title: 'Total',
        dataIndex: 'total_harga',
      },
      {
        align: 'center',
        title: 'DP / Uang Muka',
        dataIndex: 'uang_muka',
      },
      {
        align: 'center',
        title: 'Total Tagihan',
        dataIndex: 'tagihan',
      },
    ],
    [],
  );

  return (
    <div style={{ border: '1px solid #d9d9d9', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <Table
          columns={columns_data}
          rowKey="id"
          dataSource={data.barang}
          pagination={{ position: 'none' }}
        />
      </div>
      <div style={{ position: 'relative', width: '100%' }}>
        <Table
          columns={columns_total}
          rowKey="id"
          dataSource={[data]}
          pagination={{ position: 'none' }}
        />
      </div>
    </div>
  );
};

export default TableComponent;
