import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

interface CardProps {
  children?: React.ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={styles.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Card;
