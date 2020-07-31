import React, { Suspense, useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Card, Row } from 'antd';
import { format } from 'date-fns';

import styles from './index.less';

import PageLoading from '@/components/PageLoading';
import SelectKategori from './components/SelectKategori';
import SelectCabang from './components/SelectCabang';
import TablePengeluaran from './components/TablePengeluaran';
import TablePendapatan from './components/TablePendapatan';
import TotalOmset from './components/TotalOmset';
import Setoran from './components/Setoran';
import TotalPendapatan from './components/TotalPendapatan';
import TotalPengeluaran from './components/TotalPengeluaran';

import DatePicker from './components/DatePicker';

import useSelect from '@/hooks/useSelect';

let initialDate = new Date();
let y = initialDate.getFullYear();
let m = initialDate.getMonth();
let firstDay = format(new Date(y, m, 1), 'yyyy-MM-dd');
let lastDay = format(new Date(y, m + 1, 0), 'yyyy-MM-dd');

interface Props {}

const HomeComponent: React.FC<Props> = () => {
  const [cabang, onChangeCabang] = useSelect('1');
  const [kategori, onChangeKategori] = useSelect('0');
  const [date, setDate] = useState([firstDay, lastDay]);

  const onChangeDate = (date: any, dateString: any) => {
    setDate(dateString);
  };

  return (
    <GridContent>
      <p className={styles.title}>Dashboard</p>
      <div className={styles.row_box}>
        <SelectKategori handleChange={onChangeKategori} />
        <SelectCabang
          address={`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/get`}
          handleChange={onChangeCabang}
        />
        <DatePicker handleChange={onChangeDate} />
      </div>
      <React.Fragment>
        <Suspense fallback={<PageLoading />}>
          <Card
            bordered={false}
            style={{
              marginTop: '2em',
              marginBottom: '2em',
            }}
          >
            <Row gutter={68}>
              <TotalOmset id_cabang={String(cabang)} id_kategori={String(kategori)} date={date} />
              <Setoran id_cabang={String(cabang)} id_kategori={String(kategori)} date={date} />
            </Row>
            <Row gutter={68}>
              <TotalPendapatan
                id_cabang={String(cabang)}
                id_kategori={String(kategori)}
                date={date}
              />
              <TotalPengeluaran
                id_cabang={String(cabang)}
                id_kategori={String(kategori)}
                date={date}
              />
            </Row>
          </Card>
        </Suspense>
      </React.Fragment>
      <TablePendapatan id_cabang={String(cabang)} />
      <TablePengeluaran id_cabang={String(cabang)} />
    </GridContent>
  );
};

export default HomeComponent;
