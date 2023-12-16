import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2d = ({ isOpen, onClose, content }) => {
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
        <h2>KITCHEN INSTALLATION TECHNICIAN IN DAMMAM 0578173739</h2>
        <h3>Kitchen maintenance in Dammam</h3>
        with great expirience and unique hands that provide the service, working with unprecedented proffessionalism and mastery, until it became the first in the world of maintenance and repair of kitchens in Dammam by a  <b>kitchen repair technician in Dammam</b> Proffessional.
      </div>
    </div>
  );
};

export default Tab2d;
