import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2b = ({ isOpen, onClose, content }) => {
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
            <h2>Kitchen maintenance in Dammam</h2>
            <b>Kitchen maintenance</b> In Dammam, Al-Jawhara, Al-Zuhur, Al-Souq, Al-Dana, Al-Jalwiyya, Al-Tubaishi and Al-Anoud neighbourhoods are among the best important things a housewife must take care of, as there are many malfunctions and problems that she faces while working in the kitchen, Which causes obstruction to alot of work, and there are fractures and openings that can occur over time that can be a refuge for many harmful insects, so it is necessary to use the best <b>maintenance company Kitchens</b> can provide distinguished services to its customers.
        </p>
      </div>
    </div>
  );
};

export default Tab2b;
