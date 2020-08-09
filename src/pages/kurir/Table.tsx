import React, { useMemo } from 'react';
import { Table, Button, Row } from 'antd';
import styles from './index.less';

import PageError from '@/components/PageError';
import useFilterColumn from '@/hooks/useFilterColumn';

import { ExcelProps } from './index';

interface Props {
  data: any;
  status: number;
  loading: boolean;
  isError: any;
  handleVisibleAdd: () => void;
  handleEditDetail: (id: string) => void;
  handleUpdateDetail: (id: string) => void;
  handleDownloadDetail: ({ id, sales }: ExcelProps) => void;
}

const TableKurir: React.FC<Props> = ({
  data,
  status,
  loading,
  isError,
  handleVisibleAdd,
  handleEditDetail,
  handleUpdateDetail,
  handleDownloadDetail,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
        ...getColumnSearchProps('id'),
      },
      {
        align: 'center',
        title: 'Nama Sales',
        dataIndex: 'nama_sales',
        ...getColumnSearchProps('nama_sales'),
      },
      {
        align: 'center',
        title: 'Alamat Tujuan',
        dataIndex: 'pembeli.alamat',
        // render: ({ pembeli }: any) => {
        //   <p>{pembeli && pembeli.alamat}</p>;
        // },
      },
      {
        align: 'center',
        render: ({ id, status_pengiriman }: any) => (
          <Button onClick={() => handleEditDetail(id)} type="primary" disabled={status_pengiriman}>
            Detail Tujuan
          </Button>
        ),
      },
      {
        align: 'center',
        title: 'Detail Pengiriman',
        dataIndex: 'barang',
        render: (props: any) => {
          return props.map((item, i) => {
            return <div key={i}>{item.nama_barang}</div>;
          });
        },
      },
      {
        align: 'center',
        title: 'Ongkos Kirim',
        dataIndex: 'ongkir',
        ...getColumnSearchProps('ongkir'),
      },
      {
        align: 'center',
        title: 'Status',
        render: (props: any) => (
          <>
            {props.status_pengiriman ? (
              <span onClick={() => handleUpdateDetail(props.id)}>Selesai Dikirim</span>
            ) : (
              <p>Belum Dikirim</p>
            )}
          </>
        ),
      },
      {
        align: 'center',
        render: ({ id, nama_sales, status_pengiriman }: any) => (
          <Button
            type="primary"
            onClick={() => handleDownloadDetail({ id, sales: nama_sales })}
            disabled={!status_pengiriman}
          >
            Print
          </Button>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (status !== 200 || isError) {
    return <PageError status={status} />;
  }

  return (
    <div style={{ marginTop: '2em' }}>
      <Row justify="space-between">
        <p className={styles.title}>List Pengiriman Hari Ini</p>
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

export default TableKurir;
