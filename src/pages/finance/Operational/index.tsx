import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import Cookie from 'js-cookie';
import styles from './index.less';

import InputComponent from './Input';
import TableComponent from './Table';
import EditComponent from './Edit';

import useFetch from '@/hooks/useFetch';
import useNumber from '../hooks/useNumber';

import DatePicker from '@/pages/dashboard/Home/components/DatePicker';

interface Props {}

const OperationalComponent: React.FC<Props> = () => {
  const [keterangan, setState] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const [total, onChangeTotal, onClearTotal] = useNumber('');

  const [visible, setVisible] = useState(false);
  const [id_row, setId] = useState(0);

  const [date, setDate] = useState(['', '']);
  const [loading_excel, setLoadingExcel] = useState(false);

  const [
    data_pengeluaran,
    status_pengeluaran,
    isLoading_pengeluaran,
    isError_pengeluaran,
    fetchPengeluaran,
    postPengeluaran,
  ] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchPengeluaran(`${REACT_APP_ENV}/admin/v1/finance/pengeluaran`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!keterangan) {
      return setDisabled(true);
    }
    if (!total) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [total, keterangan]);

  const DataJSON = JSON.stringify({
    keterangan,
    total,
  });

  const handleVisible = (id: string) => {
    setVisible(!visible);
    setId(Number(id));
  };

  const handleChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  const handleClearState = () => {
    setState('');
    onClearTotal();
    setVisible(false);
    setId(0);
  };

  const tambahPengeluaran = () => {
    postPengeluaran(`${REACT_APP_ENV}/admin/v1/finance/pengeluaran`, DataJSON, handleClearState);
  };

  const updatePengeluaran = () => {
    postPengeluaran(
      `${REACT_APP_ENV}/admin/v1/finance/pengeluaran/${id_row}/update`,
      JSON.stringify({ total }),
      handleClearState,
    );
  };

  const downloadExcel = async () => {
    setLoadingExcel(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/finance/pengeluaran/excel/?start_date=${date[0]}&end_date=${date[1]}`,
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
      elm.download = `Operational-${date[0]}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setLoadingExcel(false);
    } catch (error) {
      setLoadingExcel(false);
    }
  };

  return (
    <div>
      <p className={styles.title}>Operational</p>
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
      <Row justify="space-between">
        <TableComponent
          data={data_pengeluaran}
          loading={Boolean(isLoading_pengeluaran)}
          status={Number(status_pengeluaran)}
          error={Boolean(isError_pengeluaran)}
          handleVisible={handleVisible}
        />
        <InputComponent
          onChangeState={handleChangeState}
          onChangeTotal={onChangeTotal}
          onCreate={tambahPengeluaran}
          onLoadButton={Boolean(isLoading_pengeluaran)}
          onError={isError_pengeluaran}
          total={String(total)}
          keterangan={keterangan}
          isDisabled={isDisabled}
        />
      </Row>
      {visible ? (
        <EditComponent
          idParams={id_row}
          visible={visible}
          total={String(total)}
          onChangeTotal={onChangeTotal}
          onCreate={updatePengeluaran}
          onCancel={handleClearState}
        />
      ) : null}
    </div>
  );
};

export default OperationalComponent;
