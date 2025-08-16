import React from 'react';
import styles from './Programs.module.css';

const Programs = ({
  programTitle,
  programDescription,
  studentsEnrolled,
  totalReached,
  schoolsSupported,
  keyAchievements = [],
  supportLink,
  imageUrl
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Program image" className={styles.image} />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{programTitle}</h2>
        <p className={styles.description}>{programDescription}</p>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <p className={styles.statLabel}>Students Enrolled</p>
            <p className={styles.statValue}>{studentsEnrolled}</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statLabel}>Total Reached</p>
            <p className={styles.statValue}>{totalReached}</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statLabel}>Schools Supported</p>
            <p className={styles.statValue}>{schoolsSupported}</p>
          </div>
        </div>
        <div className={styles.keyAchievements}>
          <h3>Key Achievements</h3>
          <ul>
            {keyAchievements.length > 0 ? (
              keyAchievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))
            ) : (
              <li>No achievements listed</li>
            )}
          </ul>
        </div>
        <div className={styles.footer}>
          <a href={supportLink} className={styles.supportButton}>
            Support this program
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
