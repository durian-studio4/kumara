import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { Button, Input, Checkbox } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

import Pembeli from './Pembeli';
import Add from './Add';

import useAutoComplete from '@/hooks/useAutoComplete';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface TambahPembeli {
  json: {};
  clear: () => void;
}

const HomeComponent: React.FC<Props> = () => {
  const [nama_sales, setName] = useState('');
  const [visible, setVisible] = useState(false);

  const [isLoading_supplier, isError_supplier, postSupplier] = useCreate();

  const [isLoading_create, setLoadingCreate] = useState(false);
  const [isDisabled_create, setDisabledCreate] = useState(false);
  const [is_tax, setTax] = useState(false);

  const pembeli = useAutoComplete();

  useEffect(() => {
    if (!nama_sales) {
      return setDisabledCreate(true);
    }
    if (!pembeli.id) {
      return setDisabledCreate(true);
    }
    return setDisabledCreate(false);
  }, [nama_sales, pembeli.id]);

  const handleVisible = () => setVisible(!visible);
  const handleCheckbox = (e: any) => setTax(e.target.checked);

  const handleChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setName(value);
  };

  const tambahPembeli = ({ json, clear }: TambahPembeli) => {
    postSupplier(`${REACT_APP_ENV}/admin/v1/master/pembeli/create`, json, clear);
  };

  const createKeranjang = async () => {
    setLoadingCreate(true);
    try {
      const posting = await fetch(`${REACT_APP_ENV}/admin/v1/sales/pos`, {
        method: 'post',
        body: JSON.stringify({
          id_pembeli: pembeli.id,
          is_tax: Number(is_tax),
          nama_sales,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookie.get('token'),
        },
      });
      const json = await posting.json();
      const result = await json.data;
      setLoadingCreate(false);
      history.push(`/sales/pos/${result.id}`);
      return result;
    } catch (error) {
      setLoadingCreate(false);
    }
  };

  return (
    <div>
      <p className={styles.title}>Point of Sales</p>
      <div className={styles.row}>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="pembeli">
              Nama Pembeli
            </label>
            <Pembeli
              id="pembeli"
              value={pembeli.text}
              onChange={pembeli.changeText}
              onSelect={pembeli.selectText}
            />
            <p style={{ marginTop: '0.5em' }}>
              Nama Pelanggan belum terdaftar?
              <span className={styles.span} onClick={handleVisible}>
                Daftarkan
              </span>
            </p>
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
              value={nama_sales || ''}
              onChange={handleChangeState}
            />
            <Checkbox style={{ marginTop: '0.5em' }} checked={is_tax} onChange={handleCheckbox}>
              Faktur Pajak
            </Checkbox>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.group} style={{ marginTop: '2em' }}>
            <Button
              type="primary"
              onClick={createKeranjang}
              disabled={isDisabled_create || isLoading_create}
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      </div>
      <Add
        visible={visible}
        onCreate={tambahPembeli}
        onCancel={handleVisible}
        onLoadButton={Boolean(isLoading_supplier)}
        onError={Boolean(isError_supplier)}
      />
    </div>
  );
};

export default HomeComponent;
