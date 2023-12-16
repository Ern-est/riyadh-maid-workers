// Navbar.js
import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import drop from '../Assets/drop.png';
import Tab1a from '../Pages/tab1a';
import Tab1b from '../Pages/tab1b';
import Tab1c from '../Pages/tab1c';
import Tab1d from '../Pages/tab1d';
import Tab1e from '../Pages/tab1e';
import Tab2a from '../Pages/tab2a';
import Tab2b from '../Pages/tab2b';
import Tab2c from '../Pages/tab2c';
import Tab2d from '../Pages/tab2d';
import Tab2e from '../Pages/tab2e';
import Tab2f from '../Pages/tab2f';
import Tab2g from '../Pages/tab2g';
import Tab3a from '../Pages/tab3a';
import Tab3b from '../Pages/tab3b';
import Tab3c from '../Pages/tab3c';
import Tab3d from '../Pages/tab3d';
import Tab3e from '../Pages/tab3e';
import Tab3f from '../Pages/tab3f';
import Tab3g from '../Pages/tab3g';
import Tab3h from '../Pages/tab3h';
import Tab3i from '../Pages/tab3i';
import Tab3j from '../Pages/tab3j';
import Tab3k from '../Pages/tab3k';
import Tab3l from '../Pages/tab3l';



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
  {selectedModalContent === 'tab1a' && (
    <Tab1a isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab1b' && (
    <Tab1b isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab1c' && (
    <Tab1c isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab1d' && (
    <Tab1d isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
    {selectedModalContent === 'tab1e' && (
    <Tab1e isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {/* Add more components as needed */}
  <span onClick={() => openModal('tab1a')}>Carpenter installing curtains in Dammam 0504353061</span>
  <hr className='lina' />
  <span onClick={() => openModal('tab1b')}>Curtain installation technician in Dammam 0566733794</span>
  <hr className='lina' />
  <span onClick={() => openModal('tab1c')}>Ras Tanura curtain installation 0505121891</span>
  <hr className='lina' />
  <span onClick={() => openModal('tab1d')}>Carpenter installing curtains in Al-Khobar 0505121891</span>
  <hr className="lina" />
  <span onClick={() => openModal('tab1e')}>Installing curtains in Dammam 0505121891</span>
</p>

            </div>
          </div>

          <div className={styles.navItem} tabIndex="4">
          <img src={drop} alt="foldersnap" className="folder" />
            Kitchen installation and maintenance
            <div className={styles.dropdown}>
              <p>
   {selectedModalContent === 'tab2a' && (
    <Tab2a isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2b' && (
    <Tab2b isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2c' && (
    <Tab2c isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2d' && (
    <Tab2d isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2e' && (
    <Tab2e isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2f' && (
    <Tab2f isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab2g' && (
    <Tab2g isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  
            <span onClick={() => openModal('tab2a')}>Aluminium kitchen installation technician, Dammam 0578173739</span>
            <hr />
            <span onClick={() => openModal('tab2b')}>Kitchen maintenance in Dammam 0505121891</span>
            <hr />
            <span onClick={() => openModal('tab2c')}>Kitchen installation company in Al khobar 0578173739</span>
            <hr />
            <span onClick={() => openModal('tab2d')}>Kitchen installation technician in Dammam 0578173739</span>
            <hr />
            <span onClick={() => openModal('tab2e')}>Kitchen installation company in Qatif 0505121891</span>
            <hr />
            <span onClick={() => openModal('tab2f')}>Kitchen maintenance technician in Al-Khobar 0505121891</span>
            <hr />
            <span onClick={() => openModal('tab2g')}>Dismantling and installing kitchens in Al-khobar 0505121891</span>
            </p>
            </div>
          </div>

        
          <div className={styles.navItem} tabIndex="3">
          <img src={drop} alt="foldersnap" className="folder" />
            Dismantling and installing furniture in Dammam
            <div className={styles.dropdown}>
              <p>
              {selectedModalContent === 'tab3a' && (
    <Tab3a isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3b' && (
    <Tab3b isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3c' && (
    <Tab3c isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3d' && (
    <Tab3d isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
    {selectedModalContent === 'tab3e' && (
    <Tab3e isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3f' && (
    <Tab3f isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3g' && (
    <Tab3g isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3h' && (
    <Tab3h isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
  {selectedModalContent === 'tab3i' && (
    <Tab3i isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
    {selectedModalContent === 'tab3j' && (
    <Tab3j isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
    {selectedModalContent === 'tab3k' && (
    <Tab3k isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
    {selectedModalContent === 'tab3l' && (
    <Tab3l isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
                <span onClick={() => openModal('tab3a')}>Carpenter installing IKEA furniture in Dammam 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3b')}>Cheap carpenter in Dammam 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3c')}>Carpenter teacher in Dammam 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3d')}>Carpenter Saihat 056733794</span>
                <hr />
                <span onClick={() => openModal('tab3e')}>Carpenter installing bedrooms in Dammam 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3f')}>Carpenter number in Dammam 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3g')}>IKEA furniture istallation carpenter in Al Khobar 0504353061</span>
                <hr />
                <span onClick={() => openModal('tab3h')}>Dammam carpentry workshop 0566733794</span>
                <hr />
                <span onClick={() => openModal('tab3i')}>Dhahran carpenter 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3j')}>Al Khobar carpenter 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3k')}>Carpenter teacher in Al Khobar 0505121891</span>
                <hr />
                <span onClick={() => openModal('tab3l')}>Carpentry workshop in Al-Khobar 0566733794</span>
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

