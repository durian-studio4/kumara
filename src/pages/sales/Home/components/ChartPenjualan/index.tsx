import React, { useEffect } from 'react';
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
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {}

const Penjualan: React.FC<Props> = () => {
  const [data, status, loading, error, fetchChart] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchChart(`${REACT_APP_ENV}/admin/v1/sales/chart/weekly`);
    }, 0);
    return () => clearTimeout(timeOut);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="penjualan" defaultMessage="Penjualan" />
      </div>
      {error ? <PageError status={status} /> : null}
      {loading ? (
        <PageLoading />
      ) : (
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="bulan" />
              <YAxis
                dataKey="total"
                domain={[0, 'dataMax' > 6 ? 'dataMax' : 6]}
                padding={{ left: 0 }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <ReferenceLine x="Page C" stroke="lightblue" label="Min PAGE" />
              <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="total" stroke="lightblue" fill="#68adfa" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Penjualan;
