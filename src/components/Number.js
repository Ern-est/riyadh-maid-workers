
import React from 'react';
import styles from '../Pages/YourStyles.module.css'; // Replace with the correct path

const Number = ({ isOpen, onClose, content }) => {
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
            <span className={styles.pan}>Call us on:</span>
        <span className={styles.num}>0505718578</span>
        </p>
      </div>
    </div>
  );
};

export default Number;
