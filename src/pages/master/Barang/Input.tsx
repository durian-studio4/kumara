import React from 'react';
import { Input } from 'antd';
import styles from './index.less';

interface Props {
  label?: string;
  id?: string;
  name?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

const InputText: React.FC<Props> = ({
  label,
  id,
  name,
  onChange,
  placeholder,
  value,
  disabled,
}) => {
  return (
    <div className={styles.box5}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor={label}>
          {name}
        </label>
        <Input
          className={styles.input}
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputText;
