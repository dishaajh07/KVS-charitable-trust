import React from 'react';
import styles from './BlogsDisplay.module.css';

const BlogsDisplay = () => {
  const blogPosts = [
    {
      title: "A Shelter Provider at KVS Trust plays a crucial role in supporting individuals",
      date: "December 15, 2024",
      readTime: "10 min read",
      category: "Shelter & Housing",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b3996d92b056120deeac39a41e274f22c270e9cb?width=1137"
    },
    {
      title: "Medical Camps: Bringing Healthcare to Remote Villages",
      date: "December 5, 2024", 
      readTime: "12 min read",
      category: "Healthcare",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8a210938f489d51c3da411f768bd8d77be23d5a9?width=1137"
    },
    {
      title: "Educational Programs: Empowering the Next Generation",
      date: "December 1, 2024",
      readTime: "8 min read", 
      category: "Education",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b3996d92b056120deeac39a41e274f22c270e9cb?width=1137"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>Latest News & </span>
          <span className={styles.titleAccent}>Insights</span>
        </h2>
        
        <div className={styles.blogGrid}>
          {blogPosts.map((blog, index) => (
            <article key={index} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{blog.date}</span>
                  <span className={styles.separator}>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <div className={styles.footer}>
                  <span className={styles.category}>{blog.category}</span>
                  <a href="#" className={styles.readMore}>
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className={styles.actionCenter}>
          <button className={styles.exploreBtn}>
            <span>Explore Blogs</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsDisplay;
