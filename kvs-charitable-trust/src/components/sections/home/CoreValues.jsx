import React from 'react';
import styles from './CoreValues.module.css';

const CoreValues = () => {
  const values = [
    {
      title: "Compassion",
      emoji: "❤️",
      description: "We are driven by empathy, offering care and support to children, the elderly, women, and vulnerable individuals, ensuring they feel valued and protected.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/25bbec05e61712c730b680a0671f75d10ea93d25?width=837"
    },
    {
      title: "Dignity & Respect", 
      emoji: "🤝",
      description: "We uphold the dignity of every person, treating everyone with respect and ensuring that their basic rights to shelter, care, and opportunity are met.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/66fe98de39cc5549bcfdbcc2c4e6f98f9df0d5d0?width=837"
    },
    {
      title: "Integrity",
      emoji: "⚖️", 
      description: "We conduct our work with transparency and accountability, maintaining the highest ethical standards in all our actions, partnerships, and services.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f4978b1571cf18e42e375c53ae15512a25dc1d56?width=837"
    },
    {
      title: "Empowerment",
      emoji: "💪",
      description: "We are committed to empowering individuals by providing the necessary resources and support, enabling them to build better futures and contribute positively to society.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4d1365e9b7f0c51171d063d51cdf1b420e96393e?width=837"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Our core </span>
            <span className={styles.titleAccent}>values</span>
          </h2>
          <p className={styles.subtitle}>
            These fundamental principles guide every decision we make and every action we take in service of our communities.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueImage}>
                <img src={value.image} alt={value.title} />
                <div className={styles.imageOverlay}></div>
                <div className={styles.valueIcon}>
                  <span className={styles.emoji}>{value.emoji}</span>
                </div>
              </div>
              <div className={styles.valueContent}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.valuesAction}>
          <h3 className={styles.actionTitle}>Values in action</h3>
          <p className={styles.actionDescription}>
            These aren't just words on a page—they're the foundation of everything we do. When you support KVS Trust, you're investing in these values and their real-world impact.
          </p>
          <a href="#donate" className={styles.donateBtn}>
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
