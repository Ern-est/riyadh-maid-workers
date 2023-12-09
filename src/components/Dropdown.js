// Navbar.js
import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        {/* First Row */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="1">
            Installing curtains in Dammam and Al-Khobar
            <div className={styles.dropdown}>
              <span>Subitem 1</span>
              <hr className='lina'/>
              <span>Subitem 2</span>
              <span>Subitem 3</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="2">
            Hafar Al-Batin paints and dyes
            <div className={styles.dropdown}>
              <span>Subitem 4</span>
              <span>Subitem 5</span>
              <span>Subitem 6</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="3">
            Dammam and Khobar plumber
            <div className={styles.dropdown}>
              <span>Subitem 7</span>
              <span>Subitem 8</span>
              <span>Subitem 9</span>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="4">
            Kitchen installation and maintenance
            <div className={styles.dropdown}>
              <span>Subitem 10</span>
              <span>Subitem 11</span>
              <span>Subitem 12</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="5">
            Installation and maintenance of air conditioners in Dammam
            <div className={styles.dropdown}>
              <span>Subitem 13</span>
              <span>Subitem 14</span>
              <span>Subitem 15</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="6">
            Ceramic installation in Dammam
            <div className={styles.dropdown}>
              <span>Subitem 16</span>
              <span>Subitem 17</span>
              <span>Subitem 18</span>
            </div>
          </div>
        </div>

        {/* Additional Rows */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="10">
            Damman and Khobar plumber
            <div className={styles.dropdown}>
              <span>Subitem 28</span>
              <span>Subitem 29</span>
              <span>Subitem 30</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="11">
            Ceramic installation in Dammam
            <div className={styles.dropdown}>
              <span>Subitem 31</span>
              <span>Subitem 32</span>
              <span>Subitem 33</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="12">
            Restoration and contracting works in Dammam
            <div className={styles.dropdown}>
              <span>Subitem 34</span>
              <span>Subitem 35</span>
              <span>Subitem 36</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="13">
            Al-Ahsa and Dammam paints and dyes
            <div className={styles.dropdown}>
              <span>Subitem 37</span>
              <span>Subitem 38</span>
              <span>Subitem 39</span>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="10">
            Pest control in northern Riyadh 
            <div className={styles.dropdown}>
              <span>Subitem 28</span>
              <span>Subitem 29</span>
              <span>Subitem 30</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="11">
            Jeddah recruitment office
            <div className={styles.dropdown}>
              <span>Subitem 31</span>
              <span>Subitem 32</span>
              <span>Subitem 33</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="12">
            Female workers per month in Riyadh
            <div className={styles.dropdown}>
              <span>Subitem 34</span>
              <span>Subitem 35</span>
              <span>Subitem 36</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="13">
            Electrician in Dammam and Khobar 
            <div className={styles.dropdown}>
              <span>Subitem 37</span>
              <span>Subitem 38</span>
              <span>Subitem 39</span>
            </div>
          </div>
        </div>
        {/* Additional Row */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="14">
            Monthly maids in Dammam
            <div className={styles.dropdown}>
              <span>Subitem 40</span>
              <span>Subitem 41</span>
              <span>Subitem 42</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="15">
            Workers per month, Jeddah
            <div className={styles.dropdown}>
              <span>Subitem 43</span>
              <span>Subitem 44</span>
              <span>Subitem 45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
