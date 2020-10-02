import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

import TableComponent from './Table';
import AddComponent from './Add';
import EditComponent from './Edit';
import UpdateComponent from './Update';

import useFetch from '@/hooks/useFetch';

import DatePicker from '@/pages/dashboard/Home/components/DatePicker';

interface Props {}

export interface Piutang {
  url: string;
  json: {};
  clear: () => void;
}

const Component: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [id_row, setIdRow] = useState(0);
  const [id_edit, setIdEdit] = useState(0);

  const [date, setDate] = useState(['', '']);
  const [loading_excel, setLoadingExcel] = useState(false);

  const [data_list, status_list, isLoading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/piutang`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisible = () => setVisible(!visible);

  const handleVisibleUpdate = (id: string) => {
    setVisibleUpdate(!visibleUpdate);
    setIdRow(Number(id));
  };

  const handleVisibleEdit = (id: string) => {
    setVisibleEdit(!visibleEdit);
    setIdEdit(Number(id));
  };

  const handleClearEdit = () => {
    setVisibleEdit(false);
    setIdEdit(0);
  };

  const handleClearUpdate = () => {
    setVisibleUpdate(false);
    setIdRow(0);
  };

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  const createPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const editPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const acceptPiutang = ({ url, json, clear }: Piutang) => {
    postList(url, json, clear);
  };

  const cancelPiutang = (id: string) => {
    postList(
      `${REACT_APP_ENV}/admin/v1/finance/piutang/${id}/update`,
      JSON.stringify({ status: 2 }),
      handleClearEdit,
    );
  };

  const downloadExcel = async () => {
    setLoadingExcel(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/finance/piutang/excel/?start_date=${date[0]}&end_date=${date[1]}`,
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
      elm.download = `Piutang-Toko-${date[0]}.xlsx`;
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
    <div>
      <p className={styles.title}>Piutang Toko</p>
      <Row justify="space-between">
        <p className={styles.title}>Piutang Antar Toko</p>
        <p className={styles.title_add} onClick={handleVisible}>
          + Tambah
        </p>
      </Row>
      <Row style={{ marginBottom: '1em' }}>
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
      <TableComponent
        data={data_list}
        loading={Boolean(isLoading_list)}
        status={Number(status_list)}
        error={error_list}
        cancel={cancelPiutang}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleEdit={handleVisibleEdit}
      />

      <AddComponent
        visible={visible}
        onError={error_list}
        onCancel={handleVisible}
        onCreate={createPiutang}
        onLoadButton={Boolean(isLoading_list)}
      />

      {visibleEdit ? (
        <EditComponent
          visible={visibleEdit}
          onCreate={editPiutang}
          onCancel={handleClearEdit}
          id_edit={id_edit}
        />
      ) : null}

      {visibleUpdate ? (
        <UpdateComponent
          id_row={id_row}
          visible={visibleUpdate}
          onCancel={handleClearUpdate}
          onUpdate={acceptPiutang}
        />
      ) : null}
    </div>
  );
};

export default Component;
