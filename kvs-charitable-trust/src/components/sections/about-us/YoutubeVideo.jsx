import React from "react";
import styles from "./YoutubeVideo.module.css";

export default function YoutubeVideo() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Transforming Lives Through Love: KVS Charitable Trust's Mission to Uplift Young Lives</h1>
    <div className={styles.videoContainer}>
      <iframe
        src="https://www.youtube.com/embed/dC0FOD8GSiU?si=4wSFcrBevkj3BQJ3"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
