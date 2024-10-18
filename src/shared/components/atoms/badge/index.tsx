import React from 'react';
import styles from './index.module.css';

interface BadgeProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  category?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, backgroundColor, color, category }) => {
  if (category) {
    switch (category) {
      case '능력고사':
        backgroundColor = '#bfdbfe';
        color = '#447bef';
        break;
      case '주관식':
        backgroundColor = '#bbf7d0';
        color = '#17a44b';
        break;
      case '맞추기':
        backgroundColor = '#fef08a';
        color = '#ca8a04';
        break;
    }
  }
  return (
    <span className={styles.badge} style={{ backgroundColor, color }}>
      {children}
    </span>
  );
};

export default Badge;
