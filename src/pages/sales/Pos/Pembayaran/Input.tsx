import React, { Fragment, useState, useEffect } from 'react';
import { Input, Row, Button, Card, Col } from 'antd';
import styles from './index.less';

import Bank from './Bank';

import useSelect from '@/hooks/useSelect';

import SelectAll from '@/components/Select/SelectAll';

import PageError from '@/components/PageError';

import { CheckoutPembayaran } from './index';

const { TextArea } = Input;

interface Props {
  dataPembayaran: any;
  statusPembayaran: number;
  checkoutPembayaran: ({ json, clear }: CheckoutPembayaran) => void;
  // exportExcelPembayaran: () => void;
  isLoading: boolean;
  // isLoadingExport: boolean;
  isError: boolean;
}

interface KeteranganProps {
  onChangeKeterangan?: (e: { target: HTMLInputElement }) => void;
  keterangan?: string;
}

const initialBank = [
  {
    id: 1,
    value: 'BCA',
  },
  {
    id: 2,
    value: 'BNI',
  },
  {
    id: 3,
    value: 'BRI',
  },
  {
    id: 4,
    value: 'Mandiri',
  },
];

const InputKeterangan: React.FC<KeteranganProps> = ({ onChangeKeterangan, keterangan }) => (
  <Fragment>
    <div className={styles.box10}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="keterangan">
          Keterangan
        </label>
        <TextArea
          className={styles.area}
          id="keterangan"
          value={keterangan}
          onChange={onChangeKeterangan}
          placeholder="Masukkan Keterangan..."
        />
      </div>
    </div>
  </Fragment>
);

const InputComponent: React.FC<Props> = ({
  dataPembayaran,
  statusPembayaran,
  checkoutPembayaran,
  // exportExcelPembayaran,
  isLoading,
  // isLoadingExport,
  isError,
}) => {
  const id_suplier = dataPembayaran.pembeli ? dataPembayaran.pembeli.id_suplier : 0;

  const [keterangan, setKeterangan] = useState('');
  const [checkoutDisabled, setCheckoutDisabled] = useState(false);

  const [jumlah_pb, setJumlahPb] = useState('0');
  const [tempo, setTempo] = useState('');
  const [jumlahDp, setJumlahDp] = useState('');

  const [id_type_pembayaran, onChangeType, onClearType] = useSelect('1');
  const [nama_bank, onChangeBank] = useSelect('0');

  useEffect(() => {
    if (!id_type_pembayaran) {
      return setCheckoutDisabled(true);
    }
    return setCheckoutDisabled(false);
  }, [id_type_pembayaran]);

  useEffect(() => {
    setKeterangan('');
  }, [id_type_pembayaran]);

  const onChangeKeterangan = (e: { target: HTMLInputElement }) => setKeterangan(e.target.value);
  const onChangeTempo = (e: { target: HTMLInputElement }) => setTempo(e.target.value);
  const onChangeJumlahDp= (e: { target: HTMLInputElement }) => setJumlahDp(e.target.value);

  const onChangePb = (e: any) => {
    const { value } = e.target;

    if (Number(value) >= Number(dataPembayaran.saldo_pb)) {
      setJumlahPb(dataPembayaran.saldo_pb);
      return false;
    }
    setJumlahPb(value);
    return true;
  };

  const onClearState = () => {
    setKeterangan('');
    onClearType();
    setJumlahPb('0');
    setTempo('');
  };

  const onCheckout = () => {
    const DataJSON = JSON.stringify({
      id_type_pembayaran,
      tempo,
      jumlah_pb,
      keterangan,
      nama_bank: initialBank[nama_bank].value,
      jumlah_dp: jumlahDp
    });

    checkoutPembayaran({
      json: DataJSON,
      clear: onClearState,
    });
  };

  function renderMetode() {
    switch (id_type_pembayaran) {
      case '1':
        return <InputKeterangan onChangeKeterangan={onChangeKeterangan} keterangan={keterangan} />;
      case '3':
        return (
          <Fragment>
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="bank">
                  Nama Bank
                </label>
                <Bank handleChange={onChangeBank} select_id="bank" initial={'BCA'} />
              </div>
            </div>
            <InputKeterangan onChangeKeterangan={onChangeKeterangan} keterangan={keterangan} />
          </Fragment>
        );
      case '4':
        return (
          <Fragment>
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="tempo">
                  Waktu Jatuh Tempo
                </label>
                <Row justify="space-between">
                  <div className={styles.box6}>
                    <Input
                      className={styles.input}
                      id="tempo"
                      value={tempo}
                      onChange={onChangeTempo}
                      placeholder="0"
                    />
                  </div>
                  <div className={styles.box3}>
                    <Input className={styles.input} value="Hari" disabled={true} />
                  </div>
                </Row>

                <label className={styles.label} htmlFor="dp">
                  Down Payment
                </label>
                <Row justify="space-between">
                  <div className={styles.box6}>
                    <Input
                      className={styles.input}
                      id="dp"
                      value={jumlahDp}
                      onChange={onChangeJumlahDp}
                      placeholder="0"
                    />
                  </div>
                </Row>
              </div>
            </div>
            <InputKeterangan onChangeKeterangan={onChangeKeterangan} keterangan={keterangan} />
          </Fragment>
        );
      case '5':
        return <InputKeterangan onChangeKeterangan={onChangeKeterangan} keterangan={keterangan} />;
      case '6':
        return (
          <Fragment>
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="jumlah_pb">
                  Jumlah
                </label>
                <Input
                  className={styles.input}
                  id="jumlah_pb"
                  placeholder="10,000"
                  value={jumlah_pb}
                  onChange={onChangePb}
                  disabled={!dataPembayaran.saldo_pb}
                />
                <span style={{ color: 'red', opacity: '0.5' }}>
                  {dataPembayaran.saldo_pb
                    ? Number(dataPembayaran.saldo_pb).toLocaleString()
                    : null}
                </span>
              </div>
            </div>
          </Fragment>
        );
      default:
        return null;
    }
  }

  if (statusPembayaran !== 200 || isError) {
    return <PageError />;
  }

  return (
    <Card>
      <p className={styles.title}>Pembayaran</p>
      <Row>
        <div className={styles.box3}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="barang">
              Total Tagihan
            </label>
            <p className={styles.p}>Rp. {dataPembayaran.total_tagihan}</p>
          </div>
        </div>
        <div className={styles.box3}>
          <Col>
            <div className={styles.box10}>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="pembayaran">
                  Metode Pembayaran
                </label>
                <SelectAll
                  address={`${REACT_APP_ENV}/admin/v1/sales/typePembayaran?id_suplier=${id_suplier}`}
                  select_id="pembayaran"
                  initial="Debit"
                  handleChange={onChangeType}
                />
              </div>
            </div>
            {renderMetode()}
          </Col>
        </div>
        <div className={styles.box3}>
          <Col>
            <div className={styles.box10}>
              <div className={styles.group} style={{ marginTop: '1.3em' }}>
                <Button
                  type="primary"
                  className={styles.button}
                  onClick={onCheckout}
                  disabled={checkoutDisabled || isLoading}
                >
                  Checkout
                </Button>
              </div>
            </div>
            {/* <div className={styles.box10}>
              <div className={styles.group} style={{ marginTop: '1.3em' }}>
                <Button
                  type="primary"
                  className={styles.button}
                  onClick={exportExcelPembayaran}
                  disabled={isLoadingExport}
                >
                  Convert Invoice to Excel and Print
                </Button>
              </div>
            </div> */}
          </Col>
        </div>
      </Row>
    </Card>
  );
};

export default InputComponent;
