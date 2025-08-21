"use client"
import React from 'react';
import styles from './SpecialInitiatives.module.css';

function SpecialInitiatives() {
  const initiatives = [
    {
      id: 1,
      title: 'Life-saving blood donation drives',
      description: 'Regular blood donation camps addressing critical healthcare needs in underserved rural areas where every drop counts.',
      stats: '60+ camps',
      color: '#1E40AF'
    },
    {
      id: 2,
      title: 'Vision restoration eye care camps',
      description: 'Free comprehensive eye examinations and treatments bringing the gift of sight to elderly and underprivileged communities.',
      stats: '40+ camps',
      color: '#0891B2'
    },
    {
      id: 3,
      title: 'Women empowerment workshops',
      description: 'Transformative skill development and awareness programs empowering rural women to become leaders in their communities.',
      stats: '150+ workshops',
      color: '#CA8A04'
    },
    {
      id: 4,
      title: 'Environmental conservation programs',
      description: 'Tree plantation and environmental awareness initiatives creating a greener, healthier future for coming generations.',
      stats: '5,000+ trees planted',
      color: '#16A34A'
    }
  ];

  return (
    <section className={styles.specialInitiatives}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Special Initiatives</h2>
          <p className={styles.subtitle}>
            Beyond our core programs, we run targeted initiatives that address specific community needs and create awareness about critical issues affecting rural families.
          </p>
        </div>
        
        <div className={styles.initiativesGrid}>
          {initiatives.map((initiative) => (
            <div key={initiative.id} className={styles.initiativeCard}>
              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconContainer}
                  style={{ backgroundColor: initiative.color }}
                >
                  <div className={styles.iconCircle} style={{ backgroundColor: initiative.color }}>
                    <span className={styles.iconNumber}>{initiative.id}</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{initiative.title}</h3>
              </div>
              
              <p className={styles.cardDescription}>{initiative.description}</p>
              
              <div className={styles.statsContainer}>
                <div className={styles.statsBadge} style={{ backgroundColor: `${initiative.color}15`, color: initiative.color }}>
                  {initiative.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialInitiatives;
