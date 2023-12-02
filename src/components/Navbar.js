// Navbar.js

// ... Existing imports ...
import React from 'react';
import styles from './Navbar.module.css';
import searchLogo from '../Assets/search-logo.png';
import rssLogo from '../Assets/rss-logo.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.searchContainer}>
          <button className={styles.searchButton}>
            <img src={searchLogo} alt="Search" className={styles.logo} />
          </button>
          <input type="text" placeholder="Type here..." className={styles.searchInput} />
        </div>
        <button className={styles.wifiButton}>
          <img src={rssLogo} alt="WiFi" className={styles.logo} />
        </button>
        <span className={styles.samplePage}>Sample Page</span>
      </div>
      <hr className='br'/>
      <div className={styles.pgh}>
        <p className={styles.boldText} title="Al-Rwda is a maintenance, dismantling, and installation company for air conditioners, dismantling and installing furniture and kitchens">
          Al-Rwda is a maintenance, dismantling, and installation company for air conditioners, dismantling and installing furniture and kitchens 
        </p>
        <p className={styles.normalText}>Carpenter dismantling and installing furniture, kitchens, and curtains</p>
      </div>
      <div className={styles.row}>
        <div className={styles.navGroup}>
          <span className={styles.navItem} tabIndex="1">Dismantling and installing in Damman</span>
          {/* Add more nav items as needed */}
        </div>
        <div className={styles.navGroup}>
          <span className={styles.navItem} tabIndex="4">Kitchen installation and maintainance</span>
          
          {/* Add more nav items as needed */}
        </div>
        <div className={styles.navGroup}>
          <span className={styles.navItem} tabIndex="7">Ectrician in Damman khoban</span>
          
          {/* Add more nav items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
