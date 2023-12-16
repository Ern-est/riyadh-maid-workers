import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3j = ({ isOpen, onClose, content }) => {
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
            <h2>Bedroom installation technician in Al Khobar</h2>
            What is unique about the group <b>wood dissassembly and assembly shops in Al Khobar</b> which is affiliated <b>to the IKEA Dammam furniture installation company</b>is that it installs new and old bedrooms for everyone, and also clients <b>dismantle and move rooms Sleep</b> with high quality, we also provide <b>maintenance service for old</b> bedrooms, all of this at the lowest cost because we <b>The best bedroom installation company in Al Khobar,</b> contact us now and enjoy the service
        </p>
      </div>
    </div>
  );
};

export default Tab3j;
