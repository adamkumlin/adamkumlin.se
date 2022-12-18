import NavBar from "../NavBar";
import Footer from "../Footer";
import backgroundVideo from "../../images/background-video.mp4";
import { useRef } from "react";

function Home() {

  const backgroundOverlayRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  function blurBackground() {
    backgroundOverlayRef.current.style.animation = "backgroundFade 3s forwards";
    backgroundVideoRef.current.style.animation = "backgroundZoom 2s forwards";
  }

  function unBlurBackground() {
    backgroundOverlayRef.current.style.animation = "backgroundUnFade 2s forwards";
    backgroundVideoRef.current.style.animation = "backgroundUnZoom 1s forwards";
  }

    return (
      <div className="Home">
        <div className="background">
          <div ref={backgroundOverlayRef} className="backgroundOverlay"></div>
          <video ref={backgroundVideoRef} className="backgroundVideo" autoPlay="autoPlay" muted="muted">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
        </div>
        <NavBar blurBackground={blurBackground} unBlurBackground={unBlurBackground}/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;