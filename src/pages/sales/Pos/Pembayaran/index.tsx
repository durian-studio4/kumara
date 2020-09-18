import React, { useState, useEffect } from 'react';
import { Redirect } from 'umi';
import { useParams } from 'umi';
import Cookie from 'js-cookie';
import styles from './index.less';
// import Add from './Add';

import InputComponent from './Input';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface CheckoutPembayaran {
  json: {};
  clear: () => void;
}

const PembayaranComponent: React.FC<Props> = () => {
  const [loadingExport, setLoadingExport] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);

  const [dataPembayaran, statusPembayaran, isLoading, isError, fetchData, postData] = useFetch();

  const id_params = useParams().id;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchData(`${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkoutPembayaran = ({ json, clear }: CheckoutPembayaran) => {
    postData(`${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/update`, json, clear);
    setIsRedirect(true);
  };

  const exportToExcelPembayaran = async () => {
    setLoadingExport(true);
    try {
      const posting = await fetch(`${REACT_APP_ENV}/admin/v1/sales/pos/${id_params}/excel`, {
        method: 'post',
        headers: {
          Authorization: String(Cookie.get('token')),
        },
      });
      const blob = await posting.blob();
      const result = blob;
      setLoadingExport(false);
      let elem = document.createElement('a');
      elem.href = window.URL.createObjectURL(result);
      elem.download = 'Invoice.xlsx';
      window.document.body.appendChild(elem);
      elem.click();
      window.document.body.removeChild(elem);
    } catch (error) {
      console.log(error.message);
      setLoadingExport(false);
    }
  };

  if (isRedirect) {
    return <Redirect to="/sales/home" />;
  }

  return (
    <div>
      <p className={styles.title}>Request Order</p>
      <InputComponent
        dataPembayaran={dataPembayaran}
        statusPembayaran={Number(statusPembayaran)}
        checkoutPembayaran={checkoutPembayaran}
        exportExcelPembayaran={exportToExcelPembayaran}
        isLoading={Boolean(isLoading)}
        isLoadingExport={loadingExport}
        isError={Boolean(isError)}
      />
    </div>
  );
};

export default PembayaranComponent;
