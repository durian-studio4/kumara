import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import styles from './index.less';

import InputComponent from './Input';
import TableComponent from './Table';

import useTambahSetoran from '@/hooks/useFetch';
import useNumber from '../hooks/useNumber';

interface Props {}

const SetoranComponent: React.FC<Props> = () => {
  const [nama_sales, setState] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const [jumlah_setoran, onChangeSetoran, onClearSetoran] = useNumber('');

  const [
    data_setoran,
    status_setoran,
    isLoading_setoran,
    isError_setoran,
    fetchSetoran,
    postSetoran,
  ] = useTambahSetoran();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchSetoran(`${REACT_APP_ENV}/admin/v1/finance/setoran`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!nama_sales) {
      return setDisabled(true);
    }
    if (!jumlah_setoran) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [jumlah_setoran, nama_sales]);

  const DataJSON = JSON.stringify({
    nama_sales,
    jumlah_setoran,
  });

  const handleChangeState = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  const handleClearState = () => {
    setState('');
    onClearSetoran();
  };

  const tambahSetoran = () => {
    postSetoran(`${REACT_APP_ENV}/admin/v1/finance/setoran`, DataJSON, handleClearState);
  };

  return (
    <div>
      <p className={styles.title}>Setoran</p>
      <Row justify="space-between">
        <TableComponent
          data={data_setoran}
          loading={isLoading_setoran}
          status={status_setoran}
          error={isError_setoran}
        />
        <InputComponent
          onChangeState={handleChangeState}
          onChangeSetoran={onChangeSetoran}
          onCreate={tambahSetoran}
          onLoadButton={Boolean(isLoading_setoran)}
          onError={isError_setoran}
          jumlah_setoran={String(jumlah_setoran)}
          nama_sales={nama_sales}
          isDisabled={isDisabled}
        />
      </Row>
    </div>
  );
};

export default SetoranComponent;
