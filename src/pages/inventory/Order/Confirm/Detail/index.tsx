import React, { useEffect, useState, useMemo } from 'react';
import { Table, Modal, Button, Row } from 'antd';
import styles from '../index.less';

// import { Container, Title } from "css/page-styles"
// import { ModalWrapper, div } from "css/Form/styles"
// import { Edit } from "components/Inventory/styles"
// import { Button } from "css/Button/styles"

//---------CUSTOM
import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';

import Update from './Update';

interface Props {
  visible: boolean;
  id_barang: number;
  onCancel: () => void;
  onLoadButton: boolean;
  onConfirmOrder: (id: string) => void;
  onBatalOrder: () => void;
}

export interface UpdateOrder {
  url: string;
  json: {};
  clear: () => void;
}

const DetailComponent: React.FC<Props> = ({
  visible,
  id_barang,
  onCancel,
  onLoadButton,
  onConfirmOrder,
  onBatalOrder,
}) => {
  const [data, status, loading, error, fetchList, postList] = useFetch();

  const [visible_confirm, setVisibleConfirm] = useState(false);
  const [id_confirm, setIdConfirm] = useState(0);

  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/order/${id_barang}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_barang, rerender]);

  const handleVisibleConfirm = (id: string) => {
    setIdConfirm(Number(id));
    setVisibleConfirm(!visible_confirm);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
    setRerender(Date.now());
  };

  const updateOrder = ({ url, json, clear }: UpdateOrder) => {
    postList(url, json, clear);
  };

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
          <span className={styles.span} onClick={() => handleVisibleConfirm(props.id)}>
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
        {status !== 200 || error ? <PageError status={status} /> : null}
        {data ? (
          <Table columns={columns} loading={Boolean(loading)} rowKey="id" dataSource={[data]} />
        ) : null}
      </div>
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
          onClick={() => onConfirmOrder(String(id_barang))}
          type="primary"
        >
          Confirm Order
        </Button>
      </Row>
      <Update
        visible={visible_confirm}
        id_confirm={id_confirm}
        onCreate={updateOrder}
        onCancel={handleClearVisibleConfirm}
        onLoading={Boolean(loading)}
      />
    </Modal>
  );
};

export default DetailComponent;
