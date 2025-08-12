import React from 'react';
import styles from './GradientButton.module.css';

const GradientButton = ({ text, onClick, icon = null }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text} {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default GradientButton;
