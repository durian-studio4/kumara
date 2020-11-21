import React, { useEffect } from 'react';
import { Modal, Row, Button } from 'antd';
import styles from './index.less';

//----------HOOKS
import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {
  id: number;
  visible: boolean;
  onLoadButton: boolean;
  onCancel: () => void;
  onCreate: () => void;
}

const DetailComponent: React.FC<Props> = ({ id, visible, onCancel, onCreate, onLoadButton }) => {
  const [data, status, isLoading, isError, fetching] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetching(`${REACT_APP_ENV}/admin/v1/kurir/${id}/pengiriman`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const name = data.pembeli && data.pembeli.name;
  const phone = data.pembeli && data.pembeli.phone;
  const alamat = data.pembeli && data.pembeli.alamat;
  const pembeli = data.pembeli && data.pembeli.pembeli_grup;
  const namaEkspedisi = data.nama_expedisi;

  return (
    <Modal
      visible={visible}
      footer={null}
      closable={false}
      width={350}
      title="Detail Tujuan Pengiriman"
    >
      <Row>
        {status !== 200 || isError ? <PageError /> : null}
        {isLoading ? (
          <PageLoading />
        ) : (
          <div className={styles.modal_body}>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="name">
                  Nama Penerima
                </label>
                <p className={styles.p} id="name">
                  {name}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="phone">
                  No Telepon
                </label>
                <p className={styles.p} id="phone">
                  {phone}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="alamat">
                  Alamat
                </label>
                <p className={styles.p} id="alamat">
                  {alamat}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="alamat">
                  Nama Ekspedisi
                </label>
                <p className={styles.p} id="alamat" style={{textTransform:"uppercase"}}>
                  {namaEkspedisi || "-"}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="group">
                  Group
                </label>
                <p className={styles.p} id="group">
                  {pembeli}
                </p>
              </div>
            </div>
            <Row justify="space-between">
              <Button
                className={styles.button}
                onClick={onCancel}
                disabled={onLoadButton}
                type="primary"
                danger
              >
                Kembali
              </Button>
              <Button
                className={styles.button}
                onClick={onCreate}
                disabled={onLoadButton}
                type="primary"
              >
                Selesai Dikirim
              </Button>
            </Row>
          </div>
        )}
      </Row>
    </Modal>
  );
};

export default DetailComponent;
