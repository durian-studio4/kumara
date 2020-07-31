import React, { useMemo } from 'react';
import { Table, Input } from 'antd';

import styles from '../index.less';

interface Props {
  data: any;
  qty: any;
  harga: any;
  handleUnitChange: (e: any) => void;
  handleHargaChange: (e: any) => void;
  visibleEdit: boolean;
}

const TableComponent: React.FC<Props> = ({
  data,
  qty,
  harga,
  handleUnitChange,
  handleHargaChange,
  visibleEdit,
}) => {
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
        key: (props: any) => qty[props.no - 1],
        render: (props: any) =>
          visibleEdit ? (
            <Input
              className={styles.input}
              id={String(props.no - 1)}
              value={qty[props.no - 1]}
              onChange={handleUnitChange}
              placeholder={props.qty}
            />
          ) : (
            props.qty
          ),
      },
      {
        align: 'center',
        title: 'Harga',
        key: (props: any) => harga[props.no - 1],
        render: (props: any) =>
          visibleEdit ? (
            <Input
              className={styles.input}
              id={String(props.no - 1)}
              value={String(harga[props.no - 1]).replace(/[^0-9-]/g, '')}
              onChange={handleHargaChange}
              placeholder={props.harga}
            />
          ) : (
            props.harga
          ),
      },
      {
        align: 'center',
        title: 'Total',
        dataIndex: 'jumlah',
      },
      {
        align: 'center',
        title: 'Tax 1.1',
        dataIndex: 't11',
      },
      {
        align: 'center',
        title: 'Tax 10%',
        dataIndex: 'tax',
      },
    ],
    [handleHargaChange, handleUnitChange, harga, qty, visibleEdit],
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
        dataIndex: 'total',
      },
      {
        align: 'center',
        title: 'DP / Uang Muka',
        dataIndex: 'dp',
      },
      {
        align: 'center',
        title: 'Total Tagihan',
        dataIndex: 'total_tagihan',
      },
    ],
    [],
  );

  return (
    <div style={{ border: '1px solid #d9d9d9', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <Table
          columns={columns_data}
          rowKey="no"
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
