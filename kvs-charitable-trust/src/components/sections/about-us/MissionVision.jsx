"use client";
import React from 'react';
import styles from './MissionVision.module.css';

function MissionVision() {
  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.missionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>🎯</div>
            </div>
            <h2 className={styles.cardTitle}>Our mission</h2>
            <p className={styles.cardDescription}>
              To be the beacon of hope for underprivileged families in rural Bangalore, providing not just essential services like nutrition, education, healthcare, shelter, and clothing—but dignity, opportunity, and the chance for every person to write their own success story.
            </p>
            <div className={styles.features}>
              <h3 className={styles.featuresTitle}>How we create lasting change:</h3>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  Comprehensive nutrition programs ensuring no child goes hungry
                </li>
                <li className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  Quality education that opens doors to brighter futures
                </li>
                <li className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  Accessible healthcare bringing wellness to every doorstep
                </li>
                <li className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  Safe shelter providing security and peace of mind
                </li>
                <li className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  Essential clothing ensuring dignity in every season
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>🌟</div>
            </div>
            <h2 className={styles.cardTitle}>Our vision</h2>
            <p className={styles.cardDescription}>
              A world where every child can dream without limits, every family has access to life's essentials, and no one is left behind because of circumstances beyond their control. We envision thriving rural communities where opportunity flows as freely as hope.
            </p>
            <div className={styles.visionFeatures}>
              <h3 className={styles.visionFeaturesTitle}>The future we're building together:</h3>
              <ul className={styles.visionFeaturesList}>
                <li className={styles.visionFeature}>
                  <span className={styles.visionBullet}>✨</span>
                  Self-sufficient communities that thrive independently
                </li>
                <li className={styles.visionFeature}>
                  <span className={styles.visionBullet}>✨</span>
                  Universal access to quality education for every child
                </li>
                <li className={styles.visionFeature}>
                  <span className={styles.visionBullet}>✨</span>
                  Healthcare as a right, not a privilege
                </li>
                <li className={styles.visionFeature}>
                  <span className={styles.visionBullet}>✨</span>
                  Sustainable livelihoods that break poverty cycles
                </li>
                <li className={styles.visionFeature}>
                  <span className={styles.visionBullet}>✨</span>
                  Empowered families writing their own success stories
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
