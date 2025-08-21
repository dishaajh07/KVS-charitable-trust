"use client"
import React from 'react';
import styles from './QuickAnswer.module.css';

function QuickAnswer() {
  return (
    <section className={styles.quickAnswer}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Quick Answer</h2>
          <p className={styles.subtitle}>
            Looking for immediate answers? Check out our frequently asked questions.
          </p>
        </div>
        
        <div className={styles.faqCards}>
          <div className={styles.faqCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>🤝</span>
            </div>
            <h4 className={styles.questionTitle}>How can I volunteer?</h4>
            <p className={styles.answer}>
              Visit our Get Involved page or call us directly to learn about current volunteer opportunities.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>💝</span>
            </div>
            <h4 className={styles.questionTitle}>Where do donations go?</h4>
            <p className={styles.answer}>
              All donations directly support our programs in nutrition, education, healthcare, shelter, and clothing.
            </p>
          </div>

          <div className={styles.faqCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>📜</span>
            </div>
            <h4 className={styles.questionTitle}>Do you provide certificates?</h4>
            <p className={styles.answer}>
              Yes, we provide donation receipts and volunteer certificates for your contributions.
            </p>
          </div>
        </div>

        <div className={styles.actionContainer}>
          <button className={styles.viewAllButton}>
            View All FAQs
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuickAnswer;
