import React from 'react';
import styles from './index.module.css';
import IconTopBottom from '../../../../../public/assets/icons/IocnTopBottom';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <button className={styles.dropdown_menu}>
      <p className={styles.p}>{children}</p>
      <IconTopBottom />
    </button>
  );
};

export default DropdownMenu;
