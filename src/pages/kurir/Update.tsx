import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Modal, Button, Row, Input } from 'antd';
import styles from './index.less';

import useNumber from '@/hooks/useNumber';
import useDate from '@/hooks/useDate';

import { UpdateProps } from './index';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: ({ json, clear }: UpdateProps) => void;
  onLoadButton: boolean;
}

const UpdateComponent: React.FC<Props> = ({ visible, onCancel, onCreate, onLoadButton }) => {
  const [isDisabled, setDisableUpdate] = useState(false);

  const [ongkir, onChangeOngkir, onClearOngkir] = useNumber('');
  const [koli, onChangeKoli, onClearKoli] = useNumber('');
  const [uang_bensin, onChangeBensin, onClearBensin] = useNumber('');
  const [no_resi, onChangeResi, onClearResi] = useNumber('');

  const [tanggal_kirim, onChangeDate] = useDate(format(new Date(), 'YYYY-MM-DD'));

  useEffect(() => {
    if (!no_resi) {
      return setDisableUpdate(true);
    }

    if (!ongkir) {
      return setDisableUpdate(true);
    }

    if (!koli) {
      return setDisableUpdate(true);
    }

    if (!uang_bensin) {
      return setDisableUpdate(true);
    }

    return setDisableUpdate(false);
  }, [koli, no_resi, ongkir, uang_bensin]);

  const DataJSON = JSON.stringify({
    tanggal_kirim,
    no_resi,
    ongkir,
    uang_bensin,
    koli,
  });

  const onClearState = () => {
    onClearBensin();
    onClearKoli();
    onClearOngkir();
    onClearResi();
    onCancel();
  };

  const updatePengiriman = () => {
    onCreate({
      json: DataJSON,
      clear: onClearState,
    });
  };

  return (
    <Modal visible={visible} title="Input Detail" width={500} footer={null}>
      <div className={styles.modal_body}>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="tanggal">
              Tanggal Kirim
            </label>
            {/* <DateControl
                id="tanggal"
                showMonthDropdown
                showYearDropdown
                dateFormat="dd/MM/yyyy"
                showDisabledMonthNavigation
                selected={Date.parse(tanggal_kirim)}
                minDate={new Date()}
                onChange={onChangeDate}
              /> */}
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="no_resi">
              Nomor Resi
            </label>
            <Input
              className={styles.input}
              type="text"
              id="no_resi"
              placeholder="Isi No Resi"
              value={no_resi}
              onChange={onChangeResi}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="ongkir">
              Ongkos Kirim
            </label>
            <Input
              className={styles.input}
              id="ongkir"
              placeholder="Isi Ongkos Kirim"
              value={ongkir}
              onChange={onChangeOngkir}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="uang_bensin">
              Uang Bensin
            </label>
            <Input
              className={styles.input}
              id="uang_bensin"
              placeholder="Isi Uang Bensin"
              value={uang_bensin}
              onChange={onChangeBensin}
            />
          </div>
        </div>
        <div className={styles.box10}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="koli">
              Koli
            </label>
            <Input
              className={styles.input}
              type="text"
              id="koli"
              placeholder="Isi Koli"
              value={koli}
              onChange={onChangeKoli}
            />
          </div>
        </div>
      </div>
      <Row justify="space-between">
        <Button disabled={onLoadButton} onClick={onCancel} type="primary" danger>
          Batal
        </Button>
        <Button onClick={updatePengiriman} disabled={isDisabled || onLoadButton} type="primary">
          Simpan
        </Button>
      </Row>
    </Modal>
  );
};

export default UpdateComponent;
