import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3d = ({ isOpen, onClose, content }) => {
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
            <h2>Saihat carpenter</h2>
            <b>The Saihat carpenter</b> is the carpenter who can dismnantle and install all IKEA furniture pieces, whether they are new furniture after the purchase or used furniture, and for this you can use services <b>IKEA Furniture Installation Company in Saihat</b> which provides you with excellent technicians and skilled workers in dealing with IKEA furniture, whether it is cupboards, doors, kitchens, bedrooms, and other pieces of furniture
        </p>
      </div>
    </div>
  );
};

export default Tab3d;
