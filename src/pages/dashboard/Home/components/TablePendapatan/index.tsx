import React, { useEffect, useMemo } from 'react';
import { Table } from 'antd';
import styles from '../../index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {
  id_cabang: string;
  date: string[];
  id_kategori: string;
}

const TablePendapatan: React.FC<Props> = ({ id_cabang, date, id_kategori }) => {
  const [data, status, loading, error, fetchList] = useFetch();

  const detail = data && data.detail;
  const total = data.total ? Array(data.total) : [];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(
        `${REACT_APP_ENV}/admin/v1/dashboard/kategori/pendapatan?id_cabang=${id_cabang}&kategori=${id_kategori}&start_date=${date[0]}&end_date=${date[1]}`,
      );
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_cabang, date, id_kategori]);

  const columnsDetail = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal',
        key: 'tanggal',
        dataIndex: 'tanggal',
      },
      {
        align: 'center',
        title: 'Debit',
        key: 'debit',
        dataIndex: 'debit',
      },
      {
        align: 'center',
        title: 'Giro',
        key: 'giro',
        dataIndex: 'giro',
      },
      {
        align: 'center',
        title: 'Cash',
        key: 'cash',
        dataIndex: 'cash',
      },
      {
        align: 'center',
        title: 'Transfer',
        key: 'transfer',
        dataIndex: 'transfer',
      },
      {
        align: 'center',
        title: 'Tempo',
        key: 'kredit',
        dataIndex: 'kredit',
      },
    ],
    [],
  );

  const columnsTotal = useMemo(
    () => [
      {
        align: 'center',
        title: 'Cash',
        key: 'cash',
        dataIndex: 'cash',
      },
      {
        align: 'center',
        title: 'Debit',
        key: 'debit',
        dataIndex: 'debit',
      },
      {
        align: 'center',
        title: 'Kredit',
        key: 'kredit',
        dataIndex: 'kredit',
      },
      {
        align: 'center',
        title: 'Giro',
        key: 'giro',
        dataIndex: 'giro',
      },
      {
        align: 'center',
        title: 'Pb',
        key: 'pb',
        dataIndex: 'pb',
      },
      {
        align: 'center',
        title: 'Transfer',
        key: 'transfer',
        dataIndex: 'transfer',
      },
    ],
    [],
  );

  if (Boolean(error) || status !== 200) {
    return <PageError />;
  }

  return (
    <div>
      <p className={styles.title}>Kategori Pendapatan</p>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columnsDetail} dataSource={detail} loading={Boolean(loading)} />;
        <Table columns={columnsTotal} dataSource={total} loading={Boolean(loading)} />;
      </div>
    </div>
  );
};

export default TablePendapatan;
