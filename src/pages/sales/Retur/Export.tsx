import React, { useState } from 'react';
import { Modal, Row, Input, Button, DatePicker } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

interface Props {
  visible: boolean;
}

const ExportComponent: React.FC<Props> = ({ visible }) => {
  const [loading, setLoading] = useState(false);

  const downloadExcel = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/finance/pajak/excel`, {
        method: 'post',
        // body: JSON.stringify({ invoice, start_date: tanggal_start, end_date: tanggal_end }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: String(Cookie.get('token')),
        },
      });
      const blob = await fetching.blob();
      const result = await blob;
      let elm = window.document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      // elm.download = `${invoice}.xls`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} title="Export ke Excel" width={600} closable={false} footer={null}>
      <div className={styles.modal_body}>
        <Row>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="start_tanggal">
                Dari Tanggal
              </label>
              <DatePicker
                id="start_tanggal"
                style={{ width: '100%' }}
                // onChange={handleTanggalStart}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="end_tanggal">
                Sampai Tanggal
              </label>
              <DatePicker id="end_tanggal" style={{ width: '100%' }} onChange={handleTanggalEnd} />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="invoice">
                No. Invoice / Faktur
              </label>
              <Input
                className={styles.input}
                id="invoice"
                type="text"
                placeholder="No Invoice"
                // onChange={handleState}
                // value={invoice}
              />
            </div>
          </div>
          <div className={styles.box10}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="pembeli">
                Nama Pembeli
              </label>
              <Input
                className={styles.input}
                id="pembeli"
                type="text"
                placeholder="Nama Pembeli"
                // onChange={handleState}
                // value={pembeli}
              />
            </div>
          </div>
        </Row>
      </div>
      <Row justify="end">
        {/* {onError ? <p style={{ color: 'red' }}>{onError}</p> : null} */}
        <Button
          className={styles.button}
          // onClick={handleVisible}
          type="primary"
          danger
        >
          Batal
        </Button>
        <Button
          className={styles.button}
          type="primary"
          onClick={downloadExcel}
          // disabled={!invoice || loading}
        >
          Export
        </Button>
      </Row>
    </Modal>
  );
};

export default ExportComponent;
