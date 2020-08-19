import React, { useMemo, useEffect } from 'react';
import { Table, Tag } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';
import { FormattedMessage } from 'umi';

interface Props {}

const TablePiutang: React.FC<Props> = () => {
  const [data, status, loading, error, fetchRetur] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchRetur(`${REACT_APP_ENV}/admin/v1/sales/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let data_array = [];

  for (let key in data) {
    data_array.push({
      id: data[key].id,
      pembeli: data[key].pembeli.name,
      barang: data[key].barang,
      nama_sales: data[key].nama_sales,
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'center',
        title: 'Nama Pembeli',
        dataIndex: 'pembeli',
      },
      {
        align: 'center',
        title: 'Detail Barang dan Qty',
        dataIndex: 'barang',
        render: (props: any) => {
          return props.map((item, i) => {
            return <div key={i}>{item.nama_barang}</div>;
          });
        },
      },
      {
        align: 'center',
        title: 'Nama Sales',
        dataIndex: 'nama_sales',
      },
    ],
    [],
  );

  if (error || status !== 200) {
    return <PageError />;
  }

  return (
    <div style={{ marginTop: '1em' }}>
      <div className={styles.title} style={{ marginBottom: '2rem' }}>
        <FormattedMessage id="piutang-sales" defaultMessage="Piutang Sales" />
      </div>
      <div style={{ overflow: 'auto' }}>
        <Table columns={columns} dataSource={data_array} loading={Boolean(loading)} />
      </div>
    </div>
  );
};

export default TablePiutang;
