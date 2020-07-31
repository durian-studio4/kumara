import React, { useState, useEffect } from 'react';
import { Input, Row, Button, Card, Spin } from 'antd';
import styles from './index.less';

import useAutoComplete from '@/hooks/useAutoComplete';
import useFetch from '@/hooks/useFetch';
import useSelect from '@/hooks/useSelect';
import useNumber from '@/hooks/useNumber';

import Barang from '@/components/AutoComplete/AutoBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';

import PageError from '@/components/PageError';

import { TambahBarang } from './index';

interface Props {
  onCreate: ({ json, clear }: TambahBarang) => void;
}

const InputComponent: React.FC<Props> = ({ onCreate }) => {
  const [isDisabled_add, setDisabledAdd] = useState(false);

  const [data, status, loading, error, fetching] = useFetch();
  const [data_harga, status_harga, loading_harga, error_harga, fetchingHarga] = useFetch();

  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect(1);

  const [harga, onChangeHarga, onClearHarga] = useNumber('');
  const [diskon, onChangeDiskon, onClearDiskon] = useNumber('0');
  const [qty, onChangeQty, onClearQty] = useNumber('');

  const barang = useAutoComplete();

  useEffect(() => {
    if (barang.values) {
      fetching(`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.values}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.values]);

  useEffect(() => {
    if (barang.values) {
      fetchingHarga(
        `${REACT_APP_ENV}/admin/v1/master/barang/hargacheck?nama_barang=${barang.values}&id_satuan_barang=${id_satuan_barang}`,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.values, id_satuan_barang]);

  useEffect(() => {
    if (!harga) {
      return setDisabledAdd(true);
    }
    if (!qty) {
      return setDisabledAdd(true);
    }
    if (!barang.values) {
      return setDisabledAdd(true);
    }
    return setDisabledAdd(false);
  }, [barang.values, harga, qty]);

  const DataJSON_barang = JSON.stringify({
    nama_barang: barang.values,
    qty_barang: qty,
    harga,
    id_satuan_barang,
    diskon,
  });

  const handleClearState = () => {
    onClearQty();
    onClearDiskon();
    onClearHarga();
    onClearSatuan();
    barang.clearText();
  };

  const tambahBarang = () => {
    onCreate({
      json: DataJSON_barang,
      clear: handleClearState,
    });
  };

  const hargaAvg = () => {
    if (loading_harga) {
      return null;
    } else {
      if (status_harga !== 200 || error_harga) {
        return <i style={{ color: 'red' }}>can't get harga avg</i>;
      }
      return (
        <div style={{ textAlign: 'center' }}>
          <span>
            {data_harga.avg
              ? `Harga Rata-rata ${Math.floor(data_harga.avg).toLocaleString()}`
              : null}
          </span>
        </div>
      );
    }
  };

  return (
    <Card>
      <p className={styles.title}>Input Barang</p>
      {status !== 200 || error ? <PageError status={status} /> : null}
      <Row>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="barang">
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
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label}>Stok Gudang</label>
            {loading ? (
              <Spin />
            ) : (
              <Input className={styles.input} disabled={true} value={data.qty_gudang || 0} />
            )}
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label}>Stok Display</label>
            {loading ? (
              <Spin />
            ) : (
              <Input className={styles.input} disabled={true} value={data.qty_display || 0} />
            )}
          </div>
        </div>
      </Row>
      <Row>
        <div className={styles.box3}>
          <Row justify="space-between">
            <div className={styles.box5}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="qty">
                  Banyak Barang
                </label>
                <Input
                  className={styles.input}
                  id="qty"
                  placeholder="0"
                  value={qty}
                  onChange={onChangeQty}
                />
              </div>
            </div>
            {barang.values ? (
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label}>Satuan Barang</label>
                  <SelectSatuan
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.values}`}
                    select_id="qty_barang"
                    handleChange={onChangeSatuan}
                  />
                </div>
              </div>
            ) : null}
          </Row>
        </div>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="harga">
              Harga Satuan
            </label>
            <Input
              className={styles.input}
              bordercolor={
                Number(harga) < Number(data_harga && data_harga.avg) ? '#be1e2d' : '#d9d9d9'
              }
              id="harga"
              placeholder="0"
              value={harga}
              onChange={onChangeHarga}
            />
            {hargaAvg()}
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="diskon">
              Diskon
            </label>
            <Input
              className={styles.input}
              id="diskon"
              placeholder="0"
              value={diskon}
              onChange={onChangeDiskon}
            />
          </div>
        </div>
      </Row>
      <Row
        justify="end"
        style={{
          marginTop: '1em',
        }}
      >
        <Button
          type="primary"
          onClick={tambahBarang}
          disabled={isDisabled_add}
          style={{
            marginRight: '1em',
          }}
        >
          Tambahkan ke keranjang
        </Button>
      </Row>
    </Card>
  );
};

export default InputComponent;
