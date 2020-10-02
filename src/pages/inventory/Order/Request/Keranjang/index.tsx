import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'umi';
import Cookie from 'js-cookie';
import styles from './index.less';

import Input from './Input';
import Table from './Table';

import useFetch from '@/hooks/useFetch';

interface Props {}

export interface CreateBarang {
  json: {};
  clear: () => void;
}

const KeranjangComponent: React.FC<Props> = () => {
  const [isRedirect, setRedirect] = useState(false);
  const [isLoading_order, setLoadingOrder] = useState(false);

  const id_params = useParams();

  const [data_table, data_status, data_loading, data_error, fetchData, postData] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchData(`${REACT_APP_ENV}/admin/v1/inventory/order/request/${id_params.id}/select`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitOrder = async () => {
    setLoadingOrder(true);
    try {
      const posting = await fetch(
        `${REACT_APP_ENV}/admin/v1/inventory/order/request/${id_params.id}/order`,
        {
          method: 'post',
          headers: {
            Authorization: String(Cookie.get('token')),
          },
        },
      );
      const json = await posting.json();
      const message = await json.message;
      setRedirect(true);
      setLoadingOrder(false);
      return message;
    } catch (error) {
      setLoadingOrder(false);
    }
  };

  const createBarang = ({ json, clear }: CreateBarang) => {
    postData(
      `${REACT_APP_ENV}/admin/v1/inventory/order/request/${id_params.id}/update`,
      json,
      clear,
    );
  };

  const deleted = () => console.log('deleted');
  const deleteBarang = (no: string) => {
    postData(
      `${REACT_APP_ENV}/admin/v1/inventory/order/request/${id_params.id}/delete`,
      JSON.stringify({ no }),
      deleted,
    );
  };

  if (isRedirect) {
    return <Redirect to="/inventory/confirm" />;
  }

  return (
    <div>
      <p className={styles.title}>Request Order</p>
      <Input onCreate={createBarang} onLoading={Boolean(data_loading)} />
      <Table
        data={data_table}
        status={Number(data_status)}
        isLoading_data={Boolean(data_loading)}
        isError_data={data_error}
        isLoading_order={isLoading_order}
        onSubmit={submitOrder}
        onDelete={deleteBarang}
      />
    </div>
  );
};

export default KeranjangComponent;
