import React, { useEffect, useState, useMemo, Fragment } from 'react';
import { Table, Modal, Button, Row } from 'antd';
import styles from '../index.less';

//---------CUSTOM
import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';
import PageError from '@/components/PageError';

import Update from './Update';

interface Props {
  visible: boolean;
  id_update: string;
  isConfirm: boolean;
  onCancel: () => void;
  onLoadButton: boolean;
  onConfirmOrder: (id: string) => void;
  onBatalOrder: () => void;
}

export interface UpdateOrder {
  url: string;
  id: string;
  json: any;
  clear: () => void;
}

const DetailComponent: React.FC<Props> = ({
  visible,
  id_update,
  onCancel,
  isConfirm,
  onLoadButton,
  onConfirmOrder,
  onBatalOrder,
}) => {
  const [data, status, loading, error, fetchList] = useFetch();
  const [loading_update, status_update, postList] = useCreate();

  const [visible_confirm, setVisibleConfirm] = useState(false);
  const [id_confirm, setIdConfirm] = useState('');
  const [key_confirm, setKeyConfirm] = useState('');
  const [barang_confirm, setBarangConfirm] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/${id_update}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update, status_update]);

  const handleVisibleConfirm = (id: string, key: string, barang: string) => {
    setIdConfirm(id);
    setKeyConfirm(key);
    setBarangConfirm(barang);
    setVisibleConfirm(true);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
    setIdConfirm('');
    setKeyConfirm('');
    setBarangConfirm('');
  };

  const updateOrder = ({ url, json, clear }: any) => {
    postList(url, json, clear);
  };

  let data_array = [];

  for (let key in data.detail) {
    data_array.push({
      key,
      id: data.detail[key].id,
      nama_barang: data.detail[key].nama_barang,
      expired_date: data.detail[key].expired_date,
      qty_confirm: data.detail[key].qty_confirm,
      qty_req: data.detail[key].qty_req,
      total: data.detail[key].total.toLocaleString(),
    });
  }

  const columns = useMemo(
    () => [
      {
        align: 'center',
        title: 'Nama Barang',
        dataIndex: 'nama_barang',
      },
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
            onClick={() => handleVisibleConfirm(props.id, props.key, props.nama_barang)}
          >
            {props.qty_confirm}
          </span>
        ),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Modal visible={visible} title="Confirm Order" onCancel={onCancel} footer={null} width={800}>
      <div className={styles.modal_body}>
        {status !== 200 || error ? <PageError /> : null}
        {data ? (
          <Fragment>
            <Table
              columns={columns}
              loading={Boolean(loading)}
              rowKey="id"
              dataSource={data_array}
            />
            <div style={{ textAlign: 'center' }}>
              <p className={styles.p}>Total</p>
              <p className={styles.p}>{data.total}</p>
            </div>
          </Fragment>
        ) : null}
      </div>
      {isConfirm ? null : (
        <Row justify="end">
          <Button
            className={styles.button}
            disabled={onLoadButton}
            onClick={onBatalOrder}
            type="primary"
            danger
          >
            Batal Order
          </Button>
          <Button
            className={styles.button}
            disabled={onLoadButton}
            onClick={() => onConfirmOrder(id_update)}
            type="primary"
          >
            Confirm Order
          </Button>
        </Row>
      )}
      {visible_confirm ? (
        <Update
          data={data}
          visible={visible_confirm}
          id_confirm={id_confirm}
          key_confirm={key_confirm}
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
