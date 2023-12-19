import React from 'react';
import styles from './Navbar.module.css';
import searchLogo from '../Assets/search-logo.png';
import rssLogo from '../Assets/rss-logo.png';
import Dropdown from './Dropdown'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.searchContainer}>
          <button className={styles.searchButton}>
            <img src={searchLogo} alt="Search" className={styles.logo} />
          </button>
          <input type="text" placeholder="Type here..." className={styles.searchInput} />
          <button className={styles.wifiButton}>
          <img src={rssLogo} alt="WiFi" className={styles.logo} />
        </button>
        </div>
        <span className={styles.samplePage}>Sample Page</span>
      </div>
      
      <div className={styles.pgh}>
        <p>
        <span className={styles.boldText}>Al-Rawda is a maintenance, dismantling, and installation company for air conditioners, dismantling and installing furniture and kitchens </span>
        <span className={styles.normalText}>Carpenter dismantling and installing furniture, kitchens, and curtains</span>
        </p>

      </div>
      {<Dropdown />}
    </div>
  );
};

export default Navbar;
