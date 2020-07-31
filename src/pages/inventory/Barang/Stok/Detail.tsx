import React, { useEffect } from 'react';
import { Modal, Row } from 'antd';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

interface Props {
  id_produk: string;
  visible: boolean;
  onCancel: () => void;
}

const DetailComponent: React.FC<Props> = ({ id_produk, visible, onCancel }) => {
  const [data, status, isLoading, isError, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/${id_produk}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_produk]);

  return (
    <Modal
      visible={visible}
      title="Foto Produk"
      width={600}
      onCancel={onCancel}
      closable={false}
      footer={null}
    >
      {status !== 200 || isError ? <PageError status={status} /> : null}
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <Row>
            <div className={styles.box10}>
              <img
                alt={data.nama_barang}
                src={data.file_img}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Row>
        </div>
      )}
    </Modal>
  );
};

export default DetailComponent;
