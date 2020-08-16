import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Row, Button, Input } from 'antd';
import styles from './index.less';

import useSelect from '@/hooks/useSelect';
import useFetch from '@/hooks/useFetch';

import Select from '@/components/Select/SelectAll';
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

import { EditKaryawan } from './index';

interface Props {
  id_update: number;
  visible: boolean;
  onUpdate: ({ url, json, clear }: EditKaryawan) => void;
  onCancel: () => void;
  onError: boolean;
  onLoadButton: boolean;
}

const initialState = {
  name: '',
  username: '',
  email: '',
  no_id: '',
};

const initialPassword = {
  password: '',
  confirm_password: '',
};

const UpdateComponent: React.FC<Props> = ({
  id_update,
  visible,
  onUpdate,
  onCancel,
  onError,
  onLoadButton,
}) => {
  const [data, status, isLoading, isError, fetchList] = useFetch();

  const [{ name, username, email, no_id }, setState] = useState(initialState);

  const [{ password, confirm_password }, setPasswordState] = useState(initialPassword);

  const [isDisabled, setDisabled] = useState(false);

  const [id_role, handleChangeRole] = useSelect(data.id_role);
  const [id_cabang, handleChangeCabang] = useSelect(data.id_cabang);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/karyawan/${id_update}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(() => {
    if (!password) {
      return setDisabled(true);
    }
    if (!confirm_password) {
      return setDisabled(true);
    }
    if (password !== confirm_password) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [confirm_password, password]);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

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

  const handleChangePasswordState = (e: any) => {
    const { id, value } = e.target;
    setPasswordState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const updateKaryawan = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/master/karyawan/${id_update}/update`,
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      width={600}
      title="Update Data Karyawan"
      closable={false}
      footer={null}
    >
      {status !== 200 || isError ? <PageError /> : null}
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <Row>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="no_id">
                  No. ID Karyawan
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="no_id"
                  placeholder="112334556789"
                  value={String(no_id).replace(/[^-0-9]/g, '')}
                  onChange={handleChangeState}
                />
              </div>
            </div>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="name">
                  Nama
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="name"
                  placeholder="112334556789"
                  value={name}
                  onChange={handleChangeState}
                />
              </div>
            </div>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <Input
                  className={styles.input}
                  type="email"
                  id="email"
                  placeholder="leikos@gmail.com"
                  value={email}
                  onChange={handleChangeState}
                />
              </div>
            </div>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="username">
                  Username
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="username"
                  placeholder="kuetabby"
                  value={username}
                  onChange={handleChangeState}
                />
              </div>
            </div>
            <div className={styles.box5}>
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
                  onChange={handleChangePasswordState}
                />
              </div>
            </div>
            <div className={styles.box5}>
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
                  onChange={handleChangePasswordState}
                />
              </div>
            </div>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="role">
                  Peranan
                </label>
                <Select
                  address={`${REACT_APP_ENV}/admin/v1/pengaturan/role/get`}
                  select_id="role"
                  handleChange={handleChangeRole}
                  initial={data.role}
                />
              </div>
            </div>
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="cabang">
                  Cabang
                </label>
                <Select
                  address={`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/get`}
                  select_id="cabang"
                  handleChange={handleChangeCabang}
                  initial={data.nama_cabang}
                />
              </div>
            </div>
          </Row>
        </div>
      )}
      <Row justify="end" style={{ marginTop: '1em' }}>
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}

        <Button className={styles.button} type="primary" danger onClick={handleClearState}>
          Batal
        </Button>
        <Button
          className={styles.button}
          type="primary"
          onClick={updateKaryawan}
          loading={onLoadButton}
          disabled={isDisabled}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
