import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const tab1b = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        {content}
        <p>
            <h2>The cheapest technician to install curtains in Dammam</h2>
            <b>The Dammam curtain installation technician</b> has very axtensive expirience in installing curtains for more than 8years.His skill and expirience are not limited to <b>Umm Al-Sahik</b> only installs curtains but he is also a <b>proffessional curtain detailing technician, Ras Tanura carpenter Haraj</b> is a proffesional as well as <b>IKEA Dammam furniture installation technician</b> very skilled at installing in Dammam, providing you with the highest quality <b>installing curtains in Saftwa,</b> and he is also the best <b>IKEA bed installer,</b> I recomend Everyone deals with him, he is the best.
        </p>
      </div>
    </div>
  );
};

export default tab1b;
