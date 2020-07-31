import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

interface Props {
  initial?: string;
  handleChange?: (value: any, option: any) => void;
  disabled?: boolean;
}

const GenderComponent: React.FC<Props> = ({ initial, handleChange, disabled }) => {
  const data = [
    {
      id: 0,
      value: 'Laki Laki',
    },
    {
      id: 1,
      value: 'Perempuan',
    },
  ];

  return (
    <Select
      labelInValue
      defaultValue={{ key: initial || 'Mohon Pilih' }}
      style={{
        width: '100%',
        minHeight: '2em',
      }}
      onChange={handleChange}
      disabled={disabled}
    >
      {data &&
        data.map((arr) => {
          return (
            <Option key={arr.id} value={arr.value}>
              {arr.value}
            </Option>
          );
        })}
    </Select>
  );
};

export default GenderComponent;
