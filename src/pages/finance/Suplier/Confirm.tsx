import React from 'react';
import { Modal, Button, Row } from 'antd';
import styles from './index.less';

import { Suplier } from './index';
interface Props {
  visible: boolean;
  onConfirmOrder: ({ url, json, clear }: Suplier) => void;
  onCancel: () => void;
  id_confirm: string;
}

const ConfirmComponent: React.FC<Props> = ({ visible, onConfirmOrder, onCancel, id_confirm }) => {
  const confirmOrder = () => {
    onConfirmOrder({
      url: `${REACT_APP_ENV}/admin/v1/finance/order/${id_confirm}/update`,
      json: JSON.stringify({ confirm_finance: 1 }),
      clear: onCancel,
    });
  };

  return (
    <Modal visible={visible} title="Ubah Status" width={450} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?
        </p>
        <Row style={{ marginTop: '2em' }} justify="space-around">
          <Button type="primary" onClick={confirmOrder}>
            Confirmasi
          </Button>
          <Button type="primary" danger onClick={onCancel}>
            Batal
          </Button>
        </Row>
      </div>
    </Modal>
  );
};

export default ConfirmComponent;
