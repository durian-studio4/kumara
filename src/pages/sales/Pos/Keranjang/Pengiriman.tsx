import React from 'react';
import { Input, Row, Button, Card } from 'antd';
import styles from './index.less';

interface Props {
  ongkir: string;
  nama_ekspedisi: string;
  isDisabled_ekspedisi: boolean;
  onChangeOngkir: (e: { target: HTMLInputElement }) => void;
  onChangeState: (e: { target: HTMLInputElement }) => void;
  onCreate: () => void;
}

const PengirimanComponent: React.FC<Props> = ({
  ongkir,
  nama_ekspedisi,
  isDisabled_ekspedisi,
  onChangeOngkir,
  onChangeState,
  onCreate,
}) => {
  return (
    <Card
      style={{
        marginTop: '2em',
      }}
    >
      <p className={styles.title}>Pengiriman (Optional) </p>
      <Row>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="nama_ekspedisi">
              Nama Ekspedisi
            </label>
            <Input
              type="text"
              className={styles.input}
              id="nama_ekspedisi"
              placeholder="Isi Nama Ekspedisi"
              value={nama_ekspedisi}
              onChange={onChangeState}
            />
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label}>Ongkos Kirim</label>
            <Input
              className={styles.input}
              id="ongkir"
              placeholder="Isi Ongkir"
              value={ongkir}
              onChange={onChangeOngkir}
            />
          </div>
        </div>
      </Row>
      <Row
        justify="end"
        style={{
          marginTop: '1em',
        }}
      >
        <Button type="primary" onClick={onCreate} disabled={isDisabled_ekspedisi}>
          Tambahkan ke keranjang
        </Button>
      </Row>
    </Card>
  );
};

export default PengirimanComponent;
