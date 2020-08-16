import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface Props {
  handleChange: () => void;
  disabled?: boolean;
}

const SelectKategori: React.FC<Props> = ({ handleChange, disabled }) => {
  const data = [
    {
      id: 0,
      value: 'Hari',
    },
    {
      id: 1,
      value: 'Minggu',
    },
    {
      id: 2,
      value: 'Bulan',
    },
  ];

  return (
    <Select
      labelInValue
      defaultValue={{ key: 'Hari' }}
      style={{
        width: '30%',
        maxWidth: '8em',
        marginRight: '1em',
        minHeight: '2em',
      }}
      onChange={handleChange}
      disabled={disabled}
    >
      {data &&
        data.map((arr) => {
          return (
            <Option key={arr.id} id={arr.id} value={arr.value}>
              {arr.value}
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectKategori;
