import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Row, Button, Input, Col } from 'antd';
import styles from './index.less';

import Gender from '@/components/General/Gender';
import Provinsi from '@/components/General/Provinsi';
import Kota from '@/components/General/Kota';
import Kecamatan from '@/components/General/Kecamatan';
import Kelurahan from '@/components/General/Kelurahan';
import Group from '@/components/General/Group';

import Suplier from '@/components/AutoComplete/AutoSuplier';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import useSelect from '@/hooks/useSelect';
import useFetch from '@/hooks/useFetch';
import useAutoComplete from './hooks/useAutoComplete';
import useKodePos from './hooks/useKodePos';

import { EditPembeli } from './index';
interface Props {
  id_update: number;
  visible: boolean;
  onUpdate: ({ url, json, clear }: EditPembeli) => void;
  onCancel: () => void;
  onError: any;
  onLoadButton: boolean;
}

const initialState = {
  name: '',
  alamat: '',
  npwp: '',
  email: '',
  phone: '',
  id_kelurahan: 0,
  kelurahan: '',
  id_kecamatan: 0,
  kecamatan: '',
  id_kota: 0,
  kota: '',
  id_provinsi: 0,
  provinsi: '',
  id_kode_pos: 0,
  id_suplier: 0,
  nama_suplier: '',
  kode_pos: '',
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

  const [appState, setState] = useState(initialState);

  const { name, alamat, npwp, email, phone } = appState;

  const [isDisabled, setDisabled] = useState(false);

  const [id_pembeli_grup, onChangeGroup] = useSelect('1');
  const [gender, onChangeGender] = useSelect('0');

  const provinsi_select = useAutoComplete({
    idSelect: appState.id_provinsi,
    textSelect: appState.provinsi,
  });
  const kota_select = useAutoComplete({
    idSelect: appState.id_kota,
    textSelect: appState.kota,
  });
  const kecamatan_select = useAutoComplete({
    idSelect: appState.id_kecamatan,
    textSelect: appState.kecamatan,
  });
  const kelurahan_select = useAutoComplete({
    idSelect: appState.id_kelurahan,
    textSelect: appState.kelurahan,
  });
  const kode_pos = useKodePos(String(kecamatan_select.id));

  const suplier = useAutoComplete({
    idSelect: appState.id_suplier,
    textSelect: appState.nama_suplier,
  });

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/pembeli/${id_update}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update]);

  useEffect(() => {
    if (!provinsi_select.id) {
      return setDisabled(true);
    }

    if (!kota_select.id) {
      return setDisabled(true);
    }

    if (!kecamatan_select.id) {
      return setDisabled(true);
    }

    if (!kelurahan_select.id) {
      return setDisabled(true);
    }

    return setDisabled(false);
  }, [kecamatan_select.id, kelurahan_select.id, kota_select.id, provinsi_select.id]);

  const DataJSON = JSON.stringify({
    name,
    alamat,
    npwp,
    email,
    phone,
    gender,
    id_kelurahan: kelurahan_select.id,
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

  const updatePelanggan = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/master/pembeli/${id_update}/update`,
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleClearState}
      footer={null}
      width={600}
      title="Edit Data Pelanggan"
    >
      {status !== 200 || isError ? <PageError /> : null}
      {isLoading ? (
        <PageLoading />
      ) : (
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
                  <Group select_id="group" initial="Tender" handleChange={onChangeGroup} />
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
                    value={provinsi_select.text}
                    onChange={provinsi_select.changeText}
                    onSelect={provinsi_select.selectText}
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
                    value={kota_select.text}
                    onChange={kota_select.changeText}
                    onSelect={kota_select.selectText}
                    onClear={kota_select.clearText}
                    filter={String(provinsi_select.id)}
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
                    value={kecamatan_select.text}
                    onChange={kecamatan_select.changeText}
                    onSelect={kecamatan_select.selectText}
                    onClear={kecamatan_select.clearText}
                    filter={String(kota_select.id)}
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
                    value={kelurahan_select.text}
                    onChange={kelurahan_select.changeText}
                    onSelect={kelurahan_select.selectText}
                    onClear={kelurahan_select.clearText}
                    filter={String(kecamatan_select.id)}
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
            </Row>
          </Col>
        </div>
      )}
      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
        <Button
          disabled={isDisabled || Boolean(onLoadButton)}
          onClick={updatePelanggan}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
