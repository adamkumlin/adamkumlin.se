import NavBar from "../NavBar.js";
import Introduction from "../Introduction.js";
import Footer from "../Footer.js";
import NavButton from "../NavButton.js";
import Background from "../Background.js";
import { useRef } from "react";

function Home() {

  const arrowLine0Ref = useRef(null);
  const arrowLine1Ref = useRef(null);
  const arrowLine2Ref = useRef(null);
  const navBarRef = useRef(null);

  function goToMainContent() {

    arrowLine0Ref.current.style.animation = "navButtonArrowLine0Down 0.3s";
    arrowLine1Ref.current.style.animation = "navButtonArrowLine1Down 0.3s";
    arrowLine2Ref.current.style.animation = "navButtonArrowLine2Down 0.3s";

    setTimeout(function() {
      navBarRef.current.scrollIntoView({behavior: "smooth"}); 
      arrowLine0Ref.current.style.animation = null;
      arrowLine1Ref.current.style.animation = null;
      arrowLine2Ref.current.style.animation = null;
    }, 300);
  }

  window.addEventListener(("scroll"), () => {
    if (window.scrollY > 600) {
      navBarRef.current.style.animation = "navBarFade 2s";
    } else {
      navBarRef.current.style.animation = "null";
    }
  })

  return (
    <div className="Home">
      <Introduction/>
      <NavButton goToMainContent={goToMainContent} ref={{ref0: arrowLine0Ref, ref1: arrowLine1Ref, ref2: arrowLine2Ref}}/>
      <NavBar ref={navBarRef}/>
      <Background/>
      <Footer/>
    </div>
  );
}
  
export default Home;