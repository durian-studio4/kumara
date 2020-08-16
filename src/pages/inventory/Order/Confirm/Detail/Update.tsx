import React, { useState, useEffect } from 'react';
import { Modal, Row, Button, Input, DatePicker } from 'antd';
import { format } from 'date-fns';
import styles from '../index.less';

import SelectSatuan from '@/components/Select/SelectSatuan';
import Suplier from '@/components/AutoComplete/AutoSuplier';

import useAutoComplete from '@/hooks/useAutoComplete';
import useSelect from '@/hooks/useSelect';
import useNumber from '@/hooks/useNumber';

// import PageError from '@/components/PageError'

import { UpdateOrder } from './index';

interface Props {
  visible: boolean;
  onCreate: ({ url, json, clear }: UpdateOrder) => void;
  onCancel: () => void;
  onLoading: boolean;
  id_confirm: number;
  barang_confirm: string;
}

const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

const initialDate = format(new Date(), 'yyyy-MM-dd');

const UpdateComponent: React.FC<Props> = ({
  visible,
  onCreate,
  onCancel,
  onLoading,
  barang_confirm,
  id_confirm,
}) => {
  const [updateDisabled, setUpdateDisabled] = useState(false);
  const [expired_date, setDate] = useState(initialDate);

  const [total, onChangeTotal, onClearTotal] = useNumber('');
  const [qty, onChangeQty, onClearQty] = useNumber('');

  const id_suplier = useAutoComplete();
  const [id_satuan_barang, changeSatuan] = useSelect('0');

  let DataJSON = {};

  useEffect(() => {
    if (isEmpty(DataJSON)) {
      return setUpdateDisabled(true);
    }
    return setUpdateDisabled(false);
  }, [DataJSON]);

  const onChangeDate = (date: any, dateString: any) => {
    setDate(dateString);
  };

  const onClearState = () => {
    onClearQty();
    onClearTotal();
    setDate(initialDate);
    id_suplier.clearText();
    DataJSON = {};
    onCancel();
  };

  const updateOrder = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_confirm}/update`,
      json: JSON.stringify(DataJSON),
      clear: onClearState,
    });
  };

  if (id_satuan_barang) {
    DataJSON['id_satuan_barang'] = id_satuan_barang;
  }

  if (total) {
    DataJSON['total'] = total;
  }

  if (qty) {
    DataJSON['qty_confirm'] = qty;
  }

  if (id_suplier.id) {
    DataJSON['id_suplier'] = id_suplier.id;
  }

  if (expired_date) {
    DataJSON['expired_date'] = expired_date;
  }

  return (
    <Modal visible={visible} title="Update Order" onCancel={onCancel} width={500} footer={null}>
      {/* {status !== 200 || error ? <PageError /> : null} */}
      <div className={styles.modal_body}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="qty_confirm">
              Qty
            </label>
            <Input
              className={styles.input}
              id="qty_confirm"
              placeholder="0"
              value={qty}
              onChange={onChangeQty}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="total">
              Harga
            </label>
            <Input
              className={styles.input}
              id="total"
              placeholder="0"
              value={total}
              onChange={onChangeTotal}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="satuan">
              Satuan Barang
            </label>
            <SelectSatuan
              address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang_confirm}`}
              handleChange={changeSatuan}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="id_suplier">
              Suplier
            </label>
            <Suplier
              id="id_suplier"
              value={id_suplier.text}
              onChange={id_suplier.changeText}
              onSelect={id_suplier.selectText}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label}>Expired</label>
            {/* <DateControl selected={Date.parse(expired_date)} onChange={onChangeExpired} /> */}
            <DatePicker style={{ width: '100%' }} onChange={onChangeDate} />
          </div>
        </div>
      </div>
      <Row justify="space-between">
        <Button onClick={onCancel} disabled={onLoading} type="primary" danger>
          Batal
        </Button>
        <Button onClick={updateOrder} type="primary" disabled={updateDisabled || onLoading}>
          {onLoading && 'Updating...'}
          {!onLoading && 'Tambah'}
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
