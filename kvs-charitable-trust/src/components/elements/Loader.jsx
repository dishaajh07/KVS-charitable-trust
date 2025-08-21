"use client"
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <img src="/kvs-loader.svg" alt="Loading..." className={styles.image} />
    </div>
  );
}
