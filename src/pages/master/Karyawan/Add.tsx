import React, { useState, useEffect } from 'react';
import { Modal, Row, Input, Button } from 'antd';
import styles from './index.less';

import useSelect from '@/hooks/useSelect';

import Select from '@/components/Select/SelectAll';

import { CreateKaryawan } from './index';

interface Props {
  visible: boolean;
  onError: boolean;
  onLoadButton: boolean;
  onCreate: ({ json, clear }: CreateKaryawan) => void;
  onCancel: () => void;
}

const initialState = {
  name: '',
  username: '',
  email: '',
  no_id: '',
  password: '',
  confirm_password: '',
};

const AddComponent: React.FC<Props> = ({ visible, onError, onLoadButton, onCreate, onCancel }) => {
  const [{ name, username, email, no_id, password, confirm_password }, setState] = useState(
    initialState,
  );
  const [isDisabled, setDisabled] = useState(false);

  const [id_role, handleChangeRole] = useSelect('0');
  const [id_cabang, handleChangeCabang] = useSelect('0');

  useEffect(() => {
    if (!name) {
      return setDisabled(true);
    }
    if (!username) {
      return setDisabled(true);
    }
    if (!no_id) {
      return setDisabled(true);
    }
    if (!email) {
      return setDisabled(true);
    }
    if (!password) {
      return setDisabled(true);
    }
    if (!confirm_password) {
      return setDisabled(true);
    }
    if (!id_role) {
      return setDisabled(true);
    }
    if (!id_cabang) {
      return setDisabled(true);
    }
    if (password !== confirm_password) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [confirm_password, email, id_cabang, id_role, name, no_id, password, username]);

  const DataJSON = JSON.stringify({
    name,
    username,
    email,
    no_id,
    password,
    confirm_password,
    id_role,
    id_cabang,
  });

  const handleChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const createKaryawan = () => {
    onCreate({
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal visible={visible} title="Input Data Karyawan" closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="no_id">
              No. ID Karyawan
            </label>
            <Input
              className={styles.input}
              type="text"
              id="no_id"
              placeholder="Isi ID"
              value={String(no_id).replace(/[^-0-9]/g, '')}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="name">
              Nama
            </label>
            <Input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Isi Name"
              value={name}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <Input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Isi Email"
              value={email}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <Input
              className={styles.input}
              type="text"
              id="username"
              placeholder="Isi Username"
              value={username}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <Input
              className={styles.input}
              type="password"
              id="password"
              placeholder="Isi Password"
              value={password}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="confirm_password">
              Confirm Password
            </label>
            <Input
              className={styles.input}
              type="password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={confirm_password}
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
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="cabang">
              Cabang
            </label>
            <Select
              address={`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/get`}
              handleChange={handleChangeCabang}
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
          onClick={createKaryawan}
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
