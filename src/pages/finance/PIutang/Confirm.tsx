import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Row, Button, Input, InputNumber } from 'antd';
import styles from './index.less';

import Bank from './Bank';

import SelectAll from '@/components/Select/SelectAll';

import useSelect from '@/hooks/useSelect';
import useFetch from '@/hooks/useFetch';

import PageError from '@/components/PageError';
import PageLoading from '@/components/PageLoading';

interface KeteranganProps {
  onChangeKeterangan?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  keterangan?: string;
}

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
interface Props {
  visible: boolean;
  id_confirm: number;
  onLoading: boolean;
  onUpdate: ({ json, clear }: any) => void;
  onCancel: () => void;
}

const { TextArea } = Input;

const ConfirmComponent: React.FC<Props> = ({
  visible,
  id_confirm,
  onLoading,
  onUpdate,
  onCancel,
}) => {
  const [keterangan, setKeterangan] = useState('');

  const [jumlah_pb, setJumlahPb] = useState(0);
  const [tempo, setTempo] = useState('');

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  const [id_type_pembayaran, onChangeType, onClearType] = useSelect(
    String(data_list.id_type_pembayaran),
  );
  const [nama_bank, onChangeBank, onClearBank] = useSelect(
    !data_list.nama_bank ? 'BCA' : data_list.nama_bank,
  );

  const id_suplier = data_list.pembeli && data_list.pembeli.id_suplier;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/sales/${id_confirm}/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_confirm]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (data_list) {
        const { tempo, keterangan, jumlah_pb } = data_list;
        setTempo(String(tempo));
        setKeterangan(keterangan);
        setJumlahPb(!jumlah_pb ? 0 : jumlah_pb);
      }
    }, 0);
    return () => clearTimeout(timeOut);
  }, [data_list]);

  const DataJSON = JSON.stringify({
    status_pembayaran: 1,
    id_type_pembayaran,
    tempo,
    jumlah_pb,
    keterangan,
    nama_bank,
  });

  const onChangeKeterangan = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setKeterangan(e.target.value);

  const onChangeTempo = (e: { target: HTMLInputElement }) => setTempo(e.target.value);
  const onChangePb = (value: any) => setJumlahPb(value);

  const onClearState = () => {
    onClearBank();
    onClearType();
    onCancel();
  };

  const confirmPiutang = () => {
    onUpdate({
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
                <Bank
                  handleChange={onChangeBank}
                  select_id="bank"
                  initial={!data_list.nama_bank ? 'BCA' : data_list.nama_bank}
                />
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
                {/* <Input
                  className={styles.input}
                  id="jumlah_pb"
                  placeholder=""
                  value={jumlah_pb}
                  onChange={onChangePb}
                  disabled={!dataPembayaran.saldo_pb}
                /> */}
                <InputNumber
                  style={{ width: '100%' }}
                  // className={styles.input}
                  id="jumlah_pb"
                  placeholder=""
                  formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  value={jumlah_pb}
                  onChange={onChangePb}
                />
                {/* <span style={{ color: 'red', opacity: '0.5' }}>
                  {dataPembayaran.saldo_pb
                    ? Number(dataPembayaran.saldo_pb).toLocaleString()
                    : null}
                </span> */}
              </div>
            </div>
          </Fragment>
        );
      default:
        return null;
    }
  }

  return (
    <Modal visible={visible} width={500} title="Ubah Status" closable={false} footer={null}>
      {status_list !== 200 || error_list ? <PageError /> : null}
      {Boolean(loading_list) ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <p className={styles.p} style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?
          </p>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="pembayaran">
                Metode Pembayaran
              </label>
              <SelectAll
                address={`${REACT_APP_ENV}/admin/v1/sales/typePembayaran?id_suplier=${id_suplier}`}
                select_id="pembayaran"
                initial={data_list.type_pembayaran}
                handleChange={onChangeType}
              />
            </div>
          </div>
          {renderMetode()}
          <Row justify="space-around">
            <Button type="primary" loading={onLoading} onClick={confirmPiutang}>
              Ya
            </Button>
            <Button type="primary" danger onClick={onClearState}>
              Batal
            </Button>
          </Row>
        </div>
      )}
    </Modal>
  );
};

export default ConfirmComponent;
