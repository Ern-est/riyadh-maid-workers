
import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const tab1a = ({ isOpen, onClose, content }) => {
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
        <h2>Carpenter installing curtains in Dammam - 050435061</h2>
        <b>Curtain installation company in Dammam</b> One of the best companies that you deal with in the business of <b>Curtain installation in Dammam,</b> It is keen to provide more than <b>IKEA bedroom installation technicians in Dammam</b> who have extensive experience in the work of installing, disassembling, and repairing home furniture, and provides <b>Carpenter installing curtains in Dammam</b> All the work that customers need at reasonable prices, and given the availability of more than <b>carpenters installing curtains in Dammam,</b> you will be able to easily choose between them based on the services they provide <b>Carpenter installing bedrooms in Dammam</b> For you.
      </p>
      </div>
    </div>
  );
};

export default tab1a;
