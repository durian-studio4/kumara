import React from 'react';

import { Select } from 'antd';

const Option = Select.Option;

interface Props {
  initial?: string;
  handleChange: (value: any, option: any) => void;
}

const initialState = [
  {
    id: 1,
    value: 'BCA',
  },
  {
    id: 2,
    value: 'BNI',
  },
  {
    id: 3,
    value: 'BRI',
  },
  {
    id: 4,
    value: 'Mandiri',
  },
];

const SelectBank: React.FC<Props> = ({ initial, handleChange }) => {
  return (
    <Select
      labelInValue
      defaultValue={{ key: initial || 'Mohon Pilih' }}
      style={{
        width: '100%',
        minHeight: '2em',
      }}
      onChange={handleChange}
    >
      {initialState.map((data, i) => {
        return (
          <Option key={i} id={i} value={data.value}>
            {data.value}
          </Option>
        );
      })}
    </Select>
  );
};

export default SelectBank;
