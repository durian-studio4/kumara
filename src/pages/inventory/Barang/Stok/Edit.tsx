import React, { useEffect, useState } from 'react';
import { Modal, Row, Button, Col, Input } from 'antd';
import styles from './index.less';

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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    // if (qty_display >= String(data.qty_gudang)) {
    //   return setQtyDisplay(data.qty_gudang);
    // } else {
    //   setQtyDisplay(value);
    // }

    setQtyDisplay(value);
  };

  const onClearState = () => {
    onCancel();
    setQtyDisplay('');
  };

  const DataJSON = JSON.stringify({
    qty_display,
  });

  const onEdit = () => {
    onCreate({
      url: `${REACT_APP_ENV}/admin/v1/inventory/barang/${id}/update`,
      json: DataJSON,
      clear: onClearState,
    });
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
                  <label className={styles.label} htmlFor="qty_gudang">
                    Qty Gudang
                  </label>
                  <Input
                    className={styles.input}
                    type="text"
                    id="qty_gudang"
                    value={data.qty_gudang}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={styles.box3}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="qty_display">
                    Qty Display
                  </label>
                  <Input
                    className={styles.input}
                    type="text"
                    id="qty_display"
                    value={qty_display}
                    onChange={onChangeState}
                    placeholder="Isi Qty Display"
                  />
                </div>
              </div>
            </Row>
          </Col>
        </div>
      )}
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
        <Button
          className={styles.button}
          disabled={Boolean(loading_list) || onLoading}
          onClick={onEdit}
          type="primary"
        >
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default EditComponent;
