import React from 'react';
import styles from './index.less';
// import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface Props {
  handleChange: (date: any, dateString: any) => void;
  id_kategori?: string;
}

const DatePickerComponent: React.FC<Props> = ({ handleChange, id_kategori = '0' }) => {
  return (
    <div>
      {id_kategori === '2' ? (
        <RangePicker
          className={styles.main}
          onChange={handleChange}
          format="YYYY-MM-DD"
          picker="month"
        />
      ) : (
        <RangePicker className={styles.main} onChange={handleChange} format="YYYY-MM-DD" />
      )}
    </div>
  );
};

export default DatePickerComponent;
