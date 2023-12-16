import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2a = ({ isOpen, onClose, content }) => {
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
          <h2>Aluminium kitchen installation technician, Dammam</h2>
          One of the best services provided by <b>kitchen installation shops in Dammam </b>Al-Jawhara, Al-Zuhur, Al-Souq, Al-Dana, Al-Jawalwaiyah, Al-Tubaishi and Al-Anoud neighbourhoods is a business <b>Complete maintenance for all aluminium kitchens, and instalation of kitchens in Dammam, and </b> cutting of the kitchen cupboard, as the customer may need to move his belongings from his old home to his new home. He may find that the kitchen space of his new home is small, so he needs to cut the kitchen installation stores in Dammam provide this service, and the customer will not find any difficulty in this Command
        </p>
      </div>
    </div>
  );
};

export default Tab2a;
