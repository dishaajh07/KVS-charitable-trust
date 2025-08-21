"use client"
import React from 'react';
import styles from './HowToReachUs.module.css';

function HowToReachUs() {
  return (
    <section className={styles.howToReachUs}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>How to reach us</h2>
          <p className={styles.subtitle}>
            Multiple ways to connect with our team. Choose the method that works best for you.
          </p>
        </div>
        
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.iconSection}>
              <span className={styles.icon}>📍</span>
              <h3 className={styles.cardTitle}>Our Location</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                Hoskote Taluk, Hasigala Village Sulibele Hobli, Bangalore Rural District Karnataka, India
              </p>
              <button className={styles.actionButton}>Get Directions</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconSection}>
              <span className={styles.icon}>📞</span>
              <h3 className={styles.cardTitle}>Call Us</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contactInfo}>
                <p className={styles.cardText}>+91 8867 148 889</p>
                <p className={styles.cardText}>+91 9876 543 210</p>
              </div>
              <button className={styles.actionButton}>Call Now</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconSection}>
              <span className={styles.icon}>📧</span>
              <h3 className={styles.cardTitle}>Email Us</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contactInfo}>
                <p className={styles.cardText}>info@kvstrust.org</p>
                <p className={styles.cardText}>volunteer@kvstrust.org</p>
                <p className={styles.cardText}>donations@kvstrust.org</p>
              </div>
              <button className={styles.actionButton}>Send Email</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconSection}>
              <span className={styles.icon}>⏰</span>
              <h3 className={styles.cardTitle}>Office Hours</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contactInfo}>
                <p className={styles.cardText}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className={styles.cardText}>Saturday: 10:00 AM - 4:00 PM</p>
                <p className={styles.cardText}>Sunday: Closed</p>
              </div>
              <button className={styles.actionButton}>Visit Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToReachUs;
