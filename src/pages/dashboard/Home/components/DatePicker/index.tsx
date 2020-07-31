import React from 'react';
import styles from './index.less';
// import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface Props {
  handleChange: (date: any, dateString: any) => void;
}

const DatePickerComponent: React.FC<Props> = ({ handleChange }) => {
  return (
    <div>
      <RangePicker className={styles.main} onChange={handleChange} format="YYYY-MM-DD HH:mm:ss" />
    </div>
  );
};

export default DatePickerComponent;
