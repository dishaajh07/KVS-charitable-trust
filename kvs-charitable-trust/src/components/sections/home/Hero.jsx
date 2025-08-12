"use client";
import React from "react";
import styles from "./Hero.module.css";
import GradientButton from "../../elements/GradientButton";

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Hero Section">
      {/* Background video */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="./images/image.png" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true"></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          A Gentle Hand Can Change A Life <br />
          <span className={styles.highlight}>Forever</span>
        </h1>
        <p className={styles.subtitle}>
          Your kindness becomes a lifeline—nourishing bodies, nurturing minds,
          and restoring dignity.
        </p>

        {/* Buttons */}
        <div className={styles.buttons}>
        <GradientButton text="Donate now" icon="❤️" />

          <a
            href="/contact"
            className={styles.outlinedButton}
            aria-label="Contact us"
          >
            Learn Our Story →
          </a>
        </div>
      </div>

      {/* Wave shape */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,260 L60,240 C120,220,240,180,360,190 C480,200,600,240,720,230 C840,220,960,180,1080,200 C1200,220,1320,260,1380,250 L1440,240 V320 H0 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
