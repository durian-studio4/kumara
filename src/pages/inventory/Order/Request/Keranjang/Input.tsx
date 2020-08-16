import React, { useState, useMemo, useEffect } from 'react';
import { Row, Button, Card, Input, Spin } from 'antd';
import styles from './index.less';

import Barang from '@/components/AutoComplete/AutoBarang';
import SelectSatuan from '@/components/Select/SelectSatuan';

import PageError from '@/components/PageError';

import useAutoComplete from '@/hooks/useAutoComplete';
import useNumber from '@/hooks/useNumber';
import useSelect from '@/hooks/useSelect';
import useFetch from '@/hooks/useFetch';

import { CreateBarang } from './index';

interface Props {
  onCreate: ({ json, clear }: CreateBarang) => void;
}

const InputComponent: React.FC<Props> = ({ onCreate }) => {
  const [data, status, loading, error, fetching] = useFetch();

  const [isDisabled_add, setDisabledAdd] = useState(false);

  const [harga, onChangeHarga, onClearHarga] = useNumber('');
  const [qty, onChangeQty, onClearQty] = useNumber('');

  const barang = useAutoComplete();

  const [id_satuan_barang, onChangeSatuan] = useSelect('0');

  useEffect(() => {
    if (barang.values) {
      fetching(`${REACT_APP_ENV}/admin/v1/master/barang/selectgroup?nama_barang=${barang.values}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barang.values]);

  useMemo(() => {
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

  const DataJSON = JSON.stringify({
    qty,
    harga,
    id_satuan_barang,
    nama_barang: barang.values,
  });

  const handleClearState = () => {
    onClearHarga();
    onClearQty();
  };

  const createBarang = () => {
    onCreate({
      json: DataJSON,
      clear: handleClearState,
    });
  };

  return (
    <Card>
      <p className={styles.title}>Input Barang</p>
      {status !== 200 || error ? <PageError /> : null}
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
              id="harga"
              placeholder="0"
              value={harga}
              onChange={onChangeHarga}
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
          onClick={createBarang}
          disabled={isDisabled_add}
          style={{
            marginRight: '1em',
          }}
        >
          Tambahkan ke daftar
        </Button>
      </Row>
    </Card>
  );
};

export default InputComponent;
