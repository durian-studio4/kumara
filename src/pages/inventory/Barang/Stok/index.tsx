import React, { useState, useEffect, useCallback } from 'react';
import { Row, Button, Input } from 'antd';
import styles from './index.less'; // import Add from './Add';
import Cookie from 'js-cookie';
import Table from './Table';
import DetailProduk from './Detail';
import EditProduk from './Edit';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

import DatePicker from '@/pages/dashboard/Home/components/DatePicker';

interface Props {}

export interface EditProduk {
  url: string;
  json: {};
  clear: () => void;
}

const StokBarangComponent: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [id_produk, setIdProduk] = useState(0);
  const [visible, setVisible] = useState(false);

  const [id_edit, setIdEdit] = useState(0);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const [date, setDate] = useState(['', '']);
  const [loading_excel, setLoadingExcel] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();
  const [loading_edit, error_edit, editList] = useCreate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error_edit]);

  const filtering = useCallback(() => {
    fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/list?filter=${name}`);
    setName('');
  }, [fetchList, name]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      filtering();
    }
  };

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  const onHandleVisible = (id: string) => {
    setIdProduk(Number(id));
    setVisible(!visible);
  };

  const onHandleVisibleEdit = (id: string) => {
    setIdEdit(Number(id));
    setVisibleEdit(!visibleEdit);
  };

  const onChangeState = (e: { target: HTMLInputElement }) => {
    setName(e.target.value);
  };

  const onClearVisible = () => {
    setIdProduk(0);
    setVisible(false);
  };

  const onClearVisibleEdit = () => {
    setIdEdit(0);
    setVisibleEdit(false);
  };

  const editProduk = ({ url, json, clear }: EditProduk) => {
    editList(url, json, clear);
  };

  const downloadExcel = async () => {
    setLoadingExcel(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/inventory/stock-opname?start_date=${date[0]}&end_date=${date[1]}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: String(Cookie.get('token')),
          },
        },
      );
      const blob = await fetching.blob();
      const result = blob;
      let elm = document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      elm.download = `Stock Opname ${date[0]}-${date[1]}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setDate(['', '']);
      setLoadingExcel(false);
    } catch (error) {
      setLoadingExcel(false);
    }
  };

  return (
    <div>
      <p className={styles.title}>Stok Barang</p>
      <div className={styles.row_box}>
        <Input
          className={styles.input_title}
          id="name"
          type="text"
          placeholder="Search Barang"
          onChange={onChangeState}
          value={name}
          onKeyDown={handleKey}
        />
        <Button className={styles.button_title} type="primary" onClick={filtering}>
          Cari
        </Button>
      </div>
      <Row style={{ marginBottom: '2em' }}>
        <DatePicker handleChange={onChangeDate} />
        <Button
          type="primary"
          className={styles.button_convert}
          onClick={downloadExcel}
          disabled={!Boolean(date[0]) && !Boolean(date[1])}
        >
          {loading_excel && 'Downloading excel...'}
          {!loading_excel && 'Convert to Excel'}
        </Button>
      </Row>
      <Row justify="space-between">
        <p className={styles.title}>Expired Date</p>
      </Row>
      <Table
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={error_list}
        handleVisible={onHandleVisible}
        handleVisibleEdit={onHandleVisibleEdit}
      />
      {visibleEdit ? (
        <EditProduk
          visible={visibleEdit}
          id={id_edit}
          onCancel={onClearVisibleEdit}
          onCreate={editProduk}
          onLoading={Boolean(loading_edit)}
          onError={error_edit}
        />
      ) : null}
      {visible ? (
        <DetailProduk visible={visible} id_produk={String(id_produk)} onCancel={onClearVisible} />
      ) : null}
    </div>
  );
};

export default StokBarangComponent;
