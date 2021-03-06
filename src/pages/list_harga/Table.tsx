import React, { useMemo } from 'react';
import { Table, Tag, Button } from 'antd';

import useFilterColumn from '@/hooks/useFilterColumn';
import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  handleVisible: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({ data, loading, status, error, handleVisible }) => {
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
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
        ...getColumnSearchProps('nama_barang'),
      },
      {
        align: 'center',
        title: 'Qty Display',
        render: ({ qty_display }: any) => (
          <span>
            {qty_display.map((item, i) => (
              <Tag color="blue" key={i}>
                {item.toUpperCase()}
              </Tag>
            ))}
          </span>
        ),
      },
      {
        align: 'center',
        title: 'Qty Gudang',
        render: ({ qty_gudang }: any) => (
          <span>
            {qty_gudang.map((item, i) => (
              <Tag color="blue" key={i}>
                {item.toUpperCase()}
              </Tag>
            ))}
          </span>
        ),
      },
      {
        align: 'center',
        title: 'Harga Jual',
        ...getColumnSearchProps('harga_jual'),
        render: ({ harga_jual }: any) => (
          <span>
            {harga_jual.map((item, i) => (
              <Tag color="blue" key={i}>
                {item.toUpperCase()}
              </Tag>
            ))}
          </span>
        ),
      },
      {
        align: 'center',
        title: 'Foto Produk',
        render: ({ id_barang }: any) => (
          <Button onClick={() => handleVisible(id_barang)} type="primary">
            Lihat
          </Button>
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

export default TableComponent;
