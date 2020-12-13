import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Input, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

import SelectSatuan from '@/components/Select/SelectSatuan';
import Suplier from '@/components/AutoComplete/AutoSuplier';
import Barang from '@/components/AutoComplete/AutoBarang';

import useSelect from '@/hooks/useSelect';
import useAutoComplete from '@/hooks/useAutoComplete';
import useNumber from '@/hooks/useNumber';

import { Utang } from './index';
interface Props {
  visible: boolean;
  onError: any;
  onCancel: () => void;
  onCreate: ({ url, json, clear }: Utang) => void;
  onLoadButton: boolean;
}

const AddComponent: React.FC<Props> = ({ visible, onError, onCancel, onCreate, onLoadButton }) => {
  const [nama_sales, setState] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const [qty, onChangeQty, onClearQty] = useNumber('');
  const [harga, onChangeHarga, onClearHarga] = useNumber('');

  const id_suplier = useAutoComplete();
  const barang = useAutoComplete();
  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect('0');

  const DataJSON = JSON.stringify({
    nama_sales,
    qty,
    harga,
    nama_barang: barang.text,
    id_suplier: id_suplier.id,
    id_satuan_barang,
  });

  useEffect(() => {
    if (!harga) {
      return setDisabled(true);
    }
    if (!nama_sales) {
      return setDisabled(true);
    }
    if (!barang.text) {
      return setDisabled(true);
    }
    if (!qty) {
      return setDisabled(true);
    }
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    if (!id_suplier.text) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [harga, id_satuan_barang, id_suplier.text, barang.text, nama_sales, qty]);

  useEffect(() => {
    onClearSatuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.text]);

  const onChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  const onClearState = () => {
    setState('');
    onClearHarga();
    onClearQty();
    barang.clearText();
    onClearSatuan();
    onCancel();
  };

  const createUtang = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/finance/utang`,
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal
      visible={visible}
      title="Tambah Daftar Utang"
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
                <label className={styles.label} htmlFor="nama_barang">
                  Nama Barang
                </label>
                <Barang
                  id="barang"
                  value={barang.text}
                  onChange={barang.changeText}
                  onSelect={barang.selectText}
                />
              </div>
            </div>
          </Row>
          <Row>
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
            {barang.text ? (
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="qty_satuan">
                    Satuan
                  </label>
                  <SelectSatuan
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.text}`}
                    select_id="qty_satuan"
                    handleChange={onChangeSatuan}
                  />
                </div>
              </div>
            ) : null}
          </Row>
          <Row>
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
          onClick={createUtang}
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
