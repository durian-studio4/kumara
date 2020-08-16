import React from 'react';
import { FormattedMessage } from 'umi';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Area,
} from 'recharts';
import styles from './index.less';

import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  isError: any;
}

const ChartKurir: React.FC<Props> = ({ data, loading, status, isError }) => {
  if (status !== 200 || isError) {
    return <PageError />;
  }

  return (
    <div>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="statistik pengiriman" defaultMessage="Statistik Pengiriman" />
      </div>
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
                domain={[0, 'dataMax' > 5 ? 'dataMax' : 5]}
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

export default ChartKurir;
