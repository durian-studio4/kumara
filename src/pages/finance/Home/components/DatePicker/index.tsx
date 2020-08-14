import React from 'react';
import styles from './index.less';
// import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface Props {
  handleChange: () => void;
  id_kategori: string;
}

const DatePickerComponent: React.FC<Props> = ({ handleChange, id_kategori }) => {
  return (
    <div>
      {id_kategori === '2' ? (
        <RangePicker
          className={styles.main}
          onChange={handleChange}
          format="YYYY-MM-DD HH:mm:ss"
          picker="month"
        />
      ) : (
        <RangePicker className={styles.main} onChange={handleChange} format="YYYY-MM-DD HH:mm:ss" />
      )}
    </div>
  );
};

export default DatePickerComponent;
