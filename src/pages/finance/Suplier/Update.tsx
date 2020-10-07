import React, { useState, useEffect } from 'react';
import { Modal, Row, Button, Input, DatePicker } from 'antd';
import moment from 'moment';
import { format } from 'date-fns';
import { default as NumberFormat } from 'react-number-format';
import styles from './index.less';

import SelectSatuan from '@/components/Select/SelectSatuan';
import Suplier from '@/components/AutoComplete/AutoSuplier';

import useAutoComplete from './hooks/useAutoComplete';
import useSelect from '@/hooks/useSelect';
import useNumber from '../hooks/useNumber';

// import PageError from '@/components/PageError'

interface Props {
  visible: boolean;
  onCreate: ({ url, json, clear }: any) => void;
  onCancel: () => void;
  onLoading: boolean;
  id_confirm: string;
  key_confirm: string;
  barang_confirm: string;
  data: any;
}

const initialDate = format(new Date(), 'dd-MM-yyyy');

const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

// const initialState = {
//   total: '',
//   qty: '',
// };

const UpdateComponent: React.FC<Props> = ({
  visible,
  onCreate,
  onCancel,
  onLoading,
  data,
  barang_confirm,
  key_confirm,
  id_confirm,
}) => {
  const data_detail = data.detail && data.detail[key_confirm];

  const [expired_date, setDate] = useState(initialDate);

  const [total, onChangeTotal, onClearTotal] = useNumber(
    data_detail.harga.split('Rp').join('').split('.').join('').trim(),
  );
  const [qty, onChangeQty, onClearQty] = useNumber(data_detail.qty_confirm);
  // const [{ total, qty }, setState] = useState(initialState);

  const id_suplier = useAutoComplete({
    idSelect: data_detail.id_suplier,
    textSelect: data_detail.nama_suplier,
  });

  const [id_satuan_barang, changeSatuan] = useSelect(data_detail.id_satuan_barang);

  const [updateDisabled, setUpdateDisabled] = useState(false);

  const DataJSON = {
    id_satuan_barang,
    harga: total,
    qty_confirm: qty,
    id_suplier: id_suplier.id,
    expired_date,
  };

  useEffect(() => {
    // setState({
    //   total: data_detail.total.split('Rp').join('').split('.').join('').trim(),
    //   qty: data_detail.qty_confirm,
    // });
    setDate(data_detail.expired_date);
  }, [data_detail]);

  useEffect(() => {
    if (isEmpty(DataJSON)) {
      return setUpdateDisabled(true);
    }
    return setUpdateDisabled(false);
  }, [DataJSON]);

  const onChangeDate = (date: any, dateString: any) => {
    setDate(dateString);
  };

  // const onChangeState = (e: any) => {
  //   const { id, value } = e.target;
  //   setState((state) => ({ ...state, [id]: value }));
  // };

  const onClearState = () => {
    onClearTotal();
    onClearQty();
    setDate(initialDate);
    id_suplier.clearText();
    onCancel();
  };

  const updateOrder = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/inventory/order/${id_confirm}/update`,
      json: JSON.stringify(DataJSON),
      clear: onClearState,
    });
  };

  return (
    <Modal visible={visible} title="Update Order" onCancel={onCancel} width={500} footer={null}>
      {/* {status !== 200 || error ? <PageError /> : null} */}
      <div className={styles.modal_body}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="qty">
              Qty
            </label>
            <NumberFormat
              className={styles.number}
              thousandSeparator={true}
              thousandsGroupStyle={'thousand'}
              onValueChange={onChangeQty}
              value={String(qty)}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="total">
              Harga
            </label>
            <NumberFormat
              className={styles.number}
              thousandSeparator={true}
              thousandsGroupStyle={'thousand'}
              onValueChange={onChangeTotal}
              value={String(total)}
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
              initial={data_detail.satuan_barang}
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
            <DatePicker
              style={{ width: '100%' }}
              onChange={onChangeDate}
              defaultValue={moment(data_detail.expired_date || initialDate)}
            />
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
