// DropdownMenu.js

import React from 'react';
import styles from './DropdownMenu.module.css'; // Import your CSS module

const DropdownMenu = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.content}>
        <span className={styles.materialSymbolsOutlined}> settings </span>
        <p>Settings</p>
        <span className={styles.materialSymbolsOutlined}> expand_more </span>
      </div>
      <button type="button"></button>
      <div className={styles.menu}>
        <a>
          <span className={styles.materialSymbolsOutlined}> lock </span>
          <p>Account</p>
        </a>
        <a>
          <span className={styles.materialSymbolsOutlined}> credit_card </span>
          <p>Payments</p>
        </a>
        <a>
          <span className={styles.materialSymbolsOutlined}> archive </span>
          <p>Archive</p>
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
