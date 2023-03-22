import * as React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import NavButton from "../NavButton";
import Background from "../Background";
import LogInButton from "../LogInButton";
import { useRef } from "react";

const Home = () => {

  const siteHeadingRef = useRef<HTMLHeadingElement>(null);
  const navBarRef = useRef<HTMLInputElement>(null);

  function goToMainContent() {
    if (navBarRef.current !== null) {
      return navBarRef.current.scrollIntoView({behavior: "smooth"});
    }
  }

  window.addEventListener(("scroll"), () => {
    
    if (window.scrollY > 1) {

        siteHeadingRef.current!.style.transform = "translateX(-42vw)";

    } else if (window.scrollY > 600) {

        navBarRef.current!.style.animation = "navBarFade 2s";

    } else {
        navBarRef.current!.style.animation = "null";
        siteHeadingRef.current!.style.transform = "none";
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