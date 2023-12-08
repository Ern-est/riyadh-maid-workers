// Footer.js

import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module
import rssLogo from '../Assets/rss-logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContent}>
        <p>Powered by WordPress</p>
        <span className={styles.verticalDivider}></span>
        <p>Designed by Tielabs</p>
        <img src={rssLogo} alt="RSS Logo" className={styles.rssLogo} />
      </div>
      <div className={styles.rightContent}>
        <p>Copyrights 2023. All Rights Reserved</p>
        <span className={styles.cSymbol}>&copy;</span>
      </div>
    </footer>
  );
};

export default Footer;
