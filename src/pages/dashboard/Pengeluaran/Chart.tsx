import React, { useEffect } from 'react';
import { Col } from 'antd';
import { FormattedMessage } from 'umi';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

interface Props {
  date: string[];
  id_cabang: string;
  id_kategori: string;
}

const ChartPengeluaran: React.FC<Props> = ({ date, id_cabang, id_kategori }) => {
  const [data_chart, status_chart, loading_chart, error_chart, fetchChart] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchChart(
        `${REACT_APP_ENV}/admin/v1/dashboard/chart/pengeluaran?id_cabang=${id_cabang}&kategori=${id_kategori}&start_date=${date[0]}&end_date=${date[1]}`,
      );
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_cabang, id_kategori, date]);

  if (status_chart !== 200 || error_chart) {
    return <PageError />;
  }

  return (
    <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="total pengeluaran" defaultMessage="Total Pengeluaran" />
      </div>
      {loading_chart ? (
        <PageLoading />
      ) : (
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data_chart}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="bulan" />
              <YAxis dataKey="pengeluaran" domain={[0, 'dataMax' > 5 ? 'dataMax' : 5]} />
              <CartesianGrid />
              <Tooltip />
              <ReferenceLine x="Page C" stroke="lightblue" label="Min PAGE" />
              <ReferenceLine label="Max" stroke="red" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="pengeluaran" stroke="lightblue" fill="#68adfa" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </Col>
  );
};

export default ChartPengeluaran;
