import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3i = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter installing IKEA rooms in Dhahran</h2>
            Our valued client, if you want <b>a carpenter to install wooden shelves inside the aluminium cupboard in Dhahran</b> don't search too much, just one call from you on <b>Dhahran wood stores</b> You will enjoy the best Dhahran furniture installation carpenter <b>By installing wooden shelves inside the alumnium cupboard</b> proffessionally, this also provides you with maintenance for the entire furniture at the lowest cost
        </p>
      </div>
    </div>
  );
};

export default Tab3i;
