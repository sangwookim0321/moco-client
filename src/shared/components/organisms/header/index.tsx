import React from "react";
import styles from "./index.module.css";
import ImageBox from "@/shared/components/atoms/image-box";

const Header = () => {
  return (
    <header className={styles.header}>
      <ImageBox
        src="/assets/images/moco-logo.png"
        alt="Logo"
        width=""
        height=""
      />
    </header>
  );
};

export default Header;
