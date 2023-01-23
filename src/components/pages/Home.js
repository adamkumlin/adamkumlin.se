import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import NavButton from "../NavButton.js";
import Background from "../Background.js";
import LogInButton from "../LogInButton.js";
import { useRef } from "react";
import HomeButton from "../HomeButton.js";

function Home() {

  const homeButtonRef = useRef(null);
  const navBarRef = useRef(null);

  function goToMainContent() {
    navBarRef.current.scrollIntoView({behavior: "smooth"});
  }

  window.addEventListener(("scroll"), () => {
    
    if (window.scrollY > 1) {
      homeButtonRef.current.style.position = "absolute";
      homeButtonRef.current.style.display = "block";
      
    } else if (window.scrollY > 50) {

      homeButtonRef.current.style.position = "sticky";
      
    } else if (window.scrollY > 600) {

      navBarRef.current.style.animation = "navBarFade 2s";

    } else {

      navBarRef.current.style.animation = "null";
    }
  });

  return (
    <div className="Home">
      <h1 className="pageHeading">Adam Kumlin</h1>
      <h2></h2>
      <HomeButton ref={homeButtonRef}/>
      <LogInButton/>
      <NavButton goToMainContent={goToMainContent}/>
      <NavBar ref={navBarRef}/>
      <Background/>
      <Footer/>
    </div>
  );
}
  
export default Home;