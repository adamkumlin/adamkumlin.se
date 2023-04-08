"use client";
import * as React from "react";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "../../styles/Home.module.css";

// Nav Bar component

type NavBarProps = {
  ref?: React.RefObject<HTMLDivElement>;
}
// Define NavBarProps type, the ref is optional and the other properties have type arrow function

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
// Pass the type above and type HTMLDivElement to the ref

  return (
    <div className={styles.NavBar} ref={ref}>
      <div className={styles.navLinkContainer}>
        <Link className={styles.navLink} href="/contact">Kontakta mig</Link>
        <Link className={styles.navLink} href="/about">Om mig</Link>
        <Link className={styles.navLink} href="/projects">Tidigare projekt</Link>
        <Link className={styles.navLink} href="/cv">Cv</Link>
        <Link className={styles.navLink} href="/gamesandtools">Spel/Verktyg</Link>
      </div>
    </div>
  )});

  NavBar.displayName = "NavBar";

  export default NavBar;