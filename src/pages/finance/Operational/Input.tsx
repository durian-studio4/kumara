import React from 'react';
import { Input, Card, Row, Button } from 'antd';
import NumberFormat from 'react-number-format';
import styles from './index.less';

interface Props {
  onChangeState: (e: { target: HTMLInputElement }) => void;
  onChangeTotal: (e: any) => void;
  onCreate: () => void;
  onLoadButton: boolean;
  onError: any;
  total: string;
  keterangan: string;
  isDisabled: boolean;
}

const InputComponent: React.FC<Props> = ({
  onChangeState,
  onChangeTotal,
  onCreate,
  onLoadButton,
  onError,
  total,
  keterangan,
  isDisabled,
}) => {
  return (
    <Card style={{ height: '50%', width: '45%' }}>
      <p className={styles.title}>Tambah pengeluaran operational</p>
      <div className={styles.col}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="keterangan">
              Keterangan Pengeluaran
            </label>
            <Input
              className={styles.input}
              id="keterangan"
              placeholder="Isi Keterangan"
              value={keterangan}
              onChange={onChangeState}
            />
          </div>
        </div>

        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="total">
              Jumlah Pengeluaran
            </label>
            <NumberFormat
              id="total"
              className={styles.number}
              placeholder="Isi Jumlah Pengeluaran"
              thousandSeparator={true}
              thousandsGroupStyle={'thousand'}
              onValueChange={onChangeTotal}
              value={total}
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
