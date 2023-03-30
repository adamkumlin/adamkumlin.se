"use client";
import styles from "../styles/Home.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavButton from "./components/NavButton";
import Background from "./components/Background";
import LogInButton from "./components/LogInButton";
import { useRef } from "react";

const Home: React.FC = () => {

  const siteHeadingRef = useRef<HTMLHeadingElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.Home}>
      <h1 className={styles.siteHeading} ref={siteHeadingRef}>Adam Kumlin</h1>
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