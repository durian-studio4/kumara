import React, { useEffect, useMemo } from 'react';
import { Table, Modal, Button } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';

import { Suplier } from './index';
interface Props {
  visible: boolean;
  id_update: string;
  id_order: string;
  onCancelOrder: ({ url, json, clear }: Suplier) => void;
  onConfirmOrder: ({ url, json, clear }: Suplier) => void;
  onCancel: () => void;
  onLoadButton: boolean;
}

const UpdateComponent: React.FC<Props> = ({
  visible,
  id_update,
  id_order,
  onCancelOrder,
  onLoadButton,
  onConfirmOrder,
  onCancel,
}) => {
  const [data, status, loading, error, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/${id_order}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update]);

  const confirmOrder = () => {
    onConfirmOrder({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_update}/konfirmasi-finance`,
      json: JSON.stringify({ confirm_finance: 1 }),
      clear: onCancel,
    });
  };

  const cancelOrder = () => {
    onCancelOrder({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_update}/batal`,
      json: JSON.stringify({}),
      clear: onCancel,
    });
  };

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Qty Req',
        dataIndex: 'qty_req',
      },
      {
        align: 'center',
        title: 'Qty Conf',
        dataIndex: 'qty_confirm',
      },
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
      },
      {
        align: 'center',
        title: 'Expired Date',
        dataIndex: 'expired_date',
      },
    ],
    [],
  );

  return (
    <Modal visible={visible} title="Detail Suplier" onCancel={onCancel} footer={null} width={600}>
      <div className={styles.modal_body}>
        {status !== 200 || error ? <h1>Something went wrong</h1> : null}
        {data ? (
          <Table columns={columns} loading={Boolean(loading)} dataSource={data.detail} />
        ) : null}
      </div>
      <Button
        style={{ width: '100%' }}
        className={styles.button}
        type="primary"
        danger
        id="cancel"
        disabled={onLoadButton}
        onClick={cancelOrder}
      >
        Cancel Order
      </Button>
      <Button
        style={{ width: '100%' }}
        className={styles.button}
        type="primary"
        id="confirm"
        disabled={onLoadButton}
        onClick={confirmOrder}
      >
        Confirm Order
      </Button>
    </Modal>
  );
};

export default UpdateComponent;
