import styles from './ArticleCard.module.css';

const ArticleCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1606041008023-472dfb5e5305"
        alt="Brain model"
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>December 5, 2024</span>
          <span className={styles.dot}>•</span>
          <span>12 min read</span>
        </div>
        <h2 className={styles.title}>
          Medical Camps: Bringing Healthcare to Remote Villages
        </h2>
        <div className={styles.footer}>
          <button className={styles.category}>Healthcare</button>
          <a href="#" className={styles.readMore}>
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
