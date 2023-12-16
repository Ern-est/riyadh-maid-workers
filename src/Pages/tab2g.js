import React from 'react';
import styles from './YourStyles.module.css'; // Replace with the correct path

const Tab2g = ({ isOpen, onClose, content }) => {
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
            <h2>DISSMANTLING AND INSTALLING KITCHENS IN AL-KHOBAR 0505121891</h2>
            <b>Kitchen Cupboard Maintenance Company Dammam</b> is always keen to provide many advantages to customers, the most important of which are the following;
            <ol>
                <li>All workers in the field <b>Kitchen drawer maintenance in Dammam</b> available to the Company have been trained to the highest level</li>
                <li>The employees of the <b>kitchen installation compaany in Dammam</b> also carry out a distinguished group of works including <b>dismantling and installing kitchens in Dammam</b> at the highest level</li>
                <li>Also, the prices provided by the <b>kitchen maintenance company in Dammam </b>are considered the best, and the <b>company always does installing a kitchen cabinet in Dammam</b> by providing discounts and offers on the value of services so that everyone can deal with them</li>
            </ol>
        </p>
      </div>
    </div>
  );
};

export default Tab2g;
