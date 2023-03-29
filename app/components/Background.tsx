import * as React from "react";

const Background = () => {

    return (
        <div className="Background">
            <div className="backgroundOverlay"></div>
            <video className="backgroundVideo" autoPlay={true} muted={true} loop={true} src={"/background-video.mp4"}/>
        </div>
    )
  }
  
  export default Background;