import React, { useMemo, useEffect } from 'react';
import { Table } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {
  id_cabang: string;
  kategori: string;
  date: string[];
}

const TablePengeluaran: React.FC<Props> = ({ id_cabang, kategori, date }) => {
  const [data, status, loading, error, fetchList] = useFetch();

  const detail = data.detail && data.detail.reverse();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(
        `${REACT_APP_ENV}/admin/v1/dashboard/kategori/pengeluaran?id_cabang=${id_cabang}&kategori=${kategori}&start_date=${date[0]}&end_date=${date[1]}`,
      );
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_cabang, kategori, date]);

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
      },
      {
        align: 'center',
        title: 'Tagihan Supplier',
        key: 'tagihan_suplier',
        dataIndex: 'tagihan_suplier',
      },
      {
        align: 'center',
        title: 'Tagihan Toko',
        key: 'tagihan_toko',
        dataIndex: 'tagihan_toko',
      },
      {
        align: 'center',
        title: 'Operational',
        key: 'operational',
        dataIndex: 'operational',
      },
    ],
    [],
  );

  if (Boolean(error) || status !== 200) {
    return <PageError />;
  }

  return (
    <div>
      <p className={styles.title}>Kategori Pengeluaran</p>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={detail} loading={Boolean(loading)} />;
      </div>
    </div>
  );
};

export default TablePengeluaran;
