"use client";
import React from 'react';
import styles from './JourneyOfHope.module.css';

function JourneyOfHope() {
  const milestones = [
    {
      year: "2008",
      description: "First meals shared, first smiles restored",
      color: "#5EAFFF"
    },
    {
      year: "2012",
      description: "Education programs launched, dreams took flight",
      color: "#3BB4C1"
    },
    {
      year: "2015",
      description: "Healthcare reached villages, lives were saved",
      color: "#FF6600"
    },
    {
      year: "2020",
      description: "Complete community transformation achieved",
      color: "#FF66B2"
    }
  ];

  return (
    <section className={styles.journeyOfHope} id="journey-of-hope">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Our Journey of <span className={styles.highlight}>Hope</span>
            </h2>
            <p className={styles.description}>
              What started in 2008 as a small group of dreamers with big hearts has grown into a movement that touches thousands of lives. We began by simply sharing meals with hungry families, but we quickly realized that true change requires addressing the whole person.
            </p>
            <p className={styles.description}>
              From those humble food distribution drives, we've evolved into a comprehensive support system—a lifeline for families who had nowhere else to turn. Today, we're not just providing services; we're restoring faith in humanity.
            </p>
            <p className={styles.description}>
              Across 25+ communities in Hoskote Taluk, Hasigala Village, Sulibele Hobli, and beyond, we've proven that when compassion meets action, miracles happen. Over 1,000 lives transformed annually, each one a testament to the power of human kindness.
            </p>
            
            <div className={styles.milestonesSection}>
              <h3 className={styles.milestonesTitle}>Milestones of impact</h3>
              <div className={styles.milestonesList}>
                {milestones.map((milestone, index) => (
                  <div key={index} className={styles.milestone}>
                    <div 
                      className={styles.milestoneNumber}
                      style={{ backgroundColor: milestone.color }}
                    >
                      {index + 1}
                    </div>
                    <div className={styles.milestoneText}>
                      {milestone.year}: {milestone.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.imageSection}>
          <div className={styles.mainImage}>
  <img
    src="/images/home/about-us-journeyofhope.png"
    alt="Journey of Hope"
    className={styles.image}
  />
  </div>
</div>
          </div>
        </div>
    </section>
  );
}

export default JourneyOfHope;
