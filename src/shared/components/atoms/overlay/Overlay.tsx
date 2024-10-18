import React, { FC } from 'react';
import { foramtDate } from '@/shared/utils/foramt';
import styles from './index.module.css';

interface OverlayProps {
  sub_title?: string;
  description?: string;
  created_at?: string;
  views?: number;
  isVisible: boolean;
}

export const Overlay: FC<OverlayProps> = ({ sub_title, description, created_at, views, isVisible }) => {
  return (
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.overlayContent}>
        <h3>{sub_title}</h3>
        <p>{description}</p>
        {created_at && <p>{foramtDate(created_at)}</p>}
        <p>{views}</p>
      </div>
    </div>
  );
};
