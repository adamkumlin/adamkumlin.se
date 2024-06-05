
"use client";
import React, { useRef } from "react";
import styles from "./Home.module.css";
import NavBar from "./components/NavBar";
import NavButton from "./components/NavButton";
import { ScrollReveal } from "reveal-on-scroll-react";

const Home: React.FC = () => {
  const siteHeadingRef = useRef<HTMLHeadingElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  function goToMainContent() {
    if (navBarRef.current) {
      navBarRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // If ref object contains an element, use it
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        if (siteHeadingRef.current) {
          siteHeadingRef.current.style.transform = "translateX(-39vw)";
        }
      } else {
        if (siteHeadingRef.current) {
          siteHeadingRef.current.style.transform = "none";
        }
      }
    });
  }
  // For the scroll animation

  return (
    <div className={styles.Home}>
      <h1 className={styles.siteHeading} ref={siteHeadingRef}>
        Adam Kumlin
      </h1>
      <div className={styles.animationContainer}>
        <h2 className={styles.first}></h2>
        <h2 className={styles.middle}>Mjukvaruutvecklare</h2>
        <h2 className={styles.last}></h2>
      </div>
      <h3>som kan </h3>
      <NavButton goToMainContent={goToMainContent} />
      <ScrollReveal.div animation="fade-in" duration={2}>
        <NavBar ref={navBarRef} />
      </ScrollReveal.div>
    </div>
  );
};

export default Home;
