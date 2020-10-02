import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { Table, Modal, Button } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

import UpdateComponent from './Update';

import { Suplier } from './index';
interface Props {
  visible: boolean;
  id_update: string;
  id_order: string;
  isConfirm: boolean;
  onCancelOrder: ({ url, json, clear }: Suplier) => void;
  onConfirmOrder: ({ url, json, clear }: Suplier) => void;
  onCancel: () => void;
  onLoadButton: boolean;
}

const DetailComponent: React.FC<Props> = ({
  visible,
  id_update,
  id_order,
  isConfirm,
  onCancelOrder,
  onLoadButton,
  onConfirmOrder,
  onCancel,
}) => {
  const [data, status, loading, error, fetchList] = useFetch();
  const [loading_update, status_update, postList] = useCreate();

  const [visible_confirm, setVisibleConfirm] = useState(false);
  const [id_confirm, setIdConfirm] = useState('');
  const [barang_confirm, setBarangConfirm] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/${id_order}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update, status_update]);

  const handleVisibleConfirm = (id: string, barang: string) => {
    setIdConfirm(id);
    setBarangConfirm(barang);
    setVisibleConfirm(true);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
    setIdConfirm('');
    setBarangConfirm('');
  };

  const updateOrder = ({ url, json, clear }: any) => {
    postList(url, json, clear);
  };

  const confirmOrder = () => {
    onConfirmOrder({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_order}/konfirmasi-finance`,
      json: JSON.stringify({ confirm_finance: true }),
      clear: onCancel,
    });
  };

  const cancelOrder = () => {
    onCancelOrder({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_order}/batal`,
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
        render: (props: any) => (
          <span
            className={styles.span}
            onClick={() => handleVisibleConfirm(props.id, props.nama_barang)}
          >
            {props.qty_confirm}
          </span>
        ),
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
      {
        align: 'center',
        title: 'Total',
        dataIndex: 'total',
      },
    ],
    [],
  );

  return (
    <Modal visible={visible} title="Detail Suplier" onCancel={onCancel} footer={null} width={600}>
      <div className={styles.modal_body}>
        {status !== 200 || error ? <h1>Something went wrong</h1> : null}
        {data ? (
          <Fragment>
            <Table columns={columns} loading={Boolean(loading)} dataSource={data.detail} />
            <div style={{ textAlign: 'center' }}>
              <p className={styles.p}>Total</p>
              <p className={styles.p}>{data.total}</p>
            </div>
          </Fragment>
        ) : null}
      </div>
      {isConfirm ? null : (
        <>
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
        </>
      )}
      {visible_confirm ? (
        <UpdateComponent
          data={data}
          visible={visible_confirm}
          id_confirm={id_confirm}
          barang_confirm={barang_confirm}
          onCreate={updateOrder}
          onCancel={handleClearVisibleConfirm}
          onLoading={Boolean(loading_update)}
        />
      ) : null}
    </Modal>
  );
};

export default DetailComponent;
