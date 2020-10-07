import React, { useState, useEffect } from 'react';
//---------CSS
import { Modal, Row, Col, Input, Button } from 'antd';

import styles from './index.less';

import useAutoComplete from '@/hooks/useAutoComplete';
import useSelect from '@/hooks/useSelect';
import useKodePos from '@/hooks/useKodePos';

import { TambahPembeli } from './index';

import Gender from '@/components/General/Gender';
import Group from '@/components/General/Group';
import Provinsi from '@/components/General/Provinsi';
import Kota from '@/components/General/Kota';
import Kecamatan from '@/components/General/Kecamatan';
import Kelurahan from '@/components/General/Kelurahan';

import Suplier from '@/components/AutoComplete/AutoSuplier';

interface Props {
  visible?: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: TambahPembeli) => void;
  onLoadButton: boolean;
  onError: boolean;
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
  const [{ name, kode, alamat, npwp, email, phone }, setState] = useState(initialState);

  const [isDisabled_supplier, setDisabled_supplier] = useState(false);

  const provinsi = useAutoComplete();
  const kota = useAutoComplete();
  const kecamatan = useAutoComplete();
  const kelurahan = useAutoComplete();
  const kode_pos = useKodePos(String(kecamatan.id));

  const [gender, onChangeGender] = useSelect('0');
  const [id_pembeli_grup, onChangeGroup] = useSelect('1');

  const suplier = useAutoComplete();

  useEffect(() => {
    if (name === '') {
      return setDisabled_supplier(true);
    }
    if (kode === '') {
      return setDisabled_supplier(true);
    }
    if (alamat === '') {
      return setDisabled_supplier(true);
    }
    if (email === '') {
      return setDisabled_supplier(true);
    }
    if (phone === '') {
      return setDisabled_supplier(true);
    }
    if (provinsi.id === 0) {
      return setDisabled_supplier(true);
    }
    if (kota.id === 0) {
      return setDisabled_supplier(true);
    }
    if (kecamatan.id === 0) {
      return setDisabled_supplier(true);
    }
    if (kelurahan.id === 0) {
      return setDisabled_supplier(true);
    }
    return setDisabled_supplier(false);
  }, [alamat, email, kode, kecamatan.id, kelurahan.id, kota.id, name, phone, provinsi.id]);

  const DataJSON = JSON.stringify({
    name,
    alamat,
    npwp,
    kode,
    email,
    phone,
    gender,
    id_kelurahan: kelurahan.id,
    id_suplier: suplier.id,
    id_pembeli_grup,
  });

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const onCreatePembeli = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClearState}
      title="Tambah Daftar Pembeli"
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
                <label className={styles.label}>Jenis Kelamin</label>
                <Gender select_id="gender" initial="Laki Laki" handleChange={onChangeGender} />
              </div>
            </div>
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
                  filter={provinsi.id}
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
                  filter={kota.id}
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
                  filter={kecamatan.id}
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
          disabled={isDisabled_supplier || onLoadButton}
          onClick={onCreatePembeli}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
