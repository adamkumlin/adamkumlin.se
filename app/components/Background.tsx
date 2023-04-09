"use client";
import React from "react";
import styles from "../../styles/Home.module.css";

// Background component

const Background: React.FC = () => {
  return (
    <div className={styles.Background}>
      <div className={styles.backgroundOverlay}></div>
      <video
        className={styles.backgroundVideo}
        autoPlay={true}
        muted={true}
        loop={true}
        src={"/background-video.mp4"}
      />
    </div>
  );
};

export default Background;
