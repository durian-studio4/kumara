import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Row, DatePicker, Upload } from 'antd';
import { format } from 'date-fns';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

import useSelect from '@/hooks/useSelect';

import { UpdateProps } from './index';

const { TextArea } = Input;

interface Props {
  visible: boolean;
  onCreate: ({ json, clear }: UpdateProps) => void;
  onCancel: () => void;
  onLoadButton: boolean;
}

let initialDate = format(new Date(), 'yyyy-MM-dd');

interface Props {}

const initialState = {
  nama: '',
  no_resi: '',
  total_ongkir: '',
  ekspedisi: '',
};

const AddComponent: React.FC<Props> = ({ onCreate, onCancel, visible, onLoadButton }) => {
  const [{ nama, no_resi, total_ongkir, ekspedisi }, setState] = useState(initialState);
  const [date, setDate] = useState(initialDate);
  const [file_img, setFileImg] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!nama) {
      setDisabled(true);
    }
    if (!no_resi) {
      setDisabled(true);
    }
    if (!total_ongkir) {
      setDisabled(true);
    }
    if (!ekspedisi) {
      setDisabled(true);
    }
    setDisabled(false);
  }, [nama, no_resi, total_ongkir, ekspedisi]);

  const onChangeDate = (date: any, dateString: any) => {
    setDate(dateString);
  };

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((state) => ({ ...state, [id]: value }));
  };

  const onRemoveImage = () => {
    setFileImg('');
  };

  const onChangeImage = (file: any) => {
    setFileImg(file);
    return false;
  };

  const onClearState = () => {
    setState({ ...initialState });
    setDate(initialDate);
    setFileImg('');
    onCancel();
  };

  const DataJSON = JSON.stringify({
    tanggal: date,
    nama,
    no_resi,
    total_ongkir,
    ekspedisi,
    // file_img,
  });

  const createResi = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal title="Tambah Resi" visible={visible} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.col}>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nama">
                Nama
              </label>
              <Input
                className={styles.input}
                type="text"
                id="nama"
                placeholder="Isi Nama"
                value={nama}
                onChange={onChangeState}
              />
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="tgl_ekspedisi">
                Tanggal Ekspedisi
              </label>
              <DatePicker style={{ width: '100%' }} id="tgl_ekspedesi" onChange={onChangeDate} />
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="no_resi">
                No Resi
              </label>
              <Input
                className={styles.input}
                id="no_resi"
                placeholder="Isi Resi"
                value={no_resi}
                onChange={onChangeState}
              />
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="ekspedisi">
                Ekspedisi
              </label>
              <TextArea
                id="ekspedisi"
                placeholder="Isi Ekspedisi"
                onChange={onChangeState}
                value={ekspedisi}
              />
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="total_ongkir">
                Total Ongkir
              </label>
              <Input
                className={styles.input}
                type="number"
                id="total_ongkir"
                placeholder="Isi Ongkir"
                value={total_ongkir}
                onChange={onChangeState}
              />
            </div>
          </div>

          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="upload">
                Upload Foto
              </label>
              <div className={styles.box10}>
                <Upload name="avatar" onRemove={onRemoveImage} beforeUpload={onChangeImage}>
                  <div className={styles.group}>
                    <Button
                      type="primary"
                      id="upload"
                      className={styles.button}
                      disabled={Boolean(file_img)}
                    >
                      <PlusOutlined />
                    </Button>
                  </div>
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          type="primary"
          danger
          className={styles.button}
          disabled={onLoadButton}
          onClick={onClearState}
        >
          Batal
        </Button>
        <Button
          type="primary"
          className={styles.button}
          onClick={createResi}
          disabled={isDisabled || onLoadButton}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
