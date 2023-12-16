import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3a = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter installing IKEA furniture in Dammam</h2>
            <b>A carpenter installing IKEA furniture in Dammam</b> one of the strongest <b>Dammam companies for installing IKEA furniture.</b> They have the most skilled IKEA furniture installation workers can <b>install IKEA curtains</b> professionally. Not only that, but they can install an IKEA TV table. They also <b>install an IKEA wardrobe</b> also <b>Dismantling and installing an IKEA wardrobe </b> also <b>Dismantling and installing rooms</b> That is with  a Dammam furniture installation carpenter <b>you will not need other carpenters at all, so hurry up and contact them now</b>
        </p>
      </div>
    </div>
  );
};

export default Tab3a;
