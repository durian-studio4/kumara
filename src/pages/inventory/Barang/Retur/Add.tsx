import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Row } from 'antd';
import styles from './index.less';

import SelectSatuan from '@/components/Select/SelectSatuan';
import Barang from '@/components/AutoComplete/AutoBarang';

import useAutoComplete from '../../hooks/useAutoComplete';
import useSelect from '@/hooks/useSelect';
import useNumber from '@/hooks/useNumber';

interface CreateBarang {
  json: {};
  clear: () => void;
}

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: CreateBarang) => void;
  onLoadButton: boolean;
}

const { TextArea } = Input;

const initialState = {
  keterangan: '',
  nama_sales: '',
};

const AddComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onLoadButton }) => {
  const [{ nama_sales, keterangan }, setState] = useState(initialState);
  const [isDisabled, setDisabled] = useState(false);

  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect('');

  const [qty, onChangeQty, onClearQty] = useNumber('');

  const barang = useAutoComplete({
    idSelect: "",
    textSelect: "",
  });

  useEffect(() => {
    if (!barang.text) {
      return setDisabled(true);
    }
    if (!nama_sales) {
      return setDisabled(true);
    }
    if (!keterangan) {
      return setDisabled(true);
    }
    if (!qty) {
      return setDisabled(true);
    }
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [barang.text, keterangan, nama_sales, qty, id_satuan_barang]);

  useEffect(() => {
    onClearSatuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.text]);

  const DataJSON = JSON.stringify({
    nama_sales,
    keterangan,
    qty,
    nama_barang: barang.text,
    id_satuan_barang,
  });

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onClearState = () => {
    setState({ ...initialState });
    onClearQty();
    onClearSatuan();
    barang.clearText()
    onCancel();
  };

  const onCreateBarang = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal title="Input Retur Barang" visible={visible} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.col}>
          <div className={styles.box10}>
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
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="id_barang">
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
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="qty">
                Qty
              </label>
              <Row justify="space-between">
                <div className={styles.box6}>
                  <Input
                    className={styles.input}
                    id="qty"
                    placeholder="0"
                    value={qty}
                    onChange={onChangeQty}
                  />
                </div>
                {barang.text ? (
                  <div className={styles.box3}>
                    <SelectSatuan
                      address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.text}`}
                      handleChange={onChangeSatuan}
                    />
                  </div>
                ) : null}
              </Row>
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="keterangan">
                Keterangan
              </label>
              <TextArea
                className={styles.area}
                id="keterangan"
                placeholder="Isi Keterangan"
                onChange={onChangeState}
                value={keterangan}
              />
            </div>
          </div>
        </div>
      </div>
      <Row justify="end">
        <Button
          type="primary"
          danger
          className={styles.button}
          disabled={onLoadButton}
          onClick={onClearState}
        >
          Batal
        </Button>
        <Button
          type="primary"
          className={styles.button}
          onClick={onCreateBarang}
          disabled={isDisabled || onLoadButton}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
