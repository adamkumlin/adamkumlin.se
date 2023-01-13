import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import NavButton from "../NavButton.js";
import Background from "../Background.js";
import LogInButton from "../LogInButton.js";
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
  });

  return (
    <div className="Home">
      <h1>Adam Kumlin</h1>
      <h2></h2>
      <NavButton goToMainContent={goToMainContent}/>
      <NavBar ref={navBarRef}/>
      <Background/>
      <LogInButton/>
      <Footer/>
    </div>
  );
}
  
export default Home;