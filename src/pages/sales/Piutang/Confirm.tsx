import React from 'react';
import { Modal, Row, Button, Input } from 'antd';

import styles from './index.less';

import SelectBank from '@/components/Select/SelectBank';

interface Props {
  visible: boolean;
  keterangan: string;
  onLoading: boolean;
  onKeteranganChange: (e: { target: HTMLInputElement }) => void;
  onBankChange: (value: any, option: any) => void;
  onUpdate: () => void;
  onCancel: () => void;
}

const { TextArea } = Input;

const ConfirmComponent: React.FC<Props> = ({
  visible,
  keterangan,
  onLoading,
  onKeteranganChange,
  onBankChange,
  onUpdate,
  onCancel,
}) => {
  return (
    <Modal visible={visible} width={500} title="Ubah Status" closable={false} footer={null}>
      <div className={styles.modal_body}>
        <p className={styles.p} style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?
        </p>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label htmlFor="keterangan">Keterangan</label>
            <TextArea
              className={styles.area}
              id="keterangan"
              value={keterangan}
              onChange={onKeteranganChange}
              placeholder="Masukkan Keterangan..."
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label htmlFor="bank">Bank</label>
            <SelectBank initial="BCA" handleChange={onBankChange} />
          </div>
        </div>
        <Row justify="space-around">
          <Button type="primary" loading={onLoading} onClick={onUpdate}>
            Ya
          </Button>
          <Button type="primary" danger onClick={() => onCancel()}>
            Batal
          </Button>
        </Row>
      </div>
    </Modal>
  );
};

export default ConfirmComponent;
