import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Row, Button, Upload, DatePicker } from 'antd';
import moment from 'moment';
import { format } from 'date-fns';
import styles from './index.less';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import Select from '@/components/Select/SelectAll';

import InputText from './Input';

import useSelect from '@/hooks/useSelect';
import useFetch from '@/hooks/useFetch';
import { MinusOutlined } from '@ant-design/icons';

interface Props {
  id_update: number;
  visible: boolean;
  onUpdate: ({ formData, clear }: any) => void;
  onCancel: () => void;
  onError: any;
  onLoadButton: boolean;
}

const initialState = {
  sku: '',
  brand: '',
  nama_barang: '',
  stok_minimum: '',
  qty_display: '',
  qty_gudang: '',
};

const initialDate = format(new Date(), 'dd-MM-yyyy');

const UpdateComponent: React.FC<Props> = ({
  id_update,
  visible,
  onUpdate,
  onCancel,
  onError,
  onLoadButton,
}) => {
  const [data, status, isLoading, isError, fetchList] = useFetch();

  const [{ sku, brand, nama_barang, stok_minimum, qty_display, qty_gudang }, setState] = useState(
    initialState,
  );
  const [expired_date, setDate] = useState(initialDate);

  const [image, setFileImg] = useState([]);
  const [clear, setClear] = useState([]);

  const [id_qty_display, changeQtyDisplay] = useSelect(data.id_satuan_qty_display);
  const [id_qty_gudang, changeQtyGudang] = useSelect(data.id_satuan_qty_gudang);
  const [id_type_barang, changeTypeBarang] = useSelect(data.id_type_barang);

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/master/barang/${id_update}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_update]);

  useEffect(() => {
    if (data) {
      setState({
        sku: data.sku,
        brand: data.brand,
        nama_barang: data.nama_barang,
        stok_minimum: data.stok_minimum,
        qty_display: data.qty_display,
        qty_gudang: data.qty_gudang,
      });
      setDate(data.expired_date || initialDate);
      setClear([data.file_img]);
    }
  }, [data]);

  useEffect(() => {
    // if (!sku) {
    //   return setDisabled(true);
    // }
    if (!brand) {
      return setDisabled(true);
    }
    if (!nama_barang) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [brand, nama_barang]);

  const DataJSON = {
    sku,
    brand,
    nama_barang,
    stok_minimum,
    qty_display,
    qty_gudang,
    expired_date,
    id_satuan_qty_gudang: id_qty_gudang,
    id_satuan_qty_display: id_qty_display,
    id_type_barang: id_type_barang,
  };

  const onChangeState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onChangeDate = (date: any, dateString: any) => {
    setDate(dateString);
  };

  const onRemoveImage = () => {
    setFileImg([]);
    setClear([]);
  };

  const onChangeImage = (file: any) => {
    setFileImg((state) => [...state, file]);
    return false;
  };

  const handleClearState = () => {
    setState({ ...initialState });
    onCancel();
  };

  const updateBarang = () => {
    const formData = new FormData();

    for (let [key, value] of Object.entries(DataJSON)) {
      formData.append(key, value);
    }

    onUpdate({
      formData,
      clear: handleClearState,
    });
  };

  if (image.length) {
    DataJSON['file_img'] = image[0];
  }

  return (
    <Modal
      visible={visible}
      onCancel={handleClearState}
      footer={null}
      width={700}
      title="Edit Data Barang"
    >
      {status !== 200 || isError ? <PageError /> : null}
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <div>
            <Row justify="space-between">
              <InputText
                label="sku"
                id="sku"
                name="SKU / Barcode"
                placeholder="Isi Barcode"
                value={sku}
                onChange={onChangeState}
              />
              <InputText
                label="brand"
                id="brand"
                name="Brand"
                placeholder="Isi Nama Brand"
                value={brand}
                onChange={onChangeState}
              />
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              <InputText
                label="nama_barang"
                id="nama_barang"
                name="Nama Barang"
                placeholder="Isi Nama Barang"
                value={nama_barang}
                onChange={onChangeState}
              />
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="type_barang">
                    Tipe Barang
                  </label>
                  <Select
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/typeBarang`}
                    initial={data.type_barang}
                    handleChange={changeTypeBarang}
                  />
                </div>
              </div>
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              <InputText
                label="stok_minimum"
                id="stok_minimum"
                name="Minimal Stok"
                placeholder="Isi Minimal Stok"
                value={stok_minimum}
                onChange={onChangeState}
              />
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label}>Expired Date</label>
                  <DatePicker
                    style={{ width: '100%' }}
                    onChange={onChangeDate}
                    value={moment(expired_date, 'YYYY-MM-DD')}
                  />
                </div>
              </div>
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              <InputText
                label="qty_display"
                id="qty_display"
                name="Qty Display"
                placeholder="Isi Qty Display"
                value={qty_display}
                onChange={onChangeState}
              />
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="satuan">
                    Satuan Display
                  </label>
                  <Select
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/satuanBarang`}
                    initial={data.satuan_display}
                    handleChange={changeQtyDisplay}
                  />
                </div>
              </div>
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              <InputText
                label="qty_gudang"
                id="qty_gudang"
                name="Qty Gudang"
                placeholder="Isi Qty Gudang"
                value={qty_gudang}
                onChange={onChangeState}
              />
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="satuan">
                    Satuan Gudang
                  </label>
                  <Select
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/satuanBarang`}
                    initial={data.satuan_gudang}
                    handleChange={changeQtyGudang}
                  />
                </div>
              </div>
            </Row>
          </div>
          <div className={styles.box5}>
            <div className={styles.group}>
              <Upload onRemove={onRemoveImage} beforeUpload={onChangeImage}>
                <Button
                  id="file"
                  type="primary"
                  className={styles.button}
                  disabled={Boolean(image.length)}
                >
                  Upload Foto Barang
                </Button>
              </Upload>
            </div>
            {Boolean(clear.length) ? (
              <div className={styles.group}>
                <Button className={styles.button} onClick={onRemoveImage} type="primary">
                  Clear
                  <MinusOutlined />
                </Button>
              </div>
            ) : null}
          </div>
          {Boolean(clear.length) ? (
            <div className={styles.box10}>
              <div className={styles.group}>
                <img
                  alt="category-image"
                  src={data.file_img}
                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                />
              </div>
            </div>
          ) : null}
        </div>
      )}
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          disabled={isDisabled || Boolean(onLoadButton)}
          onClick={updateBarang}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
