import React from 'react';
import { Modal, Row, Button } from 'antd';
import styles from './index.less';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onUpdate: () => void;
}

const ConfirmComponent: React.FC<Props> = ({ visible, onUpdate, onCancel }) => {
  return (
    <Modal visible={visible} title="Ubah Status" width={450} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?
        </p>
        <Row style={{ marginTop: '2em' }} justify="space-around">
          <Button className={styles.button} type="primary" onClick={onUpdate}>
            Ya
          </Button>
          <Button className={styles.button} type="primary" danger onClick={() => onCancel()}>
            Batal
          </Button>
        </Row>
      </div>
    </Modal>
  );
};

export default ConfirmComponent;
