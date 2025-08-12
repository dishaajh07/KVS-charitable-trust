import React from 'react';
import styles from './Milestones.module.css';

const Milestones = () => {
  const milestones = [
    { number: "1,000+", label: "Children Supported", emoji: "👶", bg: "#fee2e2" },
    { number: "50+", label: "Blood Donation Camps", emoji: "🩸", bg: "#f3e8ff" },
    { number: "30+", label: "Eye Camps", emoji: "👁️", bg: "#ccfbf1" },
    { number: "1,000+", label: "Children Supported", emoji: "✨", bg: "#fef3c7" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Milestones of </span>
            <span className={styles.titleAccent}>Hope</span>
          </h2>
          <p className={styles.subtitle}>
            Over the years, our journey has created ripples of real transformation across rural Bangalore communities.
          </p>
        </div>

        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={styles.milestoneCard}
              style={{ backgroundColor: milestone.bg }}
            >
              <span className={styles.emoji}>{milestone.emoji}</span>
              <span className={styles.number}>{milestone.number}</span>
              <span className={styles.label}>{milestone.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.action}>
          <a href="#donate" className={styles.donateBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Donate Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
