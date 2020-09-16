import React, { useState, useEffect } from 'react';
import { useParams, history } from 'umi';
import { message } from 'antd';
import styles from './index.less'; // import Add from './Add';

import Table from './Table';
import InputComponent from './Input';
import PengirimanComponent from './Pengiriman';

import useNumber from '@/hooks/useNumber';
import useFetch from '@/hooks/useFetch';

message.config({
  top: 100,
  duration: 5,
  maxCount: 1,
});

interface Props {}

export interface TambahBarang {
  json: {};
  clear: () => void;
}

const KeranjangComponent: React.FC<Props> = () => {
  const [nama_ekspedisi, setState] = useState('');
  const [isDisabled_ekspedisi, setDisabledEkspedisi] = useState(false);

  const [ongkir, onChangeOngkir, onClearOngkir] = useNumber('');

  const id_params = useParams().id;

  const [data_table, data_status, data_loading, data_error, fetchData, postData] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchData(`${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (!ongkir || !nama_ekspedisi) {
      return setDisabledEkspedisi(true);
    }
    return setDisabledEkspedisi(false);
  }, [nama_ekspedisi, ongkir]);

  const DataJSON_pengiriman = JSON.stringify({
    ongkir,
    nama_ekspedisi,
  });

  const handleChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  const handleClearState = () => {
    setState('');
    onClearOngkir();
  };

  const submitOrder = () => {
    if (!data_table.barang.length) {
      message.error('Mohon lengkapi keranjang');
      return false;
    } else {
      return history.push(`/sales/pos/${id_params}/pembayaran`);
    }
  };

  const tambahBarang = ({ json, clear }: TambahBarang) => {
    postData(`${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/update`, json, clear);
  };

  const tambahPengiriman = () => {
    postData(
      `${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/update`,
      DataJSON_pengiriman,
      handleClearState,
    );
  };

  const deleteBarang = (no: string) => {
    postData(
      `${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/delete`,
      JSON.stringify({ no }),
      handleClearState,
    );
  };

  if (data_error || data_status !== 200) {
    message.error(data_error);
  }

  return (
    <div>
      <p className={styles.title}>Point of Sales</p>
      <InputComponent onCreate={tambahBarang} onLoading={Boolean(data_loading)} />
      <PengirimanComponent
        ongkir={String(ongkir)}
        nama_ekspedisi={nama_ekspedisi}
        isDisabled_ekspedisi={isDisabled_ekspedisi}
        onChangeOngkir={onChangeOngkir}
        onChangeState={handleChangeState}
        onCreate={tambahPengiriman}
      />
      <Table
        data={data_table}
        status={Number(data_status)}
        isLoading_data={Boolean(data_loading)}
        isError_data={data_error}
        onSubmit={submitOrder}
        onDelete={deleteBarang}
      />
    </div>
  );
};

export default KeranjangComponent;
