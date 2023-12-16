import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3l = ({ isOpen, onClose, content }) => {
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
            <h2>Carpentry workshop in Al-Khobar</h2>
            <b>A carpentry workshop in Al-Khobar</b> is among the workshops that have gained the trust of many customers today, as it provides a service <b>Kitchen detailing in Al-Khobar.</b> Today, there are many <b>berdroom shops i Dammam and khobar </b>that provide services that are indispensable for everyone related to csrpentry, for those looking for Detailing bedrooms in Al-Khobar. He has to search for the best <b>wood carpentry in Al-Khobar</b> and it also provides you with services.It is accessible to all groups in Al-Khobar and Saudi Arabia. <b>Detailing bedrooms in Al-Khobar </b>and many other distinguished services, as well as prices. <b>Detailing wooden kitchens in Al-Khobar</b>
        </p>
      </div>
    </div>
  );
};

export default Tab3l;
