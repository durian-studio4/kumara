import React, { useEffect, useState } from 'react';
// import { format, toDate } from 'date-fns';
import { Modal, Button, Col, Row, Input } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import useNumber from '@/hooks/useNumber';
import useSelect from './hooks/useSelect';
import useAutoComplete from './hooks/useAutoComplete';

import SelectBarang from '@/components/Select/SelectBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';
import Suplier from '@/components/AutoComplete/AutoSuplier';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import { Utang } from './index';
interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ url, json, clear }: Utang) => void;
  id_edit: number;
}

const EditComponent: React.FC<Props> = ({ visible, onCancel, onCreate, id_edit }) => {
  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  const [nama_sales, setState] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const [nama_barang, onChangeBarang, onClearBarang] = useSelect(data_list.nama_barang);
  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect(data_list.id_satuan_barang);

  const [qty, onChangeQty, onClearQty] = useNumber(data_list.qty);
  const [harga, onChangeHarga, onClearHarga] = useNumber(
    data_list.harga && data_list.harga.split('Rp').join('').split('.').join('').trim(),
  );

  const suplier = useAutoComplete({
    idSelect: data_list.id_suplier,
    textSelect: data_list.nama_suplier,
  });

  const DataJSON = JSON.stringify({
    nama_sales,
    nama_barang,
    qty,
    harga,
    id_suplier: suplier.id,
    id_satuan_barang,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/utang/${id_edit}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_edit]);

  useEffect(() => {
    if (data_list) {
      setState(data_list.nama_sales);
      setTanggal(data_list.tanggal);
    }
  }, [data_list]);

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
    if (!id_satuan_barang) {
      return setDisabled(true);
    }
    if (!nama_barang) {
      return setDisabled(true);
    }
    if (!suplier.text) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [harga, nama_barang, suplier.text, nama_sales, qty, id_satuan_barang]);

  // useEffect(() => {
  //   onClearSatuan();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [nama_barang]);

  const onChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  const onClearState = () => {
    setState('');
    onClearSatuan(0);
    onClearBarang('');
    onClearQty();
    onClearHarga();
    onCancel();
  };

  const onEdit = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/finance/utang/${id_edit}/update`,
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal visible={visible} title="Edit Daftar Utang" width={1000} closable={false} footer={null}>
      {status_list !== 200 || error_list ? <PageError /> : null}
      {loading_list ? (
        <PageLoading />
      ) : (
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
                    value={tanggal}
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
                  <SelectBarang
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/listgroup`}
                    initial={data_list.nama_barang}
                    handleChange={onChangeBarang}
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
                    value={suplier.text}
                    onChange={suplier.changeText}
                    onSelect={suplier.selectText}
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
              {nama_barang ? (
                <div className={styles.box3}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="qty_satuan">
                      Satuan
                    </label>
                    <SelectSatuan
                      address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${nama_barang}`}
                      initial={data_list.satuan_barang}
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
      )}
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          className={styles.button}
          disabled={Boolean(loading_list)}
          onClick={onClearState}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          disabled={isDisabled || Boolean(loading_list)}
          onClick={onEdit}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default EditComponent;
