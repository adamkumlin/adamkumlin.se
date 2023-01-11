import NavBar from "../NavBar.js";
import Introduction from "../Introduction.js";
import Footer from "../Footer.js";
import NavButton from "../NavButton.js";
import Background from "../Background.js";
import { useRef } from "react";

function Home() {

  const navBarRef = useRef(null);

  function goToMainContent() {

    navBarRef.current.scrollIntoView({behavior: "smooth"});
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
      <NavButton goToMainContent={goToMainContent}/>
      <NavBar ref={navBarRef}/>
      <Background/>
      <Footer/>
    </div>
  );
}
  
export default Home;