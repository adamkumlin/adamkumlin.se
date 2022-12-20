import NavBar from "../NavBar.js";
import Introduction from "../Introduction.js";
import Footer from "../Footer.js";
import NavButton from "../NavButton.js";
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
  const arrowLine0Ref = useRef(null);
  const arrowLine1Ref = useRef(null);
  const arrowLine2Ref = useRef(null);
  const navBarRef = useRef(null);

  function goToMainContent() {

    arrowLine0Ref.current.style.animation = "navButtonArrowLine0Down 0.3s";
    arrowLine1Ref.current.style.animation = "navButtonArrowLine1Down 0.3s";
    arrowLine2Ref.current.style.animation = "navButtonArrowLine2Down 0.3s";

    setTimeout( function() {
      navBarRef.current.scrollIntoView({behavior: "smooth"}); 
      arrowLine0Ref.current.style.animation = null;
      arrowLine1Ref.current.style.animation = null;
      arrowLine2Ref.current.style.animation = null;
    }, 300);
  }

    return (
      <div className="Home">
        <div className="background">
            <div ref={backgroundOverlayRef} className="backgroundOverlay"></div>
            <video ref={backgroundVideoRef} className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
        <Introduction/>
        <NavButton goToMainContent={goToMainContent} ref={{ref0: arrowLine0Ref, ref1: arrowLine1Ref, ref2: arrowLine2Ref}}/>
        <NavBar blurBackground={blurBackground} unBlurBackground={unBlurBackground} ref={navBarRef} />
        <Footer/>
      </div>
    );
  }
  
  export default Home;