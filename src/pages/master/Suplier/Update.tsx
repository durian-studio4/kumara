import React, { useEffect, useState } from 'react';
import { Modal, Row, Col, Button, Input } from 'antd';
import styles from './index.less';

import Provinsi from '@/components/General/Provinsi';
import Kota from '@/components/General/Kota';
import Kecamatan from '@/components/General/Kecamatan';
import Kelurahan from '@/components/General/Kelurahan';

import useFetch from '@/hooks/useFetch';
import useKodePos from './hooks/useKodePos';
import useAutoComplete from './hooks/useAutoComplete';

import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

import { EditSuplier } from './index';

interface Props {
  visible: boolean;
  id_update: number;
  onUpdate: ({ url, json, clear }: EditSuplier) => void;
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
  const kode_pos = useKodePos(kecamatan_select.id);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/suplier/${id_update}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update]);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

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
    id_provinsi: provinsi_select.id,
    id_kota: kota_select.id,
    id_kecamatan: kecamatan_select.id,
    id_kelurahan: kelurahan_select.id,
  });

  const handleChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const updateSupplier = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/master/suplier/${id_update}/update`,
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Edit Data Suplier"
      onCancel={handleClearState}
      footer={null}
      width={600}
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
                    Nama Supplier
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
                    filter={provinsi_select.text}
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
                    filter={kota_select.text}
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
                    filter={kecamatan_select.text}
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
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button disabled={isDisabled || onLoadButton} onClick={updateSupplier} type="primary">
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
