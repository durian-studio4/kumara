import React, { useEffect, useMemo } from 'react';
import { Table } from 'antd';
import styles from '../index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {
  id_cabang: string;
}

const TablePendapatan: React.FC<Props> = ({ id_cabang }) => {
  const [data, status, loading, error, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/dashboard/kategori/pendapatan?id_cabang=${id_cabang}`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_cabang]);

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

  if (Boolean(error)) {
    return <PageError status={status} />;
  }

  return (
    <div>
      <p className={styles.title}>Kategori Pendapatan</p>
      <Table columns={columns} dataSource={data} loading={Boolean(loading)} />;
    </div>
  );
};

export default TablePendapatan;
