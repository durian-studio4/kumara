import React, { useEffect } from 'react';
import { Col } from 'antd';
import { FormattedMessage } from 'umi';
import styles from '../../index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {
  date: string[];
  id_cabang: string;
  id_kategori: string;
}

const TotalOmset: React.FC<Props> = ({ id_cabang, id_kategori, date }) => {
  const [data, status, isLoading, error, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(
        `${REACT_APP_ENV}/admin/v1/dashboard/total?id_cabang=${id_cabang}&kategori=${id_kategori}&start_date=${date[0]}&end_date=${date[1]}`,
      );
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_cabang, id_kategori, date]);

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="total omset" defaultMessage="Total Omset" />
      </div>
      <span className={styles.title}>Total Omset Hari Ini</span>
      {isLoading ? (
        <PageLoading />
      ) : (
        <p style={{ fontSize: 'calc(0.5em + 1vmax)' }}>{data.total || `Rp. ${0}`}</p>
      )}
    </Col>
  );
};

export default TotalOmset;
