import React, { useEffect } from 'react';
import { Col } from 'antd';
import { FormattedMessage } from 'umi';
import styles from '../../index.less';

import Table from './Table';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

interface Props {
  date: string[];
  id_cabang: string;
  id_kategori: string;
}

const Setoran: React.FC<Props> = ({ id_cabang, id_kategori, date }) => {
  const [data, status, loading, error, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(
        `${REACT_APP_ENV}/admin/v1/dashboard/setoran?kategori=${id_kategori}&id_cabang=${id_cabang}&start_date=${date[0]}&end_date=${date[1]}`,
      );
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_kategori, id_cabang, date]);

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
      <div style={{ overflow: 'auto' }}>
        <div className={styles.title} style={{ marginBottom: '2rem' }}>
          <FormattedMessage id="setoran" defaultMessage="Setoran" />
        </div>
        <Table data={data} isLoading={Boolean(loading)} />
      </div>
    </Col>
  );
};

export default Setoran;
