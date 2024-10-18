import React from 'react';
import styles from './index.module.css';

interface InputProps {
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ className, value, onChange, placeholder, disabled }) => {
  return <input className={`${className} ${styles.input}`} type="text" value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />;
};

export default Input;
