import React, { useState, useEffect } from 'react';
import { Modal, Row, Input, Button } from 'antd';
import styles from './index.less';

import useSelect from '@/hooks/useSelect';

import Select from '@/components/Select/SelectAll';

import { CreateNotifikasi } from './index';

interface Props {
  visible: boolean;
  onError: boolean;
  onLoadButton: boolean;
  onCreate: ({ json, clear }: CreateNotifikasi) => void;
  onCancel: () => void;
}

const initialState = {
  judul: '',
  deskripsi: '',
};

const AddComponent: React.FC<Props> = ({ visible, onError, onLoadButton, onCreate, onCancel }) => {
  const [{ judul, deskripsi }, setState] = useState(initialState);
  const [isDisabled, setDisabled] = useState(false);

  const [id_role, handleChangeRole] = useSelect('0');

  useEffect(() => {
    if (!judul) {
      return setDisabled(true);
    }
    if (!deskripsi) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [judul, deskripsi]);

  const DataJSON = JSON.stringify({
    judul,
    deskripsi,
    receiver_role: id_role,
  });

  const handleChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const createNotifikasi = () => {
    onCreate({
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal visible={visible} title="Input Notifikasi" closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="judul">
              Judul
            </label>
            <Input
              className={styles.input}
              type="text"
              id="judul"
              placeholder="Isi Judul"
              value={judul}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="deskripsi">
              Deskripsi
            </label>
            <Input
              className={styles.input}
              type="text"
              id="deskripsi"
              placeholder="Isi Deskripsi"
              value={deskripsi}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="role">
              Peranan
            </label>
            <Select
              address={`${REACT_APP_ENV}/admin/v1/pengaturan/role/get`}
              handleChange={handleChangeRole}
            />
          </div>
        </div>
      </div>
      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
        <Button
          className={styles.button}
          disabled={onLoadButton}
          onClick={handleClearState}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          onClick={createNotifikasi}
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
