import React, { useEffect } from 'react';
import { Modal, Row, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

//----------HOOKS
import useFetch from '@/hooks/useFetch';
import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface Props {
  id: string;
  visible: boolean;
  onCancel: () => void;
}

const DetailComponent: React.FC<Props> = ({ id, visible, onCancel }) => {
  const [data, status, isLoading, isError, fetching] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetching(`${REACT_APP_ENV}/admin/v1/kurir/resi/${id}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const nama = data && data.nama;
  const ekspedisi = data && data.ekspedisi;
  const no_resi = data && data.no_resi;

  return (
    <Modal visible={visible} footer={null} closable={false} title="Detail Resi">
      <Row>
        {status !== 200 || isError ? <PageError /> : null}
        {isLoading ? (
          <PageLoading />
        ) : (
          <div className={styles.modal_body}>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="name">
                  Nama
                </label>
                <p className={styles.p} id="name">
                  {nama}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="tanggal">
                  Tanggal Ekspedisi
                </label>
                <p className={styles.p} id="tanggal">
                  {data.tanggal && format(new Date(data.tanggal), 'dd-MM-yyyy')}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="resi">
                  No Resi
                </label>
                <p className={styles.p} id="resi">
                  {no_resi}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="ekspedisi">
                  Ekspedisi
                </label>
                <p className={styles.p} id="ekspedisi">
                  {ekspedisi}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="ongkir">
                  Total Ongkir
                </label>
                <p className={styles.p} id="ongkir">
                  {data.total_ongkir && Number(data.total_ongkir).toLocaleString()}
                </p>
              </div>
            </div>
            <div className={styles.box10}>
              <div className={styles.group} style={{ padding: '0.2.em !important' }}>
                <label className={styles.label} style={{ color: '#bfbeba' }} htmlFor="foto">
                  Foto
                </label>
                <div>
                  <img
                    style={{ height: '30%', width: '30%' }}
                    src={data.file_img}
                    alt="foto-resi"
                  />
                </div>
              </div>
            </div>
            <Row justify="space-between">
              <Button className={styles.button} onClick={onCancel} type="primary" danger>
                Kembali
              </Button>
            </Row>
          </div>
        )}
      </Row>
    </Modal>
  );
};

export default DetailComponent;
