import React, { useState, useEffect, Fragment } from 'react';
import { Modal, Row, Button, Input } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';

import PageLoading from '@/components/PageLoading';

import { Piutang } from './index';
interface Props {
  visible: boolean;
  onUpdate: ({ url, json, clear }: Piutang) => void;
  onCancel: () => void;
  id_row: number;
}

const initialState = {
  keterangan: '',
  nama_bank: '',
};

const { TextArea } = Input;

const UpdateComponent: React.FC<Props> = ({ id_row, visible, onCancel, onUpdate }) => {
  const [data_list, status_list, isLoading_list, error_list, fetchList] = useFetch();

  const [{ keterangan, nama_bank }, setState] = useState(initialState);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/piutang/${id_row}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_row]);

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const acceptPiutang = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/finance/piutang/${id_row}/update`,
      json: JSON.stringify({ status: 1, nama_bank, keterangan }),
      clear: handleClearState,
    });
  };

  return (
    <Modal visible={visible} title="Ubah Status" width={500} closable={false} footer={null}>
      <div className={styles.modal_body}>
        {status_list !== 200 || error_list ? <h1>Something went wrong</h1> : null}
        {isLoading_list ? (
          <PageLoading />
        ) : (
          <Fragment>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Jika anda yakin ingin merubah status masukan jenis pembayaran yang digunakan
            </p>
            {data_list.id_type_pembayaran === 3 ? (
              <div className={styles.box10}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="nama_bank">
                    Nama Bank
                  </label>
                  <Input
                    className={styles.input}
                    id="nama_bank"
                    type="text"
                    value={nama_bank.toUpperCase()}
                    onChange={onChangeState}
                  />
                </div>
              </div>
            ) : null}
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="keterangan">
                  Keterangan:{' '}
                </label>
                <TextArea
                  className={styles.area}
                  id="keterangan"
                  value={keterangan}
                  onChange={onChangeState}
                  placeholder="Masukkan Keterangan..."
                />
              </div>
            </div>
            <Row justify="space-around">
              <Button type="primary" onClick={acceptPiutang}>
                Ubah
              </Button>
              <Button type="primary" danger onClick={handleClearState}>
                Batal
              </Button>
            </Row>
          </Fragment>
        )}
      </div>
    </Modal>
  );
};

export default UpdateComponent;
