import React, { useState, useEffect, Fragment } from 'react';
import { Modal, Row, Button } from 'antd';
import styles from '../index.less';
import Cookie from 'js-cookie';

import useCreate from '@/hooks/useCreate';
import useFetch from '@/hooks/useFetch';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import Header from './Header';
import Table from './Table';
import Footer from './Footer';

const initialState = {
  no: [],
  harga: [],
  qty: [],
};

interface Props {
  idParams: number;
  visible: boolean;
  onCancel: () => void;
}

const DetailComponent: React.FC<Props> = ({ idParams, visible, onCancel }) => {
  const [data, status, loading, error, fetchUpdate] = useFetch();
  const [isLoading_update, isStatus_update, updateData] = useCreate();

  const [{ no, harga, qty }, setState] = useState(initialState);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [loading_download, setLoadingDownload] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchUpdate(`${REACT_APP_ENV}/admin/v1/finance/pajak/${idParams}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParams, isStatus_update]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (data && data.barang) {
        data.barang.map((item: any) =>
          setState((prevState: any) => ({
            harga: [...prevState.harga, item.harga.split('.').join('')],
            qty: [...prevState.qty, item.qty],
            no: [...prevState.no, item.no],
          })),
        );
      }
    }, 0);
    return () => clearTimeout(timeOut);
  }, [data]);

  const handleVisibleEdit = () => setVisibleEdit(!visibleEdit);

  const handleClearState = () => {
    setState({ ...initialState });
    setVisibleEdit(false);
  };

  const handleHargaChange = (e: any) => {
    const { id, value } = e.target;
    setState(() => ({
      harga: { ...harga, [id]: value },
      no,
      qty,
    }));
  };

  const handleUnitChange = (e: any) => {
    const { id, value } = e.target;
    setState(() => ({
      qty: { ...qty, [id]: value },
      no,
      harga,
    }));
  };

  const downloadExcel = async (xtype: any) => {
    setLoadingDownload(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/finance/pajak/excel`, {
        method: 'post',
        body: JSON.stringify({ invoice: data.no_faktur, xtype }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookie.get('token'),
        },
      });
      const blob = await fetching.blob();
      const result = blob;
      let elm = document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      elm.download = `${data.no_faktur}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setLoadingDownload(false);
    } catch (error) {
      setLoadingDownload(false);
    }
  };

  const json_array_list = no.map((data, i) => ({
    no: String(data),
    harga: harga[i],
    qty_barang: qty[i],
  }));

  const editData = () => {
    const DataJSON = {
      barang: JSON.stringify(json_array_list),
    };
    updateData(
      `${REACT_APP_ENV}/admin/v1/finance/pajak/${idParams}/update`,
      DataJSON,
      handleClearState,
    );
  };

  return (
    <Modal visible={visible} width={700} title="Invoice" closable={false} footer={null}>
      {status !== 200 || error ? <PageError /> : null}
      {loading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <Row justify="space-between">
            <Header data={data} />
          </Row>
          <Row style={{ marginTop: ' 1em' }}>
            <Table
              data={data}
              qty={qty}
              harga={harga}
              handleHargaChange={handleHargaChange}
              handleUnitChange={handleUnitChange}
              isLoadingUpdate={Boolean(isLoading_update)}
              visibleEdit={visibleEdit}
            />
          </Row>
        </div>
      )}
      <Row style={{ marginTop: ' 1em' }} justify="space-between">
        <Footer />
      </Row>
      <Row style={{ marginTop: ' 2em' }} justify="space-between">
        {visibleEdit ? (
          <Fragment>
            <Button onClick={handleVisibleEdit} type="default" style={{ width: '45%' }}>
              Cancel
            </Button>
            <Button
              onClick={editData}
              disabled={Boolean(isLoading_update)}
              type="default"
              style={{ width: '45%' }}
            >
              Save
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              onClick={onCancel}
              type="default"
              className={styles.button}
              style={{ width: '45%' }}
            >
              Kembali
            </Button>
            <Button
              onClick={handleVisibleEdit}
              type="default"
              className={styles.button}
              style={{ width: '45%' }}
            >
              Edit
            </Button>
          </Fragment>
        )}
      </Row>
      <Row justify="center">
        <Button
          onClick={() => downloadExcel('1')}
          className={styles.button}
          disabled={loading_download}
          type="primary"
          style={{ width: '100%' }}
        >
          Convert Invoice ke Excel
        </Button>
        <Button
          onClick={() => downloadExcel('2')}
          className={styles.button}
          disabled={loading_download}
          type="primary"
          style={{ width: '100%' }}
        >
          Convert Pajak ke Excel
        </Button>
      </Row>
    </Modal>
  );
};

export default DetailComponent;
