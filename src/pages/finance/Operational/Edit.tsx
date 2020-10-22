import React, { useEffect } from 'react';
import { Modal, Row, Input, Button } from 'antd';
import { default as NumberFormat } from 'react-number-format';
import styles from './index.less';

import useFetch from '@/hooks/useFetch';
import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

interface Props {
  idParams: number;
  visible: boolean;
  total: string;
  onCreate: () => void;
  onCancel: () => void;
  onChangeTotal: (e: any) => void;
}

const EditComponent: React.FC<Props> = ({
  idParams,
  visible,
  total,
  onCreate,
  onCancel,
  onChangeTotal,
}) => {
  const [data, status, loading, error, fetchUpdate] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchUpdate(`${REACT_APP_ENV}/admin/v1/finance/pengeluaran/${idParams}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      visible={visible}
      title="Tambah Pengeluaran"
      onCancel={onCancel}
      width={400}
      footer={null}
    >
      {status !== 200 || error ? <PageError /> : null}
      {loading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label>Keterangan</label>
              <Input value={data.keterangan} disabled={true} />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label>Total Awal</label>
              <Input value={data.total} disabled={true} />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label htmlFor="total">Total Perubahan</label>
              <NumberFormat
                className={styles.number}
                thousandSeparator={true}
                thousandsGroupStyle={'thousand'}
                onValueChange={onChangeTotal}
                value={String(total)}
              />
            </div>
          </div>
        </div>
      )}
      <Row justify="space-between">
        <Button
          className={styles.button}
          disabled={Boolean(loading)}
          onClick={onCancel}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          disabled={Boolean(loading)}
          onClick={onCreate}
          type="primary"
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default EditComponent;
