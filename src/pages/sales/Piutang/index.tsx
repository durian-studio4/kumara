import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import styles from './index.less';

import TablePiutang from './Table';
import DetailPiutang from './Detail';
import ConfirmPiutang from './Confirm';

import useFetch from '@/hooks/useFetch';
import useSelect from '@/hooks/useSelect';
import useCreate from '@/hooks/useCreate';

interface Props {}

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

const PiutangComponent: React.FC<Props> = ({}) => {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [id_row_confirm, setIdConfirm] = useState(0);
  const [id_row_update, setIdUpdate] = useState(0);

  const [keterangan, setKeterangan] = useState('');
  const [nama_bank, changeTypeBank] = useSelect('0');

  const [loading_post, status_post, fetchPost] = useCreate();

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/sales/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_post]);

  const DataJSON = JSON.stringify({
    status_pembayaran: 1,
    keterangan,
    nama_bank: initialBank[nama_bank].value,
  });

  const handleVisibleConfirm = (e: any) => {
    setVisibleConfirm(!visibleConfirm);
    setIdConfirm(e.target.id);
  };

  const handleVisibleUpdate = (e: any) => {
    setVisibleUpdate(!visibleUpdate);
    setIdUpdate(e.target.id);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
  };

  const handleClearVisibleUpdate = () => {
    setVisibleUpdate(false);
    setIdUpdate(0);
  };

  const handleKeteranganChange = (e: { target: HTMLInputElement }) => setKeterangan(e.target.value);

  const acceptPiutang = () => {
    fetchPost(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id_row_confirm}/update`,
      DataJSON,
      handleClearVisibleConfirm,
    );
    setKeterangan('');
  };

  const cancelPiutang = (id: string) => {
    fetchPost(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id}/update`,
      JSON.stringify({ status_pembayaran: 2 }),
      handleClearVisibleConfirm,
    );
  };

  return (
    <GridContent>
      <p className={styles.title}>Piutang Sales</p>
      <TablePiutang
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={Boolean(error_list)}
        cancel={cancelPiutang}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleConfirm={handleVisibleConfirm}
      />
      {visibleUpdate ? (
        <DetailPiutang
          visible={visibleUpdate}
          onCancel={handleClearVisibleUpdate}
          idParams={String(id_row_update)}
        />
      ) : null}
      {visibleConfirm ? (
        <ConfirmPiutang
          visible={visibleConfirm}
          keterangan={keterangan}
          onLoading={Boolean(loading_post)}
          onKeteranganChange={handleKeteranganChange}
          onBankChange={changeTypeBank}
          onCancel={handleClearVisibleConfirm}
          onUpdate={acceptPiutang}
        />
      ) : null}
    </GridContent>
  );
};

export default PiutangComponent;
