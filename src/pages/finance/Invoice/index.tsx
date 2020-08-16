import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import { format } from 'date-fns';
import styles from './index.less';

import TableComponent from './Table';
import ExportComponent from './Export';
import DetailComponent from './Detail';

import SelectPajak from '@/components/Select/SelectPajak';

import useFetch from '@/hooks/useFetch';
import useSelect from '@/hooks/useSelect';

interface Props {}

const initialDate = format(new Date(), 'yyyy-MM-dd');

const initialState = {
  invoice: '',
  pembeli: '',
};

const SetoranComponent: React.FC<Props> = () => {
  const [visible_export, setVisibleExport] = useState(false);
  const [visible_detail, setVisibleDetail] = useState(false);
  const [idParams, setIdParams] = useState(0);

  const [pajak, changePajak] = useSelect('2');
  const [{ invoice, pembeli }, setState] = useState(initialState);
  const [tanggal_start, setTanggalStart] = useState(initialDate);
  const [tanggal_end, setTanggalEnd] = useState(initialDate);

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/finance/pajak?is_tax=${pajak}`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pajak]);

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

  const handleState = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleClearState = () => setState({ ...initialState });

  const handleClearVisibleDetail = () => {
    setVisibleDetail(!visible_detail);
    setIdParams(0);
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
      />

      <ExportComponent
        invoice={invoice}
        pembeli={pembeli}
        visible={visible_export}
        tanggal_start={tanggal_start}
        tanggal_end={tanggal_end}
        handleTanggalStart={onChangeTanggalStart}
        handleTanggalEnd={onChangeTanggalEnd}
        handleVisible={handleVisibleExport}
        handleState={handleState}
        handleClearState={handleClearState}
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
