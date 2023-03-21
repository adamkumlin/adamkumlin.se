import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import NavButton from "../NavButton.tsx";
import Background from "../Background.tsx";
import LogInButton from "../LogInButton.tsx";
import { useRef } from "react";

function Home() {

  const siteHeadingRef = useRef(null);
  const navBarRef = useRef(null);

  function goToMainContent() {
    navBarRef.current.scrollIntoView({behavior: "smooth"});
  }

  window.addEventListener(("scroll"), () => {
    
    if (window.scrollY > 1) {

      siteHeadingRef.current.style.transform = "translateX(-42vw)";

    } else if (window.scrollY > 600) {

      navBarRef.current.style.animation = "navBarFade 2s";

    } else {
      navBarRef.current.style.animation = "null";
      siteHeadingRef.current.style.transform = "none";
    }
  });

  return (
    <div className="Home">
      <h1 className="siteHeading" ref={siteHeadingRef}>Adam Kumlin</h1>
      <h2></h2>
      <LogInButton text={"Logga in"}/>
      <NavButton goToMainContent={goToMainContent}/>
      <NavBar ref={navBarRef}/>
      <Background/>
      <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
    </div>
  );
}

export default Home;