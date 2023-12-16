import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3e = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter installing bedrooms in Dammam - 0504353061</h2>
            <b>IKEA bedroom installation carpenter in Dammam</b> is considered one of the specialists in dealing with IKEA furniture specifically, as he provides A carpenter installing cupboards in Dammam, a wide range of services to customers within Medina and its surrounding areas. If you need to communicate with a carpenter, installing IKEA furniture in Dammam. All you have to do is search for the name on the Internet, or by asking others about it, and by communicating with <b>bedroom installation workers in Dammam</b>You will be able to complete work immediately with the ability to move furniture from one room to another
        </p>
      </div>
    </div>
  );
};

export default Tab3e;
