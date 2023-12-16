import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab1e = ({ isOpen, onClose, content }) => {
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
            <h2>Installing curtains in Dammam</h2>
            Our valued client, <b>IKEA khobar Furniture Installation Company</b> provides you with a package of the most wonderful business services <b>Furniture dismantling, installing and maintenance IKEA,</b> today we present to you <b>the best carpenter in Dammam</b> who can <b>install IKEA items in Dammam</b> at a cheap price and high quality <b>assembling IKEA items</b> can provide you with the service. <b>The best carpenter in Dammam,</b> make sure it is <b>carpenters numbers in Dammam</b> distinguished from thousands <b>Khobar carpentry number, </b>so do not search too much and call <b>maintain and modify IKEA items</b> with unparalleld quality, it can also
        </p>
      </div>
    </div>
  );
};

export default Tab1e;
