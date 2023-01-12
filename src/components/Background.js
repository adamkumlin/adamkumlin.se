import backgroundVideo from "../images/background-video.mp4";

function Background() {

    return (
        <div className="Background">
            <div className="backgroundOverlay"></div>
            <video className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
  }
  
  export default Background;