import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2f = ({ isOpen, onClose, content }) => {
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
            <h2>Maintenance Technician Kitchens In Khobar</h2>
            The process of maintaining kitchens is among the things that require experts and specialists in the field of <b>dismantling and installing a kitchen in Dammam</b> Al-Jawhara, Al-Zuhur, Al-Souq, Al-Dana, Al-Jalawiyah, Al-Tubaishi and Al-Anoud neighbourhoods, and it is considered <b>Technician for dismantling and installing kitchens in Dammam.</b> Among the specialists in the field of <b>installing kitchen cupboards in Dammam </b>and obtaining In the end, you will get the best results, as a carpenter guarantees the installation of kitchens in Dammam. You can design kitchens with different meterials and designs according to your desire. He also has Kitchen installation technician in Dammam A collection of photos of previous works so that customers can choose them 
        </p>
      </div>
    </div>
  );
};

export default Tab2f;
