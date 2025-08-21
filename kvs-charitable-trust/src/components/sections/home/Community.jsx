import React, { useState } from 'react';
import styles from './Community.module.css';

const Community = () => {
  const [activeCategory, setActiveCategory] = useState(2);
  const categories = ['Blood donation', 'Eye Camp', 'Health checkup', 'Food distribution', 'Other'];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>Our </span>
          <span className={styles.titleAccent}>Community</span>
          <span className={styles.titleText}> in Action</span>
        </h2>
        
        <div className={styles.categoryFilter}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(index)}
              className={`${styles.filterBtn} ${
                activeCategory === index ? styles.filterBtnActive : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.gallery}>
          {Array.from({length: 8}).map((_, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src="images/image.png" 
                alt={`Community action ${index + 1}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
