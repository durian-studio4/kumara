import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Button, Row } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

import TablePiutang from './Table';
import DetailPiutang from './Detail';
import ConfirmPiutang from './Confirm';

import useFetch from '@/hooks/useFetch';
// import useSelect from '@/hooks/useSelect';
import useCreate from '@/hooks/useCreate';

import DatePicker from '@/pages/dashboard/Home/components/DatePicker';

interface Props {}

// const initialBank = [
//   {
//     id: 1,
//     value: 'BCA',
//   },
//   {
//     id: 2,
//     value: 'BNI',
//   },
//   {
//     id: 3,
//     value: 'BRI',
//   },
//   {
//     id: 4,
//     value: 'Mandiri',
//   },
// ];

const PiutangComponent: React.FC<Props> = ({}) => {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [id_confirm, setIdConfirm] = useState(0);
  const [id_update, setIdUpdate] = useState(0);

  const [date, setDate] = useState(['', '']);
  const [loading_excel, setLoadingExcel] = useState(false);

  const [loading_post, status_post, fetchPost] = useCreate();

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/sales/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_post]);

  // const DataJSON = JSON.stringify({
  //   status_pembayaran: 1,
  //   keterangan,
  //   nama_bank: initialBank[nama_bank].value,
  // });

  const handleVisibleConfirm = (id: string) => {
    setVisibleConfirm(!visibleConfirm);
    setIdConfirm(Number(id));
  };

  const handleVisibleUpdate = (e: any) => {
    setVisibleUpdate(!visibleUpdate);
    setIdUpdate(e.target.id);
  };

  const handleClearVisibleConfirm = () => {
    setVisibleConfirm(false);
    setIdConfirm(0);
  };

  const handleClearVisibleUpdate = () => {
    setVisibleUpdate(false);
    setIdUpdate(0);
  };

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  const acceptPiutang = ({ json, clear }: any) => {
    fetchPost(`${REACT_APP_ENV}/admin/v1/finance/transfer/${id_confirm}/update`, json, clear);
  };

  const cancelPiutang = (id: string) => {
    fetchPost(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id}/update`,
      JSON.stringify({ status_pembayaran: 2 }),
      handleClearVisibleConfirm,
    );
  };

  const downloadExcel = async () => {
    setLoadingExcel(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/sales/piutang/excel/?start_date=${date[0]}&end_date=${date[1]}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: String(Cookie.get('token')),
          },
        },
      );
      const blob = await fetching.blob();
      const result = blob;
      let elm = document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      elm.download = `Piutang-Sales-${date[0]}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setDate(['', '']);
      setLoadingExcel(false);
    } catch (error) {
      setLoadingExcel(false);
    }
  };

  return (
    <GridContent>
      <p className={styles.title}>Piutang Sales</p>
      <Row style={{ marginBottom: '2em' }}>
        <DatePicker handleChange={onChangeDate} />
        <Button
          type="primary"
          className={styles.button_convert}
          onClick={downloadExcel}
          disabled={!Boolean(date[0]) && !Boolean(date[1])}
        >
          {loading_excel && 'Downloading excel...'}
          {!loading_excel && 'Convert to Excel'}
        </Button>
      </Row>
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
          idParams={String(id_update)}
        />
      ) : null}
      {visibleConfirm ? (
        <ConfirmPiutang
          visible={visibleConfirm}
          id_confirm={id_confirm}
          onLoading={Boolean(loading_post)}
          onCancel={handleClearVisibleConfirm}
          onUpdate={acceptPiutang}
        />
      ) : null}
    </GridContent>
  );
};

export default PiutangComponent;
