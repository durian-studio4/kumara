import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

interface Props {
  initial?: string;
  handleChange: (value: any, option: any) => void;
}

const SelectPajakComponent: React.FC<Props> = ({ initial, handleChange }) => {
  const data = [
    {
      id: 0,
      value: 'Non Pajak',
    },
    {
      id: 1,
      value: 'Pajak',
    },
    {
      id: 2,
      value: 'All',
    },
  ];

  return (
    <Select
      labelInValue
      defaultValue={{ key: initial || 'Mohon Pilih' }}
      style={{
        width: '30%',
        maxWidth: '8em',
        minHeight: '2em',
        marginBottom: '1em',
      }}
      onChange={handleChange}
    >
      {data &&
        data.map((data) => {
          return (
            <Option key={data.id} id={data.id} value={data.value}>
              {data.value}
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectPajakComponent;
