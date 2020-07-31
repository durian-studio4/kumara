import React from 'react';

import { Button, Card, Row } from 'antd';
import styles from './index.less';

import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {
  data: any;
  status: number;
  isLoading_data: boolean;
  isError_data: any;
  isLoading_order: boolean;
  onSubmit: () => void;
  onDelete: (no: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  status,
  isLoading_data,
  isError_data,
  isLoading_order,
  onSubmit,
  onDelete,
}) => {
  const barang = data && data.barang;
  return (
    <Card style={{ marginTop: '2em' }}>
      <p className={styles.title}>Daftar barang yang akan diorder</p>
      {isError_data ? <PageError status={status} /> : null}
      {isLoading_data ? (
        <PageLoading />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Barang</th>
              <th>Unit</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {barang &&
              barang.map((item: any, i: string) => (
                <tr key={i}>
                  <td>{item.no}</td>
                  <td>{item.nama_barang}</td>
                  <td>{item.qty}</td>
                  <td>{item.harga}</td>
                  <td>{item.jumlah}</td>
                  <td>
                    <Button
                      className={styles.button}
                      onClick={() => onDelete(item.no)}
                      type="primary"
                      danger
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            <tr>
              <td />
              <td style={{ fontWeight: 'bold' }}>Total</td>
              <td />
              <td />
              <td>{data ? data.total_harga : null}</td>
              <td />
            </tr>
          </tbody>
        </table>
      )}
      <Row justify="end">
        <Button
          className={styles.button}
          type="primary"
          onClick={onSubmit}
          disabled={Boolean(isLoading_order)}
        >
          Order
        </Button>
      </Row>
    </Card>
  );
};

export default TableComponent;
