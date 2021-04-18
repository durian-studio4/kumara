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
  onSubmit: () => void;
  onDelete: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  status,
  isLoading_data,
  isError_data,
  onSubmit,
  onDelete,
}) => {
  return (
    <Card style={{ marginTop: '2em' }}>
      <p className={styles.title}>Keranjang Belanja</p>
      {status !== 200 || isError_data ? <PageError /> : null}
      {isLoading_data ? (
        <PageLoading />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Unit</th>
              <th>Satuan</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Diskon</th>
              <th>Tax 1.1</th>
              <th>Tax 10%</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.barang &&
              data.barang.map((item: any, i: number) => (
                <tr key={i}>
                  <td>{item.nama_barang}</td>
                  <td>{item.qty}</td>
                  <td>{item.satuan_barang}</td>
                  <td>{item.harga}</td>
                  <td>{item.jumlah}</td>
                  <td>{Math.ceil(item.diskon).toLocaleString('id')}</td>
                  <td>{item.t11}</td>
                  <td>{item.tax}</td>
                  <td>
                    <Button onClick={() => onDelete(item.no)} type="primary" danger>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            <tr>
              <td style={{ fontWeight: 'bold' }}>Pengiriman</td>
              <td />
              <td />
              <td>{Number(data.ongkir).toLocaleString('id')}</td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Total</td>
              <td />
              <td />
              <td />
              <td>{data.total_harga}</td>
              <td>{data.total_diskon}</td>
              <td>{data.total_t11}</td>
              <td>{data.total_tax}</td>
            </tr>
          </tbody>
        </table>
      )}
      <Row justify="end" style={{ marginTop: '1em' }}>
        <Button type="primary" onClick={onSubmit}>
          Bayar
        </Button>
      </Row>
    </Card>
  );
};

export default TableComponent;
