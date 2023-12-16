import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2c = ({ isOpen, onClose, content }) => {
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
            <h2>KITCHEN INSTALLATION COMPANY IN AL-KHOBAR 0578173739</h2>
            <h3>Kitchen maintenance in Al Khobar</h3>
            <b>Kitchen maintenance in Al-Khobar</b> is offered by the best <b>Kitchen installation company in Al-Khobar,</b> because of its long history in this proffession. And this talent is a gift from God Almighty. There are many people who from time to time want to maintain their kitchens and sometimes change their appearance and some modifications to them, but this matter requires skilled hands that work with credibility and sincerity, like those who work for us in <b>Kitchen Maintenance Company in Al-Khobar</b>
        </p>
      </div>
    </div>
  );
};

export default Tab2c;
