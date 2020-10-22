import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import { format } from 'date-fns';
import Cookie from 'js-cookie';
import styles from './index.less';

import TableComponent from './Table';
import ExportComponent from './Export';
import DetailComponent from './Detail';

import SelectPajak from '@/components/Select/SelectPajak';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';
import useSelect from '@/hooks/useSelect';

interface Props {}

const initialDate = format(new Date(), 'yyyy-MM-dd');

const SetoranComponent: React.FC<Props> = () => {
  const [visible_export, setVisibleExport] = useState(false);
  const [visible_detail, setVisibleDetail] = useState(false);
  const [idParams, setIdParams] = useState(0);

  const [pajak, changePajak] = useSelect('2');
  const [tanggal_start, setTanggalStart] = useState(initialDate);
  const [tanggal_end, setTanggalEnd] = useState(initialDate);

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();
  const [isLoading_update, isStatus_update, postCreate] = useCreate();

  const [loading_download, setLoadingDownload] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/pajak?is_tax=${pajak}`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pajak, isStatus_update]);

  const handleVisibleExport = () => setVisibleExport(!visible_export);

  const handleVisibleDetail = (id: string) => {
    setVisibleDetail(!visible_detail);
    setIdParams(Number(id));
  };

  const onChangeTanggalStart = (date: any, dateString: any) => {
    setTanggalStart(dateString);
  };

  const onChangeTanggalEnd = (date: any, dateString: any) => {
    setTanggalEnd(dateString);
  };

  const handleClearVisibleDetail = () => {
    setVisibleDetail(!visible_detail);
    setIdParams(0);
  };

  const consoleLog = () => console.log('clicked');

  const onConfirmFinance = (id: string) => {
    postCreate(
      `${REACT_APP_ENV}/admin/v1/finance/pajak/${id}/confirm-finance`,
      JSON.stringify,
      consoleLog,
    );
  };

  const onCancelFinance = (id: string) => {
    postCreate(
      `${REACT_APP_ENV}/admin/v1/finance/transfer/${id}/update`,
      JSON.stringify({ status_pembayaran: 2 }),
      consoleLog,
    );
  };

  const downloadExcel = async (xtype: any, invoice: any) => {
    setLoadingDownload(true);
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/finance/pajak/excel`, {
        method: 'post',
        body: JSON.stringify({ invoice, xtype }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookie.get('token'),
        },
      });
      const blob = await fetching.blob();
      const result = blob;
      let elm = document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      elm.download = `${invoice}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
      setLoadingDownload(false);
    } catch (error) {
      setLoadingDownload(false);
    }
  };

  return (
    <div>
      <Row justify="space-between">
        <p className={styles.title}>Invoice</p>
        <Button className={styles.button} type="primary" onClick={handleVisibleExport}>
          Convert to Excel
        </Button>
      </Row>
      <SelectPajak initial="All" handleChange={changePajak} />
      <TableComponent
        data={data_list}
        loading={Boolean(loading_list)}
        status={Number(status_list)}
        error={error_list}
        handleVisible={handleVisibleDetail}
        onConfirm={onConfirmFinance}
        onCancel={onCancelFinance}
        onDownloadExcel={downloadExcel}
        onLoadButton={Boolean(isLoading_update)}
        onLoadDownload={loading_download}
      />

      <ExportComponent
        visible={visible_export}
        tanggal_start={tanggal_start}
        tanggal_end={tanggal_end}
        handleTanggalStart={onChangeTanggalStart}
        handleTanggalEnd={onChangeTanggalEnd}
        handleVisible={handleVisibleExport}
      />

      {visible_detail ? (
        <DetailComponent
          idParams={idParams}
          visible={visible_detail}
          onCancel={handleClearVisibleDetail}
        />
      ) : null}
    </div>
  );
};

export default SetoranComponent;
