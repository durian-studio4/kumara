import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import Cookie from 'js-cookie';
import styles from './index.less';

import Add from './Add';
import Suplier from '@/components/AutoComplete/AutoSuplier';

import useCreate from '@/hooks/useCreate';
import useAutoComplete from '@/hooks/useAutoComplete';

interface Props {}

export interface TambahSuplier {
  json: {};
  clear: () => void;
}

const HomeComponent: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading_create, setLoadingCreate] = useState(false);
  const [isDisabled_create, setDisabledCreate] = useState(false);

  const [isLoading_supplier, isError_supplier, postSupplier] = useCreate();

  const suplier = useAutoComplete();

  useEffect(() => {
    if (suplier.id === 0) {
      return setDisabledCreate(true);
    }
    return setDisabledCreate(false);
  }, [suplier.id]);

  const handleVisible = () => setVisible(!visible);

  const tambahSupplier = ({ json, clear }: TambahSuplier) => {
    postSupplier(`${REACT_APP_ENV}/admin/v1/master/suplier/create`, json, clear);
  };

  const createKeranjang = async () => {
    setLoadingCreate(true);
    try {
      const posting = await fetch(`${REACT_APP_ENV}/admin/v1/inventory/order/request`, {
        method: 'post',
        body: JSON.stringify({ id_suplier: suplier.id }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: String(Cookie.get('token')),
        },
      });
      const json = await posting.json();
      const result = await json.order_id;
      setLoadingCreate(false);
      history.push(`/inventory/request/${result}`);
      return result;
    } catch (error) {
      setLoadingCreate(false);
    }
  };

  return (
    <div>
      <p className={styles.title}>Request Order</p>
      <div className={styles.row}>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="suplier">
              Nama Suplier
            </label>
            <Suplier
              id="suplier"
              value={suplier.text}
              onChange={suplier.changeText}
              onSelect={suplier.selectText}
              effect={isError_supplier}
            />
            <p style={{ marginTop: '0.5em' }}>
              Nama suplier belum terdaftar?
              <span className={styles.span} onClick={handleVisible}>
                Daftarkan
              </span>
            </p>
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
        onCancel={handleVisible}
        onCreate={tambahSupplier}
        onLoadButton={Boolean(isLoading_supplier)}
        onError={Boolean(isError_supplier)}
      />
    </div>
  );
};

export default HomeComponent;
