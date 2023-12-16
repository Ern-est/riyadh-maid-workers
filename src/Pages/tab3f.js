import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3f = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter number in Dammam</h2>
            If you want to design bedrooms or other wooden items in Dammam, you must rely on the best carpentry in Dammam, which provides you with more than one carpenter's number in Dammam, as well as more than one other way to communicate with him. For example, Carpenter in Dammam provides Instagram so you can communicate with the carpenter and tell him all the details you want. For your design, without wasting time going to it, the carpentry also provides you with many other services such as the service of dismantling and installing IKEA furniture in Dammam, as well as the service of dismantling and installing kitchens in Dammam of various types and brands of kitchens, as well as providing a wooden kitchen design service for those who want to have a wooden kitchen
        </p>
      </div>
    </div>
  );
};

export default Tab3f;
