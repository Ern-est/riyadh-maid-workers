import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2e = ({ isOpen, onClose, content }) => {
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
            <h2>Kitchen installation company in Qatif</h2>
            Kitchen installation company in Qatif, because of its long history and great expirience in this field, as none of us are able to carry out these actions on our own, without the need for a tech can to dismantle and install kitchens in Qatif, he is the best help in this task with the utmost precession and excellence
        </p>
      </div>
    </div>
  );
};

export default Tab2e;
