import React, { useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { format } from 'date-fns';
import styles from './index.less';

import SelectKategori from '../Home/components/SelectKategori';
import SelectCabang from '../Home/components/SelectCabang';

import ChartPengeluaran from './Chart';
import TablePengeluaran from './Table';

import DatePicker from '../Home/components/DatePicker';

import useSelect from '../hooks/useSelect';

interface Props {}

let initialDate = new Date();
let y = initialDate.getFullYear();
let m = initialDate.getMonth();
let firstDay = format(new Date(y, m, 1), 'yyyy-MM-dd');
let lastDay = format(new Date(y, m + 1, 0), 'yyyy-MM-dd');

const PengeluaranComponent: React.FC<Props> = () => {
  const [kategori, onChangeKategori] = useSelect('0');
  const [cabang, onChangeCabang] = useSelect('1');
  const [date, setDate] = useState([firstDay, lastDay]);

  const onChangeDate = (date: any, dateString: any) => {
    setDate([dateString[0] || '', dateString[1] || '']);
  };

  return (
    <GridContent>
      <p className={styles.title}>Pengeluaran</p>
      <div className={styles.row_box}>
        <SelectKategori handleChange={onChangeKategori} />
        <SelectCabang
          address={`${REACT_APP_ENV}/admin/v1/pengaturan/cabang/get`}
          handleChange={onChangeCabang}
        />
        <DatePicker handleChange={onChangeDate} id_kategori={String(kategori)} />
      </div>
      <ChartPengeluaran id_cabang={String(cabang)} id_kategori={String(kategori)} date={date} />
      <TablePengeluaran id_cabang={String(cabang)} kategori={String(kategori)} date={date} />
    </GridContent>
  );
};

export default PengeluaranComponent;
