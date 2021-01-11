import React, { useEffect, useState } from 'react';
import { Modal, Row, Button, Col, Input } from 'antd';
import styles from './index.less';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import useFetch from '@/hooks/useFetch';

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import { EditProduk } from './index';

interface Props {
  visible: boolean;
  onCreate: ({ url, json, clear }: EditProduk) => void;
  onCancel: () => void;
  onLoading: boolean;
  onError: any;
  id: number;
}

const EditComponent: React.FC<Props> = ({
  visible,
  onCancel,
  onCreate,
  onError,
  onLoading,
  id,
}) => {
  const [data, status_list, loading_list, error_list, fetchList] = useFetch();

  const [qty_display, setQtyDisplay] = useState('');
  const [qty_gudang, setQtyGudang] = useState('');

  const [display_action, setDisplayAction] = useState('');
  const [gudang_action, setGudangAction] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onChangeDisplay = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    setQtyDisplay(value);
  };

  const onChangeGudang = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    // if (qty_display >= String(data.qty_gudang)) {
    //   return setQtyDisplay(data.qty_gudang);
    // } else {
    //   setQtyDisplay(value);
    // }

    setQtyGudang(value);
  };

  const onClearState = () => {
    onCancel();
    setQtyDisplay('');
    setQtyGudang('');
    setDisplayAction('');
    setGudangAction('');
  };

  const onEditGudang = () => {
    if (gudang_action === 'add') {
      onCreate({
        url: `${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/qty-gudang?condition=add`,
        json: JSON.stringify({
          qty_gudang,
        }),
        clear: onClearState,
      });
    } else {
      onCreate({
        url: `${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/qty-gudang?condition=subtract`,
        json: JSON.stringify({
          qty_gudang,
        }),
        clear: onClearState,
      });
    }
  };

  const onEditDisplay = () => {
    if (display_action === 'add') {
      onCreate({
        url: `${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/qty-display?condition=add`,
        json: JSON.stringify({
          qty_display,
        }),
        clear: onClearState,
      });
    } else {
      onCreate({
        url: `${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/qty-display?condition=subtract`,
        json: JSON.stringify({
          qty_display,
        }),
        clear: onClearState,
      });
    }
  };

  return (
    <Modal visible={visible} title="Update Qty" width={1000} closable={false} footer={null}>
      {status_list !== 200 || error_list ? <PageError /> : null}
      {loading_list ? (
        <PageLoading />
      ) : (
        <div className={styles.modal_body}>
          <Col>
            <Row>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label}>Qty Gudang</label>
                  <Input
                    className={styles.input}
                    type="text"
                    value={data.qty_gudang}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="qty_gudang">
                    Qty Gudang Input
                  </label>
                  <Input
                    className={styles.input}
                    type="text"
                    id="qty_gudang"
                    value={qty_gudang}
                    onChange={onChangeGudang}
                    placeholder="Isi Qty Gudang"
                  />
                </div>
              </div>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="simpan_gudang">
                    Update Qty Gudang
                  </label>
                  <div className={styles.box10}>
                    {!gudang_action ? (
                      <Row>
                        <Button
                          className={styles.button_action}
                          type="primary"
                          onClick={() => setGudangAction('add')}
                        >
                          <PlusOutlined />
                        </Button>
                        <Button
                          className={styles.button_action}
                          type="primary"
                          danger
                          onClick={() => setGudangAction('subtract')}
                        >
                          <MinusOutlined />
                        </Button>
                      </Row>
                    ) : (
                      <Button
                        id="simpan_gudang"
                        disabled={Boolean(loading_list) || onLoading || !qty_gudang}
                        onClick={onEditGudang}
                        type="primary"
                      >
                        Simpan
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label}>Qty Display</label>
                  <Input
                    className={styles.input}
                    type="text"
                    value={data.qty_display}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="qty_display">
                    Qty Display Input
                  </label>
                  <Input
                    className={styles.input}
                    type="text"
                    id="qty_display"
                    value={qty_display}
                    onChange={onChangeDisplay}
                    placeholder="Isi Qty Display"
                  />
                </div>
              </div>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="simpan_display">
                    Update Qty Display
                  </label>
                  <div className={styles.box10}>
                    {!display_action ? (
                      <Row>
                        <Button
                          className={styles.button_action}
                          type="primary"
                          onClick={() => setDisplayAction('add')}
                        >
                          <PlusOutlined />
                        </Button>
                        <Button
                          className={styles.button_action}
                          type="primary"
                          danger
                          onClick={() => setDisplayAction('subtract')}
                        >
                          <MinusOutlined />
                        </Button>
                      </Row>
                    ) : (
                      <Button
                        id="simpan_display"
                        disabled={Boolean(loading_list) || onLoading || !qty_display}
                        onClick={onEditDisplay}
                        type="primary"
                      >
                        Simpan
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </div>
      )}

      <div style={{padding:"5px 0px 5px 0px"}}>Harga Rata-Rata: {data.avg_harga}</div>

      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>something went wrong!</p> : null} */}
        <Button
          className={styles.button}
          disabled={Boolean(loading_list) || onLoading}
          onClick={onClearState}
          type="primary"
          danger
        >
          Batal
        </Button>
      </Row>
    </Modal>
  );
};

export default EditComponent;
