import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import Cookie from 'js-cookie';
import styles from './index.less';

import ChartKurir from './Chart';
import TableKurir from './Table';
import UpdateKurir from './Update';
import DetailKurir from './Detail';

import AddResi from './AddResi';
import DetailResi from './DetailResi';
import TableResi from './TableResi';

import useFetch from '@/hooks/useFetch';
import useCreate from '@/hooks/useCreate';
import useCreateResi from './hooks/useCreate';

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

  const [visible_resi, setResi] = useState(false);
  const [id_resi, setIdResi] = useState('');

  const [visible_add, setVisibleAdd] = useState(false);

  const [data_chart, status_chart, loading_chart, error_chart, fetchChart] = useFetch();
  const [data_resi, status_resi, loading_resi, error_resi, fetchResi] = useFetch();
  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  const [loading_update, status_update, postUpdate] = useCreate();
  const [loading_resiCreate, status_resiCreate, resiCreate] = useCreateResi();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchChart(`${REACT_APP_ENV}/admin/v1/kurir/chart/weekly`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_update, status_resiCreate]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchResi(`${REACT_APP_ENV}/admin/v1/kurir/resi/list`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_update, status_resiCreate]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/kurir/pengiriman`);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status_update, status_resiCreate]);

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

  const handleVisibleResi = (id: string) => {
    setResi(!visible_resi);
    setIdResi(id);
  };

  const handleClearResi = () => {
    setResi(!visible_resi);
    setIdResi('');
  };

  const handleClearState = () => {
    setUpdate(!visible_update);
    setIdUpdate(0);
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

  const createResi = ({ data, clear }: any) => {
    resiCreate(`${REACT_APP_ENV}/admin/v1/kurir/resi`, data, clear);
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
        handleEditDetail={handleDetail}
        handleUpdateDetail={handleUpdate}
        handleDownloadDetail={downloadExcel}
      />
      <TableResi
        data={data_resi}
        status={Number(status_resi)}
        loading={Boolean(loading_resi)}
        isError={error_resi}
        handleVisibleSelect={handleVisibleResi}
        handleVisibleAdd={handleVisibleAdd}
      />

      {visible_add ? (
        <AddResi
          visible={visible_add}
          onLoadButton={Boolean(loading_resiCreate)}
          onCreate={createResi}
          onCancel={handleVisibleAdd}
        />
      ) : null}

      {visible_resi ? (
        <DetailResi visible={visible_resi} id={id_resi} onCancel={handleClearResi} />
      ) : null}

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
