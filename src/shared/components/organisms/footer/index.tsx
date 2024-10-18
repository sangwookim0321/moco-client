import React from "react";
import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_1}>
        <p>© 2024 DevHardy.</p>
      </div>
      <div className={styles.info_2}>
        <p>E-Mail : pointjumpit@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
