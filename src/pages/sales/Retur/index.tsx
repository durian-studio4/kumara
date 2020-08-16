import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Button, Row } from 'antd';
// import { format } from 'date-fns';
import Cookie from 'js-cookie';
import styles from './index.less';

import ModalAdd from './Add';
import TableRetur from './Table';

import DatePicker from '@/pages/dashboard/Home/components/DatePicker';
import useFetch from '@/hooks/useFetch';

interface Props {}

export interface CreateRetur {
  url: string;
  json: {};
  clear: () => void;
}

const ReturComponent: React.FC<Props> = ({}) => {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [date, setDate] = useState(['', '']);
  const [loading_excel, setLoadingExcel] = useState(false);

  const [data_list, status_list, loading_list, error_list, fetchList, postList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/sales/retur`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisibleAdd = () => setVisibleAdd(!visibleAdd);

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  const createRetur = ({ url, json, clear }: CreateRetur) => {
    postList(url, json, clear);
  };

  const downloadExcel = async () => {
    setLoadingExcel(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/finance/piutang/excel?start_date=${date[0]}&end_date=${date[1]}`,
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
      elm.download = `${date[0]}.xls`;
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
      <div className={styles.row_box}>
        <p className={styles.title}>Retur Sales</p>
        <Button className={styles.button} type="primary" onClick={handleVisibleAdd}>
          Tambah Retur
        </Button>
      </div>
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
      <TableRetur data={data_list} loading={loading_list} status={status_list} error={error_list} />
      <ModalAdd
        visible={visibleAdd}
        onCreate={createRetur}
        onCancel={handleVisibleAdd}
        onLoadButton={Boolean(loading_list)}
        onError={Boolean(error_list)}
      />
    </GridContent>
  );
};

export default ReturComponent;
