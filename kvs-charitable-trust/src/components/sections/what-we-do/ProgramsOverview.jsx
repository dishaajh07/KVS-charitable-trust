
"use client"
import React from 'react';
import styles from './ProgramsOverview.module.css';

function ProgramsOverview() {
  return (
    <section className={styles.programsOverview}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <svg className={styles.icon} width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M9.94889 12.3647V11.198C9.94889 10.5792 9.70306 9.98569 9.26548 9.5481C8.82789 9.11052 8.2344 8.86469 7.61556 8.86469H4.11556C3.49672 8.86469 2.90323 9.11052 2.46564 9.5481C2.02806 9.98569 1.78223 10.5792 1.78223 11.198V12.3647" stroke="#FF6600" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.94824 1.93939C10.4486 2.06911 10.8917 2.3613 11.2081 2.7701C11.5244 3.17889 11.696 3.68116 11.696 4.19806C11.696 4.71496 11.5244 5.21722 11.2081 5.62602C10.8917 6.03482 10.4486 6.32701 9.94824 6.45672" stroke="#FF6600" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.4482 12.3648V11.1981C13.4479 10.6811 13.2758 10.1789 12.959 9.7703C12.6423 9.3617 12.1988 9.06986 11.6982 8.94061" stroke="#FF6600" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.86556 6.53135C7.15422 6.53135 8.19889 5.48668 8.19889 4.19802C8.19889 2.90935 7.15422 1.86469 5.86556 1.86469C4.5769 1.86469 3.53223 2.90935 3.53223 4.19802C3.53223 5.48668 4.5769 6.53135 5.86556 6.53135Z" stroke="#FF6600" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Five Pillars of Support</span>
        </div>
        <h2 className={styles.title}>
          Comprehensive <span className={styles.highlight}>Community Development</span>
        </h2>
        <p className={styles.description}>
          Our holistic approach addresses all essential needs through five interconnected programs, creating sustainable pathways from poverty to prosperity for rural families.
        </p>
      </div>
    </section>
  );
}

export default ProgramsOverview;
