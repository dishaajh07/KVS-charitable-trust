"use client";

import React from 'react';
import styles from './Banner.module.css';

const Banner = ({
  title,
  subtitle,
  description,
  backgroundImage,
  breadcrumb = [],
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.breadcrumb}>
        {breadcrumb.map((item, idx) => (
          <span key={idx}>
            {item.link ? <a href={item.link}>{item.label}</a> : item.label}
            {idx < breadcrumb.length - 1 && '  >  '}
          </span>
        ))}
      </div>

      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Banner;
