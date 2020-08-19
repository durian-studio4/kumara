import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Input, Button } from 'antd';
import styles from './index.less';

import { CreateCabang } from './index';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: CreateCabang) => void;
  onError: any;
  onLoadButton: boolean;
}

const initialState = {
  nama_pt: '',
  cabang: '',
  alamat: '',
  telp: '',
  email: '',
};

const AddComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onError, onLoadButton }) => {
  const [{ alamat, email, cabang, nama_pt, telp }, setState] = useState(initialState);

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!alamat) {
      setDisabled(true);
    }
    if (!email) {
      setDisabled(true);
    }
    if (!cabang) {
      setDisabled(true);
    }
    if (!nama_pt) {
      setDisabled(true);
    }
    if (!telp) {
      setDisabled(true);
    }
    setDisabled(false);
  }, [alamat, cabang, email, nama_pt, telp]);

  const onClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((state) => ({ ...state, [id]: value }));
  };

  const DataJSON = JSON.stringify({
    alamat,
    email,
    cabang,
    nama_pt,
    telp,
  });

  const createCabang = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal visible={visible} title="Tambah Cabang" closable={false} footer={null}>
      <div className={styles.modal_body}>
        <Col>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="cabang">
                Nama PT
              </label>
              <Input
                className={styles.input}
                type="text"
                id="nama_pt"
                placeholder="Isi Nama PT"
                value={nama_pt}
                onChange={onChangeState}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="cabang">
                Nama Cabang
              </label>
              <Input
                className={styles.input}
                type="text"
                id="cabang"
                placeholder="Isi Nama Cabang"
                value={cabang}
                onChange={onChangeState}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="cabang">
                Alamat Cabang
              </label>
              <Input
                className={styles.input}
                type="text"
                id="alamat"
                placeholder="Isi Alamat Cabang"
                value={alamat}
                onChange={onChangeState}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="cabang">
                Telepon Cabang
              </label>
              <Input
                className={styles.input}
                type="text"
                id="telp"
                placeholder="Isi Telepon Cabang"
                value={String(telp).replace(/[^0-9-]/g, '')}
                onChange={onChangeState}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="cabang">
                Email Cabang
              </label>
              <Input
                className={styles.input}
                type="text"
                id="email"
                placeholder="Isi Email Cabang"
                value={email}
                onChange={onChangeState}
              />
            </div>
          </div>
        </Col>
      </div>
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          className={styles.button}
          onClick={onClearState}
          disabled={onLoadButton}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          loading={onLoadButton}
          onClick={createCabang}
          disabled={isDisabled || onLoadButton}
          type="primary"
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
