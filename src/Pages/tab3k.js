import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3k = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter teacher in Al Khobar</h2>
            The work <b>Dismantling and assembling IKEA items in Al-Khobar</b> is considered among the distinctive works carried out by a carpenter teacher in Al-Khobar, especially since IKEA furniture is considered among the distinctive types of furniture. It is necessary to deal with a new bedroom installation company which has distinguished technical workers in addition to having more than one carpenter to install curtains. Al-Khobar is familiar with all the work related to dissassembly, installation, and other works. All you have to do is search for the best <b>IKEA furniture installation company in Al-Khobar a carpenter to dissasemble and install bedrooms in Al-Khobar</b> will complete all the work immediately.
        </p>
      </div>
    </div>
  );
};

export default Tab3k;
