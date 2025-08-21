"use client"
import React from 'react';
import styles from './Impact.module.css';

function Impact() {
  const impactVideos = [
    {
      title: 'Education Program',
      video: '/images/hero-video.mp4'
    },
    {
      title: 'Healthcare Initiative',
      video: '/images/hero-video.mp4'
    },
    {
      title: 'Nutrition Support',
      video: '/images/hero-video.mp4'
    },
    {
      title: 'Shelter Development',
      video: '/images/hero-video.mp4'
    },
    {
      title: 'Community Empowerment',
      video: '/images/hero-video.mp4'
    },
  ];

  return (
    <section className={styles.areasOfImpact}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Areas of Impact</h2>
          <p className={styles.subtitle}>
            Every program we implement addresses critical needs in rural communities, creating a comprehensive support system that transforms lives from multiple angles.
          </p>
        </div>

        <div className={styles.reelsContainer}>
          <div className={styles.reelsTrack}>
            {[...impactVideos, ...impactVideos].map((reel, index) => (
              <div key={index} className={styles.reelCard}>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.reelVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={reel.video} type="video/mp4" />

                    <img src='/images/image.png' alt={reel.title} className={styles.fallbackImage} />
                  </video>
                  <div className={styles.reelOverlay}>
                    <div className={styles.playIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.reelTitle}>{reel.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.gradientOverlay}></div>
    </section>
  );
}

export default Impact;
