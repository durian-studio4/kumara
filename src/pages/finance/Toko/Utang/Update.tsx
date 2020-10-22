import React, { useState } from 'react';
import { Modal, Button, Row, Input } from 'antd';
import styles from './index.less';

import { Utang } from './index';
interface Props {
  visible: boolean;
  onUpdate: ({ url, json, clear }: Utang) => void;
  onCancel: () => void;
  id_row: number;
}

const { TextArea } = Input;

const UpdateComponent: React.FC<Props> = ({ visible, onUpdate, onCancel, id_row }) => {
  const [keterangan, setKeterangan] = useState('');

  const onChangeState = (e: { target: HTMLTextAreaElement }) => {
    setKeterangan(e.target.value);
  };

  const onClearState = () => {
    setKeterangan('');
    onCancel();
  };

  const acceptUtang = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/finance/utang/${id_row}/update`,
      json: JSON.stringify({ status: 1, keterangan }),
      clear: onClearState,
    });
  };

  return (
    <Modal visible={visible} title="Ubah Status" width={450} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?
        </p>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="keterangan">
              Keterangan:
            </label>
            <TextArea
              className={styles.area}
              id="keterangan"
              value={keterangan}
              onChange={onChangeState}
              placeholder="Masukkan Keterangan..."
            />
          </div>
        </div>
        <Row justify="space-around">
          <Button
            className={styles.button}
            type="primary"
            onClick={acceptUtang}
            disabled={!keterangan}
          >
            Ya
          </Button>
          <Button className={styles.button} type="primary" danger onClick={onClearState}>
            Batal
          </Button>
        </Row>
      </div>
    </Modal>
  );
};

export default UpdateComponent;
