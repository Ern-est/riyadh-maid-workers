import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab1d = ({ isOpen, onClose, content }) => {
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
            <h2>Carpenter installing curtains in Al-Khobar</h2>
            IKEA furniture is considered one of the distinctive types of furniture, which many of us strive to acquire due to the any advantages it provides, and by dealing with a <b>bedroom installation technician.</b> You will be able to carry out the work of moving berdrooms from room to room as it provides the best carpenter in Dammam. The ability to move IKEA furniture and other types from one place to another without being scratched.
        </p>
        <p>
            The advantage <b>of dismantling the bedromm with transportation</b> is also one of the advantage provided by a technician <b>IKEA furniture installation</b> and many other works without being exposed to the amny problemsof disassembly and installation. <b>the installation of curtains in Dammam</b> provides all guarantees to the customer. Through which it ensures, which guarantees transportation without exposing the furniture to any significant problem, and  the Dammam Bedroom Installation Company
        </p>
      </div>
    </div>
  );
};

export default Tab1d;
