import React, { useState, useEffect, Fragment } from 'react';
import { Modal, Row, Button, Input, InputNumber } from 'antd';
import styles from './index.less';

import Bank from './Bank';

import useFetch from '@/hooks/useFetch';
import SelectAll from '@/components/Select/SelectAll';

import useSelect from '@/hooks/useSelect';

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
};

const { TextArea } = Input;

const UpdateComponent: React.FC<Props> = ({ id_row, visible, onCancel, onUpdate }) => {
  const [data_list, status_list, isLoading_list, error_list, fetchList] = useFetch();

  const [{ keterangan }, setState] = useState(initialState);
  const [id_type_pembayaran, onChangeType, onClearType] = useSelect('');
  const [nama_bank, onChangeBank, onClearBank] = useSelect(!data_list.nama_bank ? 'BCA' : data_list.nama_bank);

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
    onClearType();
    onClearBank();
    onCancel();
  };

  const acceptPiutang = () => {
    onUpdate({
      url: `${REACT_APP_ENV}/admin/v1/finance/piutang/${id_row}/update`,
      json: JSON.stringify({ status: 1, nama_bank: id_type_pembayaran == '3'? nama_bank : "", keterangan, id_type_pembayaran }),
      clear: handleClearState,
    });
  };

  function renderMetode() {
    switch (id_type_pembayaran) {
      case '1':
        return;
      case '3':
        return (
          <Fragment>
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="bank">
                  Nama Bank
                </label>
                <Bank
                  handleChange={onChangeBank}
                  select_id="bank"
                  initial={nama_bank}
                />
              </div>
            </div>
          </Fragment>
        );
      case '4':
        return;
      case '5':
        return;
      default:
        return null;
    }
  }

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
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="pembayaran">
                  Metode Pembayaran
                </label>
                <SelectAll
                  address={`${REACT_APP_ENV}/admin/v1/sales/typePembayaran?id_suplier=${data_list.id_suplier}`}
                  select_id="pembayaran"
                  initial={id_type_pembayaran}
                  handleChange={onChangeType}
                />
              </div>
            </div>
            {renderMetode()}
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
