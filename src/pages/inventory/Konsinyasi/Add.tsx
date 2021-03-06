import React, { useEffect, useState } from 'react';
import { Modal, Button, Input, Row } from 'antd';
import NumberFormat from 'react-number-format';
import styles from './index.less';

import useNumber from '../hooks/useNumber';
import useAutoComplete from '../hooks/useAutoComplete';
import useSelect from '@/hooks/useSelect';

import SelectSatuan from '@/components/Select/SelectSatuan';
import SelectAll from '@/components/Select/SelectAll';
import Barang from '@/components/AutoComplete/AutoBarang';

import { CreateKonsinyasi } from './index';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: CreateKonsinyasi) => void;
  onLoadButton: boolean;
}

const AddComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onLoadButton }) => {
  const [isDisabled, setDisabled] = useState(false);

  const [total, onChangeTotal, onClearTotal] = useNumber('');
  const [qty, onChangeQty, onClearQty] = useNumber('');

  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect('');
  const [id_suplier, onChangeSuplier, onClearSuplier] = useSelect('');

  const barang = useAutoComplete({
    idSelect: "",
    textSelect: "",
  });

  useEffect(() => {
    if (!barang.text) {
      return setDisabled(true);
    }
    if (!id_suplier) {
      return setDisabled(true);
    }
    if (!qty) {
      return setDisabled(true);
    }
    if (!total) {
      return setDisabled(true);
    }
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [barang.text, id_suplier, qty, total, id_satuan_barang]);

  useEffect(() => {
    onClearSatuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.text]);

  const DataJSON = JSON.stringify({
    total,
    qty,
    nama_barang: barang.text,
    id_satuan_barang,
    id_suplier,
  });

  const onClearState = () => {
    barang.clearText();
    onClearSatuan();
    onClearSuplier();
    onClearTotal();
    onClearQty();
    onCancel();
  };

  const onCreateKonsinyasi = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal title="Input Detail Konsinyasi" closable={false} visible={visible} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.col}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nama_barang ">
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
        </div>

        <div className={styles.col}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="qty">
                Qty
              </label>
              <Row justify="space-between">
                <div className={styles.box6}>
                  <NumberFormat
                    id="qty"
                    className={styles.number}
                    placeholder="Isi Qty"
                    thousandSeparator={true}
                    thousandsGroupStyle={'thousand'}
                    onValueChange={onChangeQty}
                    value={qty}
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
        </div>

        <div className={styles.col}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="total">
                Total Harga
              </label>
              <NumberFormat
                id="total"
                className={styles.number}
                placeholder="Isi Total Harga"
                thousandSeparator={true}
                thousandsGroupStyle={'thousand'}
                onValueChange={onChangeTotal}
                value={total}
              />
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nama_suplier">
                Nama Suplier
              </label>
              <SelectAll
                address={`${REACT_APP_ENV}/admin/v1/master/suplier/list`}
                handleChange={onChangeSuplier}
              />
            </div>
          </div>
        </div>
      </div>
      <Row justify="end">
        <Button
          type="primary"
          danger
          disabled={onLoadButton}
          onClick={onClearState}
          className={styles.button}
        >
          Batal
        </Button>
        <Button
          type="primary"
          className={styles.button}
          onClick={onCreateKonsinyasi}
          disabled={isDisabled || onLoadButton}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
