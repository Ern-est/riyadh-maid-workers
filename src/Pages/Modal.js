import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Modal = ({ isOpen, onClose, content }) => {
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
        Certainly! You can modify the Modal.jsx component to cover 80% of the page and display as a responsive card. Here's an updated version:


      </div>
    </div>
  );
};

export default Modal;
