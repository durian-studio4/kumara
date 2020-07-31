import React from 'react';
// import styles from './index.less';
import styles from './index.less';
import { Input, Card, Row, Button } from 'antd';

interface Props {
  onChangeState: (e: { target: HTMLInputElement }) => void;
  onChangeSetoran: (e: any) => void;
  onCreate: () => void;
  onLoadButton: boolean;
  onError: any;
  isDisabled: boolean;
  jumlah_setoran: string;
  nama_sales: string;
}

const InputComponent: React.FC<Props> = ({
  onChangeState,
  onChangeSetoran,
  onCreate,
  onLoadButton,
  onError,
  isDisabled,
  jumlah_setoran,
  nama_sales,
}) => {
  return (
    <Card style={{ height: '50%', width: '45%' }}>
      <p className={styles.title}>Setoran</p>
      <div className={styles.col}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="nama_sales">
              Nama Penyetor
            </label>
            <Input
              className={styles.input}
              id="nama_sales"
              placeholder="Isi Nama Penyetor"
              value={nama_sales}
              onChange={onChangeState}
            />
          </div>
        </div>

        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="jumlah_setoran">
              Jumlah Setoran
            </label>
            <Input
              className={styles.input}
              id="jumlah_setoran"
              placeholder="Isi Jumlah Setoran"
              value={jumlah_setoran}
              onChange={onChangeSetoran}
            />
          </div>
        </div>
      </div>

      <Row justify="end">
        {onError ? <p style={{ color: 'red' }}>{onError}</p> : null}
        <Button
          className={styles.button}
          onClick={onCreate}
          disabled={isDisabled || onLoadButton}
          type="primary"
        >
          Setor
        </Button>
      </Row>
    </Card>
  );
};

export default InputComponent;
