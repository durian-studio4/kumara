import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import Cookie from 'js-cookie';
import styles from './index.less';

import ChartKurir from './Chart';
import TableKurir from './Table';
import UpdateKurir from './Update';
import DetailKurir from './Detail';
import AddKurir from './Add';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';

interface Props {}

export interface ExcelProps {
  id: string;
  sales: string;
}

export interface UpdateProps {
  json: {};
  clear: () => void;
}

const KurirComponent: React.FC<Props> = () => {
  const [visible_update, setUpdate] = useState(false);
  const [id_update, setIdUpdate] = useState(0);

  const [visible_detail, setDetail] = useState(false);
  const [id_detail, setIdDetail] = useState(0);

  const [visible_add, setVisibleAdd] = useState(false);

  const [data_chart, status_chart, loading_chart, error_chart, fetchChart] = useFetch();

  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  const [loading_update, status_update, postUpdate] = useCreate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchChart(`${REACT_APP_ENV}/admin/v1/kurir/chart/weekly`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/kurir/pengiriman`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_update]);

  const handleVisibleAdd = () => setVisibleAdd(!visible_add);

  const handleVisibleDetail = () => setDetail(!visible_detail);

  const handleUpdate = (id: string) => {
    setUpdate(!visible_update);
    setIdUpdate(Number(id));
  };

  const handleDetail = (id: string) => {
    setDetail(!visible_detail);
    setIdDetail(Number(id));
  };

  const handleClearState = () => {
    setUpdate(!visible_update);
    setIdUpdate(0);
  };

  const updateDetailPengiriman = () => {
    postUpdate(
      `${REACT_APP_ENV}/admin/v1/kurir/${id_detail}/pengiriman`,
      JSON.stringify({
        status_pengiriman: 1,
      }),
      handleVisibleDetail,
    );
  };

  const updatePengiriman = ({ json, clear }: UpdateProps) => {
    postUpdate(`${REACT_APP_ENV}/admin/v1/kurir/${id_update}/pengiriman`, json, clear);
  };

  const downloadExcel = async ({ id, sales }: ExcelProps) => {
    try {
      const fetching = await fetch(`${REACT_APP_ENV}/admin/v1/kurir/${id}/excel`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: String(Cookie.get('token')),
        },
      });
      const blob = await fetching.blob();
      const result = blob;
      let elm = document.createElement('a');
      elm.href = window.URL.createObjectURL(result);
      elm.download = `${sales}-${id}.xlsx`;
      document.body.appendChild(elm);
      elm.click();
      document.body.removeChild(elm);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <GridContent>
      <p className={styles.title}>Kurir</p>
      <ChartKurir
        data={data_chart}
        status={Number(status_chart)}
        loading={Boolean(loading_chart)}
        isError={error_chart}
      />
      <TableKurir
        data={data_list}
        status={Number(status_list)}
        loading={Boolean(loading_list)}
        isError={error_list}
        handleVisibleAdd={handleVisibleAdd}
        handleEditDetail={handleDetail}
        handleUpdateDetail={handleUpdate}
        handleDownloadDetail={downloadExcel}
      />

      {visible_add ? <AddKurir visible={visible_add} onCancel={handleVisibleAdd} /> : null}

      {visible_update ? (
        <UpdateKurir
          visible={visible_update}
          onCancel={handleClearState}
          onCreate={updatePengiriman}
          onLoadButton={Boolean(loading_update)}
        />
      ) : null}

      {visible_detail ? (
        <DetailKurir
          visible={visible_detail}
          id={id_detail}
          onCancel={handleVisibleDetail}
          onCreate={updateDetailPengiriman}
          onLoadButton={Boolean(loading_update)}
        />
      ) : null}
    </GridContent>
  );
};

export default KurirComponent;
