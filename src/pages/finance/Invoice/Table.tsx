import React, { useState, useMemo } from 'react';
import { Table, Row, Button } from 'antd';
import styles from './index.less';

import useFilterColumn from '@/hooks/useFilterColumn';
// import PageError from '@/components/PageError';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  handleVisible: (e: string) => void;
  onConfirm: (id: string) => void;
  onCancel: (id: string) => void;
  onDownloadExcel: (xtype: any, no_faktur: any) => void;
  onLoadButton: boolean;
  onLoadDownload: boolean;
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
  status,
  error,
  handleVisible,
  onDownloadExcel,
  onLoadButton,
  onLoadDownload,
  onConfirm,
  onCancel,
}) => {
  const [getColumnSearchProps] = useFilterColumn();

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Tanggal Transaksi',
        dataIndex: 'tanggal',
        key: 'tanggal',
        ...getColumnSearchProps('tanggal'),
      },
      {
        align: 'center',
        title: 'Nama Pembeli',
        dataIndex: 'pembeli',
        key: 'pembeli',
        ...getColumnSearchProps('pembeli'),
      },
      {
        align: 'center',
        title: 'No. Invoice',
        key: 'invoice',
        render: (props: any) => (
          <span className={styles.span} onClick={() => handleVisible(props.id)}>
            {props.invoice}
          </span>
        ),
        ...getColumnSearchProps('invoice'),
      },
      {
        align: 'center',
        title: 'Total Transaksi',
        dataIndex: 'total_transaksi',
        key: 'total_transaksi',
        ...getColumnSearchProps('total_transaksi'),
      },
      {
        align: 'center',
        width: 200,
        render: (props: any) => (
          <>
            {props.confirm_finance === 0 ? (
              <Row justify="center">
                <Button
                  className={styles.button}
                  onClick={() => onConfirm(props.id)}
                  disabled={onLoadButton}
                  type="primary"
                >
                  Confirm
                </Button>
                <Button
                  className={styles.button}
                  onClick={() => onCancel(props.id)}
                  disabled={onLoadButton}
                  type="primary"
                  danger
                >
                  Batal
                </Button>
              </Row>
            ) : (
              <Button
                onClick={() => onDownloadExcel('1', props.invoice)}
                className={styles.button}
                disabled={onLoadDownload}
                type="primary"
                style={{ width: '100%' }}
              >
                Download Invoice
              </Button>
            )}
          </>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} dataSource={data.reverse()} loading={loading} />;
    </div>
  );
};

export default TableComponent;
