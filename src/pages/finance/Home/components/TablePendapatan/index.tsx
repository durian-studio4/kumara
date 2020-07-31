import React, { useMemo, useEffect } from 'react';
import { Table, Tag } from 'antd';
import styles from '../index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {
  id_cabang: string;
  id_kategori: string;
}

const TablePendapatan: React.FC<Props> = ({ id_cabang, id_kategori }) => {
  const [data, status, isLoading, error, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(
        `${REACT_APP_ENV}/admin/v1/finance/dashboard/kategori/pendapatan?id_cabang=${id_cabang}&kategori=${id_kategori}`,
      );
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

  if (status !== 200 || error) {
    return <PageError status={status} />;
  }

  return (
    <div>
      <p className={styles.title}>Kategori Pendapatan</p>
      <Table columns={columns} dataSource={data} loading={Boolean(isLoading)} />
    </div>
  );
};

export default TablePendapatan;
