"use client"
import React from 'react';
import styles from './QuoteBlock.module.css';

const QuoteBlock = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <svg className={styles.quotes} viewBox="0 0 53 42" fill="var(--secondary-color)">
              <path d="M22.5108 4.53976L12.5418 23.674L7.55718 24.9603C8.09319 23.7812 8.73634 22.8164 9.4867 22.066C10.3443 21.3157 11.309 20.9404 12.3809 20.9404C14.632 20.9404 16.6687 21.8516 18.491 23.674C20.4205 25.4962 21.3852 27.8545 21.3852 30.7488C21.3852 33.643 20.3133 36.2156 18.1694 38.4668C16.1328 40.6106 13.6673 41.6826 10.773 41.6826C7.87879 41.6826 5.35972 40.6106 3.21583 38.4668C1.07194 36.3228 0 33.7502 0 30.7488C0 29.4625 0.267985 28.0153 0.803956 26.4074C1.33993 24.6923 2.25108 22.5484 3.53741 19.9758L14.3104 0.0375977L22.5108 4.53976ZM52.0965 4.53976L42.1274 23.674L37.1428 24.9603C37.6788 23.7812 38.322 22.8164 39.0723 22.066C39.9299 21.3157 40.8946 20.9404 41.9665 20.9404C44.2177 20.9404 46.2543 21.8516 48.0766 23.674C50.0062 25.4962 50.9709 27.8545 50.9709 30.7488C50.9709 33.643 49.899 36.2156 47.755 38.4668C45.7184 40.6106 43.2529 41.6826 40.3586 41.6826C37.4644 41.6826 34.9453 40.6106 32.8015 38.4668C30.6576 36.3228 29.5856 33.7502 29.5856 30.7488C29.5856 29.4625 29.8536 28.0153 30.3895 26.4074C30.9256 24.6923 31.8367 22.5484 33.1231 19.9758L43.8961 0.0375977L52.0965 4.53976Z" fill="currentColor"/>
            </svg>
            <blockquote className={styles.quote}>
              The children we support today are the changemakers of tomorrow. We are here to make sure they are seen, heard, and helped.
            </blockquote>
            <cite className={styles.author}>— KVS Trust Volunteer Coordinator</cite>
          </div>
          <div className={styles.imageContent}>
            <img 
              src="/images/home/home-quoteblock.png" 
              alt="Volunteer coordinator" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBlock;
