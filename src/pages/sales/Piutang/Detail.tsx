import React, { useEffect } from 'react';
import { Modal, Button, Row } from 'antd';

import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

interface Props {
  idParams: string;
  visible: boolean;
  onCancel: () => void;
}

const DetailComponent: React.FC<Props> = ({ idParams, visible, onCancel }) => {
  const [data, status, isLoading, isError, fetching] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetching(`${REACT_APP_ENV}/admin/v1/sales/${idParams}/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParams]);

  return (
    <Modal visible={visible} title="Detail Invoice" closable={false} footer={null}>
      {status !== 200 || isError ? <PageError status={status} /> : null}
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <div className={styles.box10}>
            <div className={styles.group} style={{ padding: '0.2em' }}>
              <label style={{ color: '#bfbeba' }}>No. Invoice</label>
              <p>{data.invoice}</p>
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group} style={{ padding: '0.2em' }}>
              <label style={{ color: '#bfbeba' }}>Detail Barang dan Banyaknya</label>
              {data.barang &&
                data.barang.map((item) => (
                  <table className={styles.table}>
                    <tr>
                      <td>{item.nama_barang}</td>
                      <td>
                        {item.qty} {item.satuan_barang}
                      </td>
                    </tr>
                  </table>
                ))}
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group} style={{ padding: '0.2em' }}>
              <label style={{ color: '#bfbeba' }}>Total</label>
              <p>{data.total_harga}</p>
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group} style={{ padding: '0.2em' }}>
              <label style={{ color: '#bfbeba' }}>No. Telp</label>
              <p>{data.pembeli && data.pembeli.phone}</p>
            </div>
          </div>
          <div>
            <div>
              <label color="#bfbeba">Alamat</label>
              <p>{data.pembeli && data.pembeli.alamat}</p>
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group} style={{ padding: '0.2em' }}>
              <label style={{ color: '#bfbeba' }}>Group</label>
              <p>{data.pembeli && data.pembeli.pembeli_grup}</p>
            </div>
          </div>
          <Row justify="space-between">
            <Button className={styles.button} onClick={onCancel} type="primary" danger>
              Tutup
            </Button>
          </Row>
        </div>
      )}
    </Modal>
  );
};

export default DetailComponent;
