import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3b = ({ isOpen, onClose, content }) => {
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
          <h2>Cheap carpenter in Dammam</h2>
          Through Dammam furniture dismantling and installation workers, we can obtain IKEA furniture installation in Al-Khobar, in addition to the availability of the best cheap carpenter in Dammam at the lowest cost and price who works for the IKEA bedroom installation company in Dammam, and provides multiple services to all citizens, and through a carpentry in Dammam we can obtain the best detailing. Wooden doors in Dammam are distinctive and unique suitable for many places, in addition to furniture installation workers in Dammam at the lowest prices compared to all of our competitors. They have long expirience that allows them to provide all services 
        </p>
      </div>
    </div>
  );
};

export default Tab3b;
