import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab3c = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter teacher in Dammam</h2>
            <b>A carpenter teacher to disassemble and install furniture in Dammam</b> One of the best <b>carpenters who install furniture</b> whom we can rely on to install IKEA furniture. He is the best <b>carpenter to install IKEA bedrooms in Dammam, the best carpenter to install wardrobes in Dammam, the best carpenter to install IKEA items in Dammam.</b> His expirience in installing IKEA furniture is more than 10 years fo this. It gives you a very high quality <b>assembly of IKEA furniture,</b> do not hesitate and call me <b>carpenter for installation and dismantling of IKEA furniture</b> Now the best carpenter to install and dismantle furniture in Dammam 
        </p>
      </div>
    </div>
  );
};

export default Tab3c;
