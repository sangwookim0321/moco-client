import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  width?: string;
  height?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', width, height, color, className }) => {
  return (
    <button style={{ width, height, color }} className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
