import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Input, Button } from 'antd';
import styles from './index.less';

import Group from '@/components/General/Group';
import Gender from '@/components/General/Gender';
import Provinsi from '@/components/General/Provinsi';
import Kota from '@/components/General/Kota';
import Kecamatan from '@/components/General/Kecamatan';
import Kelurahan from '@/components/General/Kelurahan';

import Suplier from '@/components/AutoComplete/AutoSuplier';

import useSelect from '@/hooks/useSelect';
import useAutoComplete from '@/hooks/useAutoComplete';
import useKodePos from '@/hooks/useKodePos';

import { TambahPembeli } from './index';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: TambahPembeli) => void;
  onLoadButton: boolean;
  onError: any;
}

const initialState = {
  name: '',
  alamat: '',
  npwp: '',
  email: '',
  phone: '',
  code: '',
};

const AddComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onLoadButton, onError }) => {
  const [{ name, alamat, code, npwp, email, phone }, setState] = useState(initialState);
  const [isDisabled, setDisabled] = useState(false);

  const [id_pembeli_grup, onChangeGroup] = useSelect('1');
  const [gender, onChangeGender] = useSelect('0');

  const provinsi = useAutoComplete();
  const kota = useAutoComplete();
  const kecamatan = useAutoComplete();
  const kelurahan = useAutoComplete();
  const kode_pos = useKodePos(String(kecamatan.id));

  const suplier = useAutoComplete();

  useEffect(() => {
    if (!name) {
      return setDisabled(true);
    }

    if (!alamat) {
      return setDisabled(true);
    }

    if (!email) {
      return setDisabled(true);
    }

    if (!code) {
      return setDisabled(true);
    }

    if (!phone) {
      return setDisabled(true);
    }

    if (!provinsi.id) {
      return setDisabled(true);
    }

    if (!kota.id) {
      return setDisabled(true);
    }

    if (!kecamatan.id) {
      return setDisabled(true);
    }

    if (!kelurahan.id) {
      return setDisabled(true);
    }

    if (!suplier.id) {
      return setDisabled(true);
    }

    return setDisabled(false);
  }, [
    alamat,
    code,
    email,
    kecamatan.id,
    kelurahan.id,
    kota.id,
    name,
    phone,
    provinsi.id,
    suplier.id,
  ]);

  const DataJSON = JSON.stringify({
    name,
    alamat,
    npwp,
    kode: code,
    email,
    phone,
    gender,
    id_kelurahan: kelurahan.id,
    id_suplier: suplier.id,
    id_pembeli_grup,
  });

  const handleChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const createPelanggan = () => {
    onCreate({
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Tambah Daftar Pembeli"
      closable={false}
      footer={null}
      width={700}
    >
      <div className={styles.modal_body}>
        <Col>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="name">
                  Nama
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="name"
                  placeholder="Isi Nama"
                  value={name}
                  onChange={handleChangeState}
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
                  onChange={handleChangeState}
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
                  onChange={handleChangeState}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="gender">
                  Jenis Kelamin
                </label>
                <Gender initial="Laki Laki" handleChange={onChangeGender} />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <Input
                  className={styles.input}
                  id="email"
                  placeholder="Isi Email"
                  value={email}
                  onChange={handleChangeState}
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
                  onChange={handleChangeState}
                />
              </div>
            </div>
          </Row>

          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="group">
                  Group
                </label>
                <Group initial="Tender" handleChange={onChangeGroup} />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="suplier">
                  Suplier (Optional)
                </label>
                <Suplier
                  id="suplier"
                  value={suplier.text}
                  onSelect={suplier.selectText}
                  onChange={suplier.changeText}
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
                <label className={styles.label} htmlFor="code">
                  Code Pelanggan
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="code"
                  placeholder="Isi Code Pelanggan"
                  value={code}
                  onChange={handleChangeState}
                />
              </div>
            </div>
          </Row>
        </Col>
      </div>
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
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
          onClick={createPelanggan}
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
