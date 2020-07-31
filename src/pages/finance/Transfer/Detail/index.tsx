import React, { useState, useEffect } from 'react';
import { Modal, Row, Button } from 'antd';
import styles from '../index.less';

import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

import Header from './Header';
import Table from './Table';
import Footer from './Footer';

interface Props {
  visible: boolean;
  onCancel: () => void;
  idParams: number;
}

const DetailComponent: React.FC<Props> = ({ idParams, visible, onCancel }) => {
  const [data, status, loading, error, fetchUpdate] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchUpdate(`${REACT_APP_ENV}/admin/v1/finance/transfer/${idParams}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParams]);

  return (
    <Modal visible={visible} title="Invoice" width={700} onCancel={onCancel} footer={null}>
      {status !== 200 || error ? <PageError status={status} /> : null}
      {loading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <Row justify="space-between">
            <Header data={data} />
          </Row>
          <Row style={{ marginTop: '1em' }}>
            <Table data={data} />
          </Row>
        </div>
      )}
      <Row style={{ marginTop: '1em' }} justify="space-between">
        <Footer />
      </Row>
      <Row style={{ marginTop: '1em' }} justify="end">
        <Button disabled={Boolean(loading)} onClick={onCancel} type="primary">
          Kembali
        </Button>
      </Row>
    </Modal>
  );
};

export default DetailComponent;
