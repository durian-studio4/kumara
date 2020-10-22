import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Input, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

import useSelect from '@/hooks/useSelect';
import useAutoComplete from '@/hooks/useAutoComplete';
import useNumber from '@/hooks/useNumber';

import SelectBarang from '@/components/Select/SelectBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';
import Suplier from '@/components/AutoComplete/AutoSuplier';

import { Piutang } from './index';
interface Props {
  visible: boolean;
  onError: any;
  onCancel: () => void;
  onCreate: ({ url, json, clear }: Piutang) => void;
  onLoadButton: boolean;
}

const initialState = {
  nama_sales: '',
  nama_pengambil: '',
};

const AddComponent: React.FC<Props> = ({ visible, onError, onCancel, onCreate, onLoadButton }) => {
  const [{ nama_sales, nama_pengambil }, setState] = useState(initialState);
  const [isDisabled, setDisabled] = useState(false);

  const [qty, onChangeQty, onClearQty] = useNumber('');
  const [harga, onChangeHarga, onClearHarga] = useNumber('');

  const [nama_barang, onChangeBarang, onClearBarang] = useSelect('');
  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect(0);

  const id_suplier = useAutoComplete();

  const DataJSON = JSON.stringify({
    nama_sales,
    nama_pengambil,
    qty,
    harga,
    nama_barang,
    id_suplier: id_suplier.id,
    id_satuan_barang,
  });

  useEffect(() => {
    if (!qty) {
      return setDisabled(true);
    }
    if (!harga) {
      return setDisabled(true);
    }
    if (!nama_sales) {
      return setDisabled(true);
    }
    if (!nama_pengambil) {
      return setDisabled(true);
    }
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    if (!nama_barang) {
      return setDisabled(true);
    }
    if (!id_suplier.text) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [harga, nama_barang, id_suplier.text, nama_pengambil, nama_sales, qty, id_satuan_barang]);

  useEffect(() => {
    onClearSatuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nama_barang]);

  const onChangeState = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onClearState = () => {
    setState({ ...initialState });
    onClearSatuan();
    onClearHarga();
    onClearBarang();
    onClearQty();
    onCancel();
  };

  const createPiutang = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/finance/piutang`,
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Tambah Daftar Piutang"
      width={1000}
      closable={false}
      footer={null}
    >
      <div className={styles.modal_body}>
        <Col>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="tanggal">
                  Tanggal
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="tanggal"
                  value={format(new Date(), 'dd/MM/yyyy')}
                  disabled={true}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="nama_sales">
                  Nama Sales
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="nama_sales"
                  placeholder="Isi Nama Sales"
                  value={nama_sales}
                  onChange={onChangeState}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="nama_pengambil">
                  Nama Pengambil
                </label>
                <Input
                  className={styles.input}
                  type="text"
                  id="nama_pengambil"
                  placeholder="Isi Nama Pengambil"
                  value={nama_pengambil}
                  onChange={onChangeState}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="nama_barang">
                  Nama Barang
                </label>
                <SelectBarang
                  address={`${REACT_APP_ENV}/admin/v1/master/barang/listgroup`}
                  select_id="nama_barang"
                  handleChange={onChangeBarang}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="toko">
                  Toko / Suplier
                </label>
                <Suplier
                  id="toko"
                  value={id_suplier.text}
                  onChange={id_suplier.changeText}
                  onSelect={id_suplier.selectText}
                />
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="qty">
                  Qty
                </label>
                <Input
                  className={styles.input}
                  id="qty"
                  placeholder="Isi Qty"
                  value={qty}
                  onChange={onChangeQty}
                />
              </div>
            </div>
          </Row>
          <Row>
            {nama_barang ? (
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="qty_satuan">
                    Satuan
                  </label>
                  <SelectSatuan
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${nama_barang}`}
                    select_id="qty_satuan"
                    handleChange={onChangeSatuan}
                  />
                </div>
              </div>
            ) : null}
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="harga">
                  Harga Satuan
                </label>
                <Input
                  className={styles.input}
                  id="harga"
                  placeholder="Isi Harga"
                  value={harga}
                  onChange={onChangeHarga}
                />
              </div>
            </div>
          </Row>
        </Col>
      </div>
      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
        <Button
          className={styles.button}
          disabled={onLoadButton}
          onClick={onClearState}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          onClick={createPiutang}
          disabled={isDisabled || onLoadButton}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
