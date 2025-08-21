
"use client"
import React from 'react';
import styles from './SupportPrograms.module.css';

function SupportPrograms() {
  return (
    <section className={styles.supportPrograms}>
      <div className={styles.container}>
        <h2 className={styles.title}>Support Our Programs</h2>
        <p className={styles.description}>
          Your support enables comprehensive community development. When you contribute to KVS Trust, you're not just funding a single program—you're building entire communities and creating lasting change.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M13.8538 10.8128C14.9403 9.74824 16.0413 8.4722 16.0413 6.80241C16.0413 5.73878 15.6188 4.71872 14.8667 3.96662C14.1146 3.21452 13.0946 2.79199 12.0309 2.79199C10.7476 2.79199 9.84342 3.15658 8.74967 4.25033C7.65592 3.15658 6.75176 2.79199 5.46842 2.79199C4.4048 2.79199 3.38473 3.21452 2.63263 3.96662C1.88053 4.71872 1.45801 5.73878 1.45801 6.80241C1.45801 8.47949 2.55176 9.75553 3.64551 10.8128L8.74967 15.917L13.8538 10.8128Z" stroke="#004080" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Fund comprehensive support
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M4.14551 9.35449H14.3538" stroke="#004080" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.25 4.25049L14.3542 9.35466L9.25 14.4588" stroke="#004080" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.secondaryButton}>
            Explore all programs
          </button>
        </div>
      </div>
    </section>
  );
}

export default SupportPrograms;
