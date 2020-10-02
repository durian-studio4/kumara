import React, { useState, useEffect, Fragment } from 'react';
import { Input, Row, Button, Card, Spin } from 'antd';
import { default as NumberFormat } from 'react-number-format';
import styles from './index.less';

import useAutoComplete from '@/hooks/useAutoComplete';
import useFetch from '@/hooks/useFetch';
import useSelect from '@/hooks/useSelect';
import useNumber from '../../hooks/useNumber';

import Barang from '@/components/AutoComplete/AutoBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import { TambahBarang } from './index';

interface Props {
  onCreate: ({ json, clear }: TambahBarang) => void;
  onLoading: boolean;
}

const InputComponent: React.FC<Props> = ({ onCreate, onLoading }) => {
  const [isDisabled_add, setDisabledAdd] = useState(false);

  const [data, status, loading, isError, fetching] = useFetch();
  const [data_harga, status_harga, loading_harga, error_harga, fetchingHarga] = useFetch();

  const [id_satuan_barang, onChangeSatuan, onClearSatuan] = useSelect('');

  const [harga, onChangeHarga, onClearHarga] = useNumber('');
  const [diskon, onChangeDiskon, onClearDiskon] = useNumber('');
  const [qty, onChangeQty, onClearQty] = useNumber('');

  const barang = useAutoComplete();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (barang.values) {
        fetching(
          `${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.values}`,
        );
      }
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.values]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (barang.values && id_satuan_barang) {
        fetchingHarga(
          `${REACT_APP_ENV}/admin/v1/master/barang/hargacheck?nama_barang=${barang.values}&id_satuan_barang=${id_satuan_barang}`,
        );
      }
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.values, id_satuan_barang]);

  useEffect(() => {
    onClearSatuan();
  }, [barang.values]);

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
    diskon: !diskon ? 0 : diskon,
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
          {data_harga.avg ? (
            <span>{`Harga Rata-rata ${Math.floor(data_harga.avg).toLocaleString()}`}</span>
          ) : null}
        </div>
      );
    }
  };

  return (
    <Card>
      <p className={styles.title}>Input Barang</p>
      {status !== 200 || isError ? <PageError status={status} /> : null}
      {onLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
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
                  <div>
                    <Spin />
                  </div>
                ) : (
                  <Input
                    className={styles.input}
                    disabled={true}
                    value={barang.values ? data.qty_gudang : 0}
                  />
                )}
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label}>Stok Display</label>
                {loading ? (
                  <div>
                    <Spin />
                  </div>
                ) : (
                  <Input
                    className={styles.input}
                    disabled={true}
                    value={barang.values ? data.qty_display : 0}
                  />
                )}
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.box3}>
              <Row justify="space-between">
                <div className={styles.box5}>
                  <div className={styles.group}>
                    <label className={styles.label}>Banyak Barang</label>
                    <NumberFormat
                      className={styles.number}
                      thousandSeparator={true}
                      thousandsGroupStyle={'thousand'}
                      onValueChange={onChangeQty}
                      value={String(qty)}
                    />
                  </div>
                </div>
                <div className={styles.box5}>
                  <div className={styles.group}>
                    <label className={styles.label}>Satuan Barang</label>
                    {barang.values ? (
                      <SelectSatuan
                        address={`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.values}`}
                        select_id="qty_barang"
                        initial="Mohon Pilih"
                        handleChange={onChangeSatuan}
                      />
                    ) : null}
                  </div>
                </div>
              </Row>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="harga">
                  Harga Satuan
                </label>
                <NumberFormat
                  style={{
                    borderColor:
                      Number(harga) < Number(data_harga && data_harga.avg) ? '#be1e2d' : '#d9d9d9',
                  }}
                  className={styles.number}
                  thousandSeparator={true}
                  thousandsGroupStyle={'thousand'}
                  onValueChange={onChangeHarga}
                  value={String(harga)}
                />
                {barang.values && id_satuan_barang ? hargaAvg() : null}
              </div>
            </div>
            <div className={styles.box3}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="diskon">
                  Diskon
                </label>
                <NumberFormat
                  placeholder="%"
                  className={styles.number}
                  thousandSeparator={true}
                  thousandsGroupStyle={'thousand'}
                  onValueChange={onChangeDiskon}
                  value={String(diskon)}
                />
              </div>
            </div>
          </Row>
        </Fragment>
      )}
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
