import React from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Button } from 'antd';
import { Link } from 'umi';
import Cookie from 'js-cookie';
import styles from './index.less';

import TablePiutang from './components/Table/Piutang';
import TableRetur from './components/Table/Retur';
import ChartPenjualan from './components/ChartPenjualan';

interface Props {}

const HomeComponent: React.FC<Props> = () => {
  return (
    <GridContent>
      <div className={styles.row_box}>
        <p className={styles.title}>Sales</p>
        {Cookie.get('role') !== 'Finance' ? (
          <Link to="/sales/pos">
            <Button type="primary">Masuk ke POS</Button>
          </Link>
        ) : null}
      </div>
      <ChartPenjualan />
      <TablePiutang />
      <TableRetur />
    </GridContent>
  );
};

export default HomeComponent;
