import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Button, Upload } from 'antd';
import styles from './index.less';

import InputText from './Input';
import Checklist from './Checklist';

import { handleSatuan, handleStok } from './Utils';

import useSelect from '@/hooks/useSelect';
import Select from '@/components/Select/SelectAll';

import { CreateBarang } from './index';

interface Props {
  visible: boolean;
  onLoadButton: boolean;
  onCancel: () => void;
  onCreate: ({ formData, clear }: CreateBarang) => void;
  onError: any;
}

const initialInputState = {
  sku: '',
  brand: '',
  nama_barang: '',
  name: '',
};

const initialQtyState = {
  qty_box: '',
  qty_pcs: '',
  qty_unit: '',
  qty_karton: '',
  qty_pack: '',
};

const initialCheckboxState = {
  item_pcs: false,
  item_pack: false,
  item_unit: false,
  item_box: false,
  item_karton: false,
  include_ppn: false,
};

const initialSatuanState = {
  satuan_pcs: 0,
  satuan_pack: 0,
  satuan_unit: 0,
  satuan_box: 0,
  satuan_karton: 0,
};

const AddComponent: React.FC<Props> = ({ visible, onLoadButton, onCancel, onCreate, onError }) => {
  const [{ sku, brand, nama_barang }, setInputState] = useState(initialInputState);
  const [qtyState, setQtyState] = useState(initialQtyState);
  const [itemCheckbox, setCheckboxState] = useState(initialCheckboxState);
  const [satuanBarang, setSatuanState] = useState(initialSatuanState);
  const [satuan_stock, setStok] = useState([]);
  const [file_img, setFileImg] = useState([]);

  const [isDisabled, setDisabled] = useState(false);
  const [isToggleQty, setToggleQty] = useState(false);

  const { include_ppn, item_box, item_karton, item_pack, item_pcs, item_unit } = itemCheckbox;
  const { qty_box, qty_pcs, qty_unit, qty_karton, qty_pack } = qtyState;

  const [id_type_barang, changeTypeBarang] = useSelect('1');

  useEffect(() => {
    handleSatuan({ itemCheckbox, setSatuan: setSatuanState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCheckbox]);

  useEffect(() => {
    if (!visible) {
      setStok([]);
    }
  }, [visible]);

  useEffect(() => {
    if (!sku) {
      return setDisabled(true);
    }
    if (!brand) {
      return setDisabled(true);
    }
    if (!nama_barang) {
      return setDisabled(true);
    }
    if (!file_img.length) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [brand, file_img, nama_barang, sku]);

  const onChangeInputState = (e: any) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onChangeQtyState = (e: any) => {
    const { id, value } = e.target;
    setQtyState((prevState) => ({ ...prevState, [id]: value }));
  };

  const onChangeCheckboxState = (e: any) => {
    const { id, checked } = e.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const onRemoveImage = () => {
    setFileImg([]);
  };

  const onChangeImage = (file: any) => {
    setFileImg((state) => [...state, file]);
    return false;
  };

  const onConfirmQty = () => {
    handleStok({
      satuanBarang,
      qtyBarang: qtyState,
      setStok,
    });
    setToggleQty(!isToggleQty);
  };

  const onResetQty = () => {
    setStok([]);
    setQtyState({ ...initialQtyState });
    setToggleQty(!isToggleQty);
  };

  const onCloseVisible = () => {
    setInputState({ ...initialInputState });
    setCheckboxState({ ...initialCheckboxState });
    setQtyState({ ...initialQtyState });
    setToggleQty(!isToggleQty);
    setFileImg([]);
    onCancel();
  };

  let satuan_stock_filtered = Array.from(
    new Set(satuan_stock.map((val) => JSON.stringify(val))),
  ).map((val) => JSON.parse(val));

  const DataJSON = {
    sku,
    brand,
    nama_barang,
    id_type_barang: String(id_type_barang),
    include_ppn: String(Number(include_ppn)),
    satuan_stock: JSON.stringify(satuan_stock_filtered),
  };

  const onCreateBarang = () => {
    const formData = new FormData();

    for (let [key, value] of Object.entries(DataJSON)) {
      formData.append(key, value);
    }

    onCreate({
      formData,
      clear: onCloseVisible,
    });
  };

  if (file_img.length) {
    DataJSON['file_gambar'] = file_img[0];
  }

  return (
    <Modal visible={visible} title="Input Detail Barang" closable={false} footer={null} width={700}>
      <div className={styles.modal_body}>
        <Col>
          <div>
            <Row justify="space-between">
              <InputText
                label="sku"
                id="sku"
                name="SKU / Barcode"
                placeholder="Isi Barcode"
                value={sku}
                onChange={onChangeInputState}
              />
              <InputText
                label="brand"
                id="brand"
                name="Brand"
                placeholder="Isi Nama Brand"
                value={brand}
                onChange={onChangeInputState}
              />
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              <Checklist onChange={onChangeCheckboxState} onDisabled={isToggleQty} />
              <InputText
                label="nama_barang"
                id="nama_barang"
                name="Nama Barang"
                placeholder="Isi Nama Barang"
                value={nama_barang}
                onChange={onChangeInputState}
              />
            </Row>
          </div>
          <div>
            <Row justify="end">
              {item_box ? (
                <InputText
                  disabled={isToggleQty}
                  label="qty_box"
                  id="qty_box"
                  name="Minimum Quantity Box"
                  placeholder="0"
                  value={String(qty_box).replace(/[^0-9-]/g, '')}
                  onChange={onChangeQtyState}
                />
              ) : null}
              <div className={styles.box5}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="type_barang">
                    Tipe Barang
                  </label>
                  <Select
                    address={`${REACT_APP_ENV}/admin/v1/master/barang/typeBarang`}
                    initial="Possable"
                    handleChange={changeTypeBarang}
                  />
                </div>
              </div>
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              {item_pcs ? (
                <InputText
                  disabled={isToggleQty}
                  label="qty_pcs"
                  id="qty_pcs"
                  name="Minimum Quantity Pcs"
                  placeholder="0"
                  value={String(qty_pcs).replace(/[^0-9-]/g, '')}
                  onChange={onChangeQtyState}
                />
              ) : null}
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              {item_unit ? (
                <InputText
                  disabled={isToggleQty}
                  label="qty_unit"
                  id="qty_unit"
                  name="Minimum Quantity Unit"
                  placeholder="0"
                  value={String(qty_unit).replace(/[^0-9-]/g, '')}
                  onChange={onChangeQtyState}
                />
              ) : null}
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              {item_karton ? (
                <InputText
                  disabled={isToggleQty}
                  label="qty_karton"
                  id="qty_karton"
                  name="Minimum Quantity Karton"
                  placeholder="0"
                  value={String(qty_karton).replace(/[^0-9-]/g, '')}
                  onChange={onChangeQtyState}
                />
              ) : null}
            </Row>
          </div>
          <div>
            <Row justify="space-between">
              {item_pack ? (
                <InputText
                  disabled={isToggleQty}
                  label="qty_pack"
                  id="qty_pack"
                  name="Minimum Quantity Pack"
                  placeholder="0"
                  value={String(qty_pack).replace(/[^0-9-]/g, '')}
                  onChange={onChangeQtyState}
                />
              ) : null}
            </Row>
          </div>

          {item_box || item_karton || item_pack || item_pcs || item_unit ? (
            <div className={styles.box10}>
              <Button
                onClick={isToggleQty ? onResetQty : onConfirmQty}
                type="primary"
                // {isToggleQty ? 'danger' : ''}
              >
                {isToggleQty && 'Reset Quantity'}
                {!isToggleQty && 'Confirm Quantity'}
              </Button>
            </div>
          ) : null}
          <div>
            <Upload onRemove={onRemoveImage} beforeUpload={onChangeImage}>
              <div className={styles.group}>
                <Button
                  id="file"
                  type="primary"
                  className={styles.button}
                  disabled={Boolean(file_img.length)}
                >
                  Upload Foto Barang
                </Button>
              </div>
            </Upload>
          </div>
        </Col>
      </div>
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          className={styles.button}
          disabled={onLoadButton}
          onClick={onCloseVisible}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          onClick={onCreateBarang}
          disabled={isDisabled || onLoadButton}
          type="primary"
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
