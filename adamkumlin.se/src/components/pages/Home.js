import NavBar from "../NavBar";
import Footer from "../Footer";
import backgroundVideo from "../../images/background-video.mp4";
import { useRef } from "react";

function Home() {

  const backgroundOverlayRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  function blurBackground() {
    backgroundOverlayRef.current.style.opacity = "0.7"
    backgroundVideoRef.current.style.transform= "translateX(1.7)";
  }

  function unBlurBackground() {
    backgroundOverlayRef.current.style.opacity = "0.2"

  }

    return (
      <div className="Home">
        <div className="background">
          <div ref={backgroundOverlayRef} className="backgroundOverlay"></div>
          <video className="backgroundVideo" autoplay="autoplay" muted="muted" loop="loop">
          <source ref={backgroundVideoRef} src={backgroundVideo} type="video/mp4"/>
        </video>
        </div>
        <NavBar blurBackground={blurBackground} unBlurBackground={unBlurBackground}/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;