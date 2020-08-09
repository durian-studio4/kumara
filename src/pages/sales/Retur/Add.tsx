import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Row } from 'antd';
import styles from './index.less';

import SelectBarang from '@/components/Select/SelectBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';

import useNumber from '@/hooks/useNumber';
import useSelect from '@/hooks/useSelect';

import { CreateRetur } from './index';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ url, json, clear }: CreateRetur) => void;
  onError: boolean;
  onLoadButton: boolean;
}

const { TextArea } = Input;

const initialState = {
  nama_sales: '',
  keterangan: '',
};

const AddComponent: React.FC<Props> = ({ onCancel, onCreate, onLoadButton, onError, visible }) => {
  const [{ keterangan, nama_sales }, setState] = useState(initialState);

  const [qty, onChangeQty, onClearQty] = useNumber('');

  const [isDisabled, setDisabled] = useState(false);

  const [nama_barang, onChangeBarang, onClearBarang] = useSelect('');
  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect('0');

  useEffect(() => {
    if (!nama_sales) {
      return setDisabled(true);
    }
    if (!keterangan) {
      return setDisabled(true);
    }
    if (!nama_barang) {
      return setDisabled(true);
    }
    if (!qty) {
      return setDisabled(true);
    }
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [nama_barang, keterangan, nama_sales, qty, id_satuan_barang]);

  useEffect(() => {
    onClearSatuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nama_barang]);

  const DataJSON = JSON.stringify({
    qty,
    keterangan,
    nama_sales,
    nama_barang,
    id_satuan_barang,
  });

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onClearState = () => {
    setState({ ...initialState });
    onClearSatuan();
    onClearBarang();
    onClearQty();
    onCancel();
  };

  const createRetur = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/sales/retur`,
      json: DataJSON,
      clear: onClearState,
    });
    onClearSatuan();
    onClearBarang();
    onClearQty();
    onCancel();
  };

  return (
    <Modal title="Input Retur Sales" visible={visible} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.col}>
          <div className={styles.box}>
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

          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nama_barang">
                Nama Barang
              </label>
              <SelectBarang
                address={`${REACT_APP_ENV}/admin/v1/master/barang/listgroup`}
                handleChange={onChangeBarang}
              />
            </div>
          </div>

          <div className={styles.box}>
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
                {nama_barang ? (
                  <div className={styles.box3}>
                    <SelectSatuan
                      address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${nama_barang}`}
                      handleChange={onChangeSatuan}
                    />
                  </div>
                ) : null}
              </Row>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="keterangan">
                Keterangan
              </label>
              <TextArea
                className={styles.area}
                id="keterangan"
                placeholder="Isi Keterangan"
                value={keterangan}
                onChange={onChangeState}
              />
            </div>
          </div>
        </div>
      </div>

      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
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
          onClick={createRetur}
          disabled={isDisabled || onLoadButton}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
