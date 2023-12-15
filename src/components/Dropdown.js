// Navbar.js
import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import drop from'../Assets/drop.png';
import Modal from '../Pages/Modal'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedModalContent, setSelectedModalContent] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (content) => {
    setSelectedModalContent(content);
  };

  const closeModal = () => {
    setSelectedModalContent(null);
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
          <img src={drop} alt="foldersnap" className="folder" />
            Installing curtains in Dammam and Al-Khobar
            <div className={styles.dropdown}>
              <p>
              <Modal isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
              <span onClick={() => openModal('Modal content for tab 1 span 1')}>Carpenter installing curtains in Dammam 0504353061</span>
              <hr className='lina'/>
              <span>Curtain installation technician in Dammam 0566733794</span>
              <hr className='lina'/>
              <span>Ras Tanura curtain installation 0505121891</span>
              <hr className='lina'/>
              <span>Carpenter installing curtains in Al-khobar 0505121891</span>
              <hr className='lina'/>
              <span>Installing curtains in Dammam 0505121891</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="4">
          <img src={drop} alt="foldersnap" className="folder" />
            Kitchen installation and maintenance
            <div className={styles.dropdown}>
              <p>
            <span>Aluminium kitchen installation technician, Dammam 0578173739</span>
            <hr />
            <span>Kitchen maintenance in Dammam 0505121891</span>
            <hr />
            <span>Kitchen installation company in Al khobar 0578173739</span>
            <hr />
            <span>Kitchen installation technician in Dammam 0578173739</span>
            <hr />
            <span>Kitchen installation company in Qatif 0505121891</span>
            <hr />
            <span>Kitchen maintenance technician in Al-Khobar 0505121891</span>
            <hr />
            <span>Dismantling and installing kitchens in Al-khobar 0505121891</span>
            </p>
            </div>
          </div>

          

          <div className={styles.navItem} tabIndex="3">
          <img src={drop} alt="foldersnap" className="folder" />
            Dismantling and installing furniture in Dammam
            <div className={styles.dropdown}>
              <p>
                <span>Carpenter installing IKEA furniture in Dammam 0505121891</span>
                <hr />
                <span>Cheap carpenter in Dammam 0505121891</span>
                <hr />
                <span>Carpenter teacher in Dammam 0505121891</span>
                <hr />
                <span>Carpenter Saihat 056733794</span>
                <hr />
                <span>Carpenter installing bedrooms in Dammam 0505121891</span>
                <hr />
                <span>Carpenter number in Dammam 0505121891</span>
                <hr />
                <span>IKEA furniture istallation carpenter in Al Khobar 0504353061</span>
                <hr />
                <span>Dammam carpentry workshop 0566733794</span>
                <hr />
                <span>Dhahran carpenter 0505121891</span>
                <hr />
                <span>Al Khobar carpenter 0505121891</span>
                <hr />
                <span>Carpenter teacher in Al Khobar 0505121891</span>
                <hr />
                <span>Carpentry workshop in Al-Khobar 0566733794</span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className={styles.row}>
        <div className={styles.navItem} tabIndex="2">
        <img src={drop} alt="foldersnap" className="folder" />
            Hafar Al-Batin paints and dyes
            <div className={styles.dropdown}>
              <p>
              <span>Hafar Al-Batin Paints Corporation 0591194101</span>
              <hr className='lina'/>
              <span>Hafar Al-Batin paints teacher 0591194101</span>
              <hr className='lina'/>
              <span>Hafar Al-Batin Painting and Decoration Company 0591194101</span>
              <hr className='lina'/>
              <span>Paints Corporation in Hafr Al-Batin 0591194101</span>
              <hr className='lina'/>
              <span>Hafar Al-Batin Paints Corporation 0591194101</span>
              <hr className='lina'/>
              <span>Hafar Al-Batin door painter 0591194101</span>
              <hr className='lina'/>
              <span>Painting teacher, Hafar Al-Batin 0591194101</span>
              <hr className='lina'/>
              <span>Painting teacher in Hafar Al-Batin 0591194101</span>
              <hr className='lina'/>
              <span>Wall painting teacher in Hafar Al-Batin 0591194101</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="5">
          <img src={drop} alt="foldersnap" className="folder" />
            Installation and maintenance of air conditioners in Dammam
            <div className={styles.dropdown}>
              <p>
                <span>Air conditioner maintenance in Dammam, Al Shifa and Al Waha district 0551771407</span>
                <hr />
                <span>Installation of air conditioners in Dammam, Al Khaleej and Al Rabi'a district 0551771407</span>
                <hr />
                <span>Dammam air conditioner installation technician 0551771407</span>
                <hr />
                <span>Central air conditioning maintenance company in Dammam 0551771407</span>
                <hr />
                <span>Filipina air conditioner cleaning, Dammam 0565537769</span>
                <hr />
                <span>Central air conditioning installation company in Dammam 0551771407</span>
                <hr />
                <span>Air conditioning maintenance by Filipino workers, Dammam 0565537769</span>
                <hr />
                <span>Installation and maintenance of central air conditioners in Dammam 0551771407</span>
                <hr />
                <span>Filipino air conditioning technician Dammam 0551771407</span>
                <hr />
                <span>Window air conditioner cleaning in Dammam 0565537769</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="6">
          <img src={drop} alt="foldersnap" className="folder" />
            Dismantling and installing Riyadh furniture
            <div className={styles.dropdown}>
              <p>
                <span>Furniture transportation and installation, Al-Dubbat Dstrict, Riyadh 0540357493</span>
                <hr />
                <span>Furniture transportation and installation in Sultana District, Riyadh 0549357493</span>
                <hr />
                <span>Furniture transportation and installation in Al-Mansoura District, Riyadh 0549357493</span>
                <hr />
                <span>Furniture installation in Al Manakh district, Riyadh 0531357760</span>
                <hr />
                <span>Carpenter installing furniture in Al-Masani District, Riyadh 0531357760</span>
                <hr />
                <span>Furniture transportation in Ishbiliya district, east of Riyadh 0531357760</span>
                <hr />
                <span>Furniture transportation in Al-Yarmouk district east of Riyadh 0531357760</span>
                <hr />
                <span>Furniture transportation in Al-Sulay neighbourhood, east of Riyadh 0531357760</span>
                <hr />
                <span>Carpenter, dismatling and installing furniture, Al-Rabi' district, Riyadh, 0531357760</span>
                <hr />
                <span>IKEA furniture installation technician, Riyadh, Al-Murpoj</span>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Rows */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="10">
          <img src={drop} alt="foldersnap" className="folder" />
            Damman and Khobar plumber
            <div className={styles.dropdown}>
            <p>
              <span>Dammam plumber,Al-Fursan district, 057445945</span>
              <hr />
              <span>Dammam plumber,Al Aziziyah district, 0547445945</span>
              <hr />
              <span>Dammam plumber, Dhabab district 0549184808</span>
              <hr />
              <span>Dammam and Khobar plumber 0547445945</span>
              <hr />
              <span>Cheap plumber number in Dammam 0547445945</span>
              <hr />
              <span>Establishing and finishing plumbing in Dammam 0547445945</span>
              <hr />
              <span>Home plumber number in Dammam 0547445945</span>
              <hr />
              <span>Plumbing maintenance company in Dammam 0549184808</span>
              <hr />
              <span>Plumbing installation and maintenance company in Dammam 0547445945</span>
              <hr />
              <span>Plumber Al khobar 0547445945</span>
              <hr />
              <span>Home plumber number in Al Khobar 0547445945</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="11">
          <img src={drop} alt="foldersnap" className="folder" />
            Ceramic installation in Dammam
            <div className={styles.dropdown}>
              <p>
                <span>Dammam ceramics teacher 0549184808</span>
                <hr />
                <span>Ceramic installation contractor, Dammam 0549184808</span>
                <hr />
                <span>Ceramic installation company in Dammam 0549184808</span>
                <hr />
                <span>Ceramic installation company in Dammam 0549184808</span>
                <hr />
                <span>Ceramics teacher in Dammam 0547445945</span>
                <hr />
                <span>Ceramic and marble crushing Dammam 0549184808</span>
                <hr />
                <span>Ceramic installation company in Dammam 0547445945</span>
                <hr />
                <span>The best ceramic tile in Dammam 0547445945</span>
                <hr />
                <span>Court teacher in Dammam 0547445945</span>
                <hr />
                <span>Dammam tiles number 0549184808</span>
                <hr />
                <span>Dammam ceramics teacher 0549184808</span>
                <hr />
                <span>Interlock installation teacher in Dammam 0547445945</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="12">
          <img src={drop} alt="foldersnap" className="folder" />
            Restoration and contracting works in Dammam
            <div className={styles.dropdown}>
              <p>
                <span>Dammam restoration contractor 0547445945</span>
                <hr />
                <span>Home restoration and maintenance contractor in Dammam 0547445945</span>
                <hr />
                <span>Dammam building restoration and finishing contractor 0547445945</span>
                <hr />
                <span>Home renovation company in Dammam 0547445945</span>
                <hr />
                <span>The best bathroom restoration companies in Dammam 0547445945</span>
                <hr />
                <span>Building restoration contractor in Dammam 0549184808</span>
                <hr />
                <span>Building restoration contractor in Dammam 0547445945</span>
                <hr />
                <span>Apartment renovation in Dammam 0549184808</span>
                <hr />
                <span>House restoration in Dammam 0549184808</span>
                <hr />
                <span>Renovation and finishing contractor in Dammam 0547445945</span>
                <hr />
                <span>Khobar restoration contractor 0549184808</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="13">
          <img src={drop} alt="foldersnap" className="folder" />
            Al-Ahsa and Dammam paints and dyes
            <div className={styles.dropdown}>
              <p>
                <span>Cheap paint in Dammam and Khobar 0549184908</span>
                <hr />
                <span>Painting teacher in Dammam 054744945</span>
                <hr />
                <span>Dammam wood door painter 0547445945</span>
                <hr />
                <span>Cheap paint in Al Khobar 0547445945</span>
                <hr />
                <span>Cheap paint in Al-Ahsa 0549184808</span>
                <hr />
                <span>Al-Ahsa dyer's number: 0547445945</span>
                <hr />
                <span>Painting and finishing contractor in Al-Ahsa 0547445945</span>
                <hr />
                <span>Painting and dyeing company in Al-Ahsa 0547445945</span>
                <hr />
                <span>Painting teacher in Al-Ahsa 0547445945</span>
                <hr />
                <span>Painting teacher number in Dammam 0547445945</span>
                <hr />
                <span>Painting Al-Ahsa doors 0549184808</span>
                <hr />
                <span>Al-Ahsa bedroom painting shops 0547445945</span>
                <hr />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="10">
          <img src={drop} alt="foldersnap" className="folder" />
            Pest control in northern Riyadh 
            <div className={styles.dropdown}>
              <span>Pest control company north of Riyadh</span>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="11">
          <img src={drop} alt="foldersnap" className="folder" />
            Jeddah recruitment office
            <div className={styles.dropdown}>
              <p>
              <span>Recruiting a domestic worker from India</span>
              <hr />
              <span>The Cheapest recruitment office from the Philippines in Jedah</span>
              <hr />
              <span>Recruiting domestic workers from the philippines in Jeddah</span>
              <hr />
              <span>Recruting a domestic workers from the philippines</span>
              <hr />
              <span>Recruting maids from the Philippines in Jeddah</span>
              <hr />
              <span>Recruiting a domestic worker from Bangladesh</span>
              
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="12">
          <img src={drop} alt="foldersnap" className="folder" />
            Female workers per month in Riyadh
            <div className={styles.dropdown}>
              <p>
              <span>Numbers for hourly workers in Riyadh 0500753251</span>
              <hr />
              <span>Ahyssinian female workers in Riyadh 0500753251</span>
              <hr />
              <span>Numbers for maids in Riyadh: 0500753251</span>
              <hr />
              <span>Filipina maids per month in Riyadh 0538839342</span>
              <hr />
              <span>Hourly workers, south of Riyadh, Bin Turki district, 055481253</span>
              <hr />
              <span>Numbers of female workers per month in Riyadh 0555481253</span>
              <hr />
              <span>Cheap maids per month in Riyadh 0553873213</span>
              <hr />
              <span>Indonesian female workers per hour, Riyadh 0555481253</span>
              <hr />
              <span>Numbers for hourly workers in eastern Riyadh 0555481253</span>
              <hr />
              <span>Hourly workers in Riyadh, Al-Yamamah district, 0555481253</span>
              <hr />
              <span>Female workers for rent per month in Riyadh 0583595089</span>
              <hr />
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="13">
          <img src={drop} alt="foldersnap" className="folder" />
            Electrician in Dammam and Khobar 
            <div className={styles.dropdown}>
              <p>
              <span>Taiba District Electrician, Dammam 0549184808</span>
              <hr />
              <span>Electrician, Dammam, Al-Shati District, 0549184808</span>
              <hr />
              <span>Dammam Electrician, Al Nour District, 0549184808</span>
              <hr />
              <span>Electrician technician for home construction in Dammam 0547445945</span>
              <hr />
              <span>Home electrician number in Dammam 0547445945</span>
              <hr />
              <span>Home electrician teacher in Dammam 0547445945</span>
              <hr />
              <span>Home electrician technician in Dammam 0549184808</span>
              <hr />
              <span>Home electrician Dammam Twitter 0547445945</span>
              <hr />
              <span>Home electrician in Qatif 0547445945</span>
              </p>
            </div>
          </div>
        </div>
        {/* Additional Row */}
        <div className={styles.row}>
          <div className={styles.navItem} tabIndex="14">
          <img src={drop} alt="foldersnap" className="folder" />
            Monthly maids in Dammam
            <div className={styles.dropdown}>
              <p>
              <span>Ethiopian female workers in Dammam 0582562022</span>
              <hr />
              <span>Companies that rent maids by the month in Dammam 0508747681</span>
              <hr />
              <span>Female workers per month in Dammam 0508747681</span>
              <hr />
              <span>Hiring female workers per month, Dammam 0598684276</span>
              <hr />
              <span>Monthly workers in Dammam 0561759135</span>
              <hr />
              <span>Offices for renting maids in Dammam, 0582562022</span>
              <hr />
              <span>Numbers of maids per month in Dammam 0530610335</span>
              <hr />
              <span>Cook of the month in Dammam 0582562022</span>
              <hr />
              <span>Offices for renting maids in Dammam, 0582562022</span>
              <hr />
              <span>Maids per month in Dammam 0508747681</span>
              </p>
            </div>
          </div>

          <div className={styles.navItem} tabIndex="15">
          <img src={drop} alt="foldersnap" className="folder" />
            Workers per month, Jeddah
            <div className={styles.dropdown}>
              <span>Offices for renting maids by the month in Jeddah 0568195708</span>
              <hr />
              <span>Housemaid per month Jeddah 0568195708</span>
              <hr />
              <span>Domestic workers per month, Jeddah 0568195708</span>
              <hr />
              <span>Numbers of maids in Jeddah for the month: 0568195708</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

