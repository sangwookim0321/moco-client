import React from "react";
import styles from "./index.module.css";

interface IconButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick, icon }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
};

export default IconButton;
