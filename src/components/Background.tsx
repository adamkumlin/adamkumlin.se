import * as React from "react";
import backgroundVideo from "../images/background-video.mp4";

const Background = () => {

    return (
        <div className="Background">
            <div className="backgroundOverlay"></div>
            <video className="backgroundVideo" autoPlay={true} muted={true} loop={true}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
  }
  
  export default Background;