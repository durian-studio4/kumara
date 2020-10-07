import React, { useState, useEffect } from 'react';

//---------CSS
import { Modal, Row, Col, Input, Button } from 'antd';
import styles from './index.less';

import useAutoComplete from '@/hooks/useAutoComplete';
import useKodePos from '@/hooks/useKodePos';

import Provinsi from '@/components/General/Provinsi';
import Kota from '@/components/General/Kota';
import Kecamatan from '@/components/General/Kecamatan';
import Kelurahan from '@/components/General/Kelurahan';

import { TambahSuplier } from './index';

interface Props {
  visible?: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: TambahSuplier) => void;
  onLoadButton: boolean;
  onError: boolean;
}

interface InitialState {
  name: string;
  alamat: string;
  npwp: string;
  email: string;
  phone: string;
  kode: string;
}

const initialState = {
  name: '',
  alamat: '',
  npwp: '',
  email: '',
  phone: '',
  kode: '',
};

const AddComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onLoadButton, onError }) => {
  const [{ name, alamat, npwp, kode, email, phone }, setState] = useState<InitialState>(
    initialState,
  );

  const [isDisabled, setDisabledSupplier] = useState(false);

  const provinsi = useAutoComplete();
  const kota = useAutoComplete();
  const kecamatan = useAutoComplete();
  const kelurahan = useAutoComplete();
  const kode_pos = useKodePos(kecamatan.text);

  useEffect(() => {
    if (name === '') {
      return setDisabledSupplier(true);
    }
    if (alamat === '') {
      return setDisabledSupplier(true);
    }
    if (npwp === '') {
      return setDisabledSupplier(true);
    }
    if (kode === '') {
      return setDisabledSupplier(true);
    }
    if (email === '') {
      return setDisabledSupplier(true);
    }
    if (phone === '') {
      return setDisabledSupplier(true);
    }
    if (provinsi.id === 0) {
      return setDisabledSupplier(true);
    }
    if (kota.id === 0) {
      return setDisabledSupplier(true);
    }
    if (kecamatan.id === 0) {
      return setDisabledSupplier(true);
    }
    if (kelurahan.id === 0) {
      return setDisabledSupplier(true);
    }
    return setDisabledSupplier(false);
  }, [alamat, email, kode, kecamatan.id, kelurahan.id, kota.id, name, npwp, phone, provinsi.id]);

  const DataJSON = JSON.stringify({
    name,
    alamat,
    npwp,
    kode,
    email,
    phone,
    id_kelurahan: kelurahan.id,
  });

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const onCreateSuplier = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Tambah Daftar Suplier"
      footer={null}
      width={700}
      onCancel={onClearState}
    >
      <div className={styles.modal_body}>
        <Col>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="name">
                  Nama Supplier
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="name"
                  placeholder="Isi Nama"
                  value={name}
                  onChange={onChangeState}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="alamat">
                  Alamat
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="alamat"
                  placeholder="Isi Alamat"
                  value={alamat}
                  onChange={onChangeState}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="npwp">
                  NPWP (Optional)
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="npwp"
                  placeholder="Isi NPWP"
                  value={npwp}
                  onChange={onChangeState}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="email"
                  placeholder="Isi Email"
                  value={email}
                  onChange={onChangeState}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="phone">
                  No. Telpon
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="phone"
                  placeholder="Isi No Telepon"
                  value={String(phone).replace(/[^-0-9]/g, '')}
                  onChange={onChangeState}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="provinsi">
                  Provinsi
                </label>
                <Provinsi
                  id="provinsi"
                  value={provinsi.text}
                  onChange={provinsi.changeText}
                  onSelect={provinsi.selectText}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="kota">
                  Kota
                </label>
                <Kota
                  id="kota"
                  value={kota.text}
                  onChange={kota.changeText}
                  onSelect={kota.selectText}
                  onClear={kota.clearText}
                  filter={String(provinsi.id)}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="kecamatan">
                  Kecamatan
                </label>
                <Kecamatan
                  id="kecamatan"
                  value={kecamatan.text}
                  onChange={kecamatan.changeText}
                  onSelect={kecamatan.selectText}
                  onClear={kecamatan.clearText}
                  filter={String(kota.id)}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="kelurahan">
                  Kelurahan
                </label>
                <Kelurahan
                  id="kelurahan"
                  value={kelurahan.text}
                  onChange={kelurahan.changeText}
                  onSelect={kelurahan.selectText}
                  onClear={kelurahan.clearText}
                  filter={String(kecamatan.id)}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="kode">
                  Kode Pos
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="kode"
                  disabled={true}
                  value={kode_pos.kode || 0}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="kode">
                  Code
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="kode"
                  placeholder="Isi Code Pelanggan"
                  value={kode}
                  onChange={onChangeState}
                />
              </div>
            </div>
          </Row>
        </Col>
      </div>
      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
        <Button
          disabled={isDisabled || onLoadButton}
          onClick={onCreateSuplier}
          type="primary"
          className={styles.button}
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
