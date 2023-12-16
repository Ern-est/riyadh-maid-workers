import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3h = ({ isOpen, onClose, content }) => {
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
            <h2>Dammam carpentry workshop</h2>
            <b>Dammam Carpentry Workshop</b> is among the approved workshops that provided many services to customers and which has more that <b>expirienced carpenters in Al-Khobar Al Awael Carpentry in Dammam </b>is considered one of the carpentry shops that are keen to provide all customer requirements. All you have to do is search for <b>Dammam Carpnetry Haraj </b>And <b>Wooden Doors Detailing Shop in Dammam</b> will visit the place and get to know the client's requirements from detailing bedrooms in Dammam and other works. Also, the prices of <b>the best carpenter in Dammam</b> are considered suitable for all clients in Dammam and cities in which services are provided.
        </p>
      </div>
    </div>
  );
};

export default Tab3h;
