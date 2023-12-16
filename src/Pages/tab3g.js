import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3g = ({ isOpen, onClose, content }) => {
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
            <h2>Dismantling and installing IKEA furniture in Al-Khobar - 0504353061</h2>
            There is no person in the world who does not wish to have a high-quality service. If we need <b>dismantling and installing furniture in Al-Khobar,</b> we will get high quality at <b>Dismantling and installing in Al-Khobar company</b> With the best <b>Dismantling and installing IKEA furniture in Al-Khobar dismantling and installing kitchens and curtains, </b>it has the best <b>furniture dissasembly and installation workers. With the news </b>that's why you can <b>dissassemble and install items </b>with very high quality.
        </p>
      </div>
    </div>
  );
};

export default Tab3g;
