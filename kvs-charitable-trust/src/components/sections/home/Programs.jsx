"use client"
import React from 'react';
import styles from './Programs.module.css';

const Programs = () => {
  const programs = [
    {
      title: "Quality Education",
      subtitle: "Building Bright Futures",
      stat: "500+ Children educated",
      image: "/images/image.png",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Accessible Healthcare",
      subtitle: "Ensuring Healthy Communities",
      stat: "50+ Medical camps",
      image: "/images/image.png",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Nutritional and Food",
      subtitle: "Nourishing Growing Bodies",
      stat: "1000+ Meals daily",
      image: "/images/image.png",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      )
    }
  ];

  const additionalPrograms = [
    {
      title: "Safe Shelter",
      subtitle: "Building Better Futures",
      stat: "15+ Projects completed",
      image: "/images/image.png",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Clothing Dignity",
      subtitle: "Clothing and Dignity Programs",
      stat: "15+ Projects completed",
      image: "/images/image.png",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Our Core Impact </span>
            <span className={styles.titleAccent}>Programs</span>
          </h2>
          <p className={styles.subtitle}>
            We focus on six key areas that create comprehensive, lasting impact in rural communities. Each program is designed to address root causes and build sustainable solutions.
          </p>
        </div>

        <div className={styles.programsGrid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.programCard}>
              <div className={styles.programImage} style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 13.59%, rgba(15, 10, 48, 0.00) 71.05%, rgba(0, 0, 0, 0.64) 100.03%), url('${program.image}')`}}>
                <div className={styles.programHeader}>
                  <div className={styles.programIcon}>
                    {program.icon}
                  </div>
                  <div className={styles.programStat}>
                    <span>{program.stat}</span>
                  </div>
                </div>
                <div className={styles.programContent}>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <p className={styles.programSubtitle}>{program.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalPrograms}>
          {additionalPrograms.map((program, index) => (
            <div key={index} className={styles.additionalCard}>
              <div className={styles.programImage} style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 13.59%, rgba(15, 10, 48, 0.00) 71.05%, rgba(0, 0, 0, 0.64) 100.03%), url('${program.image}')`}}>
                <div className={styles.programHeader}>
                  <div className={styles.programIcon}>
                    {program.icon}
                  </div>
                  <div className={styles.programStat}>
                    <span>{program.stat}</span>
                  </div>
                </div>
                <div className={styles.programContent}>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <p className={styles.programSubtitle}>{program.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h3 className={styles.ctaTitle}>Ready to make a difference?</h3>
          <p className={styles.ctaSubtitle}>
            Join us in creating lasting impact across all our focus areas. Your support helps us expand our reach and deepen our impact.
          </p>
          <div className={styles.ctaActions}>
            <a href="#donate" className={styles.donateBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Donate Now</span>
            </a>
            <a href="#work" className={styles.workBtn}>
              Learn about our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
