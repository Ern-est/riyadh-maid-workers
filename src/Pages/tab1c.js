import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab1c = ({ isOpen, onClose, content }) => {
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
            <h2>Installing IKEA Ras Tanura curtains</h2>
            <b>Proffessional curtain installation technician</b> As Tanura is a proffesssional technician <b>in installing curtains</b> distinguished in installation i=4 IKEA furniture, has unparalleled expirience <b>assembling IKEA items</b>professional <b>By installing IKEA tables in Al-Thaqbah, Al-Khobar</b> It also gives the customer the highest quality. <b>Installing curtains</b> Al-Jisr district in Al-Khobar, whether installing for homes and apartments, it is the best in all parts of Dammam. <b>Office curtains, installing bedroom curtains in the Golden Belt in Al-Khobar, installing curtains</b>
        </p>
      </div>
    </div>
  );
};

export default Tab1c;
