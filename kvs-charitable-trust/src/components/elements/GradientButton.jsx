"use client"
import React from 'react';
import Link from "next/link";
import styles from './GradientButton.module.css';

const GradientButton = ({ text, onClick, icon = null }) => {
  return (
    <Link href="/get-involved/#donate-tab" className={styles.button} onClick={onClick}>
      {text} {icon && <span className={styles.icon}>{icon}</span>}
    </Link>
  );
};

export default GradientButton;
