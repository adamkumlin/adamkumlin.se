"use client";
import * as React from "react";

// Background component

const Background: React.FC = () => {
  return (
    <div className="Background">
      <div className="backgroundOverlay"></div>
      <video
        className="backgroundVideo"
        autoPlay={true}
        muted={true}
        loop={true}
        src={"/background-video.mp4"}
      />
    </div>
  );
};

export default Background;
