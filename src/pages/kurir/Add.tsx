import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Row, DatePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

interface Props {
  visible: boolean;
  onCancel: () => void;
}

const AddComponent: React.FC<Props> = ({ onCancel, visible }) => {
  return (
    <Modal title="Tambah Resi" visible={visible} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.col}>
          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="nama">
                Nama
              </label>
              <Input
                className={styles.input}
                type="text"
                id="nama"
                placeholder="Isi Nama"
                // value={nama_sales}
                // onChange={onChangeState}
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="tgl_ekspedisi">
                Tanggal Ekspedisi
              </label>
              <DatePicker style={{ width: '100%' }} />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="total">
                Total Ongkir
              </label>
              <Input
                className={styles.input}
                id="total"
                placeholder="Total Ongkir"
                // value={qty}
                // onChange={onChangeQty}
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="upload">
                Upload Foto
              </label>
              <div className={styles.box10}>
                <Upload name="avatar">
                  <div className={styles.group}>
                    <Button type="primary" className={styles.button}>
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
          // disabled={onLoadButton}
          // onClick={onClearState}
        >
          Batal
        </Button>
        <Button
          type="primary"
          className={styles.button}
          // onClick={createRetur}
          // disabled={isDisabled || onLoadButton}
        >
          Tambah
        </Button>
      </Row>
    </Modal>
  );
};

export default AddComponent;
