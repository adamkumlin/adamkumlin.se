"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Nav Bar component

interface NavBarProps {
  ref?: React.RefObject<HTMLDivElement>;
}
// Define NavBarProps type, the ref is optional and the other properties have type arrow function

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
// Pass the type above and type HTMLDivElement to the ref

  return (
    <div className={styles.NavBar} ref={ref}>
      <div className={styles.navLinkContainer}>
        <Link className={styles.navLink} href="/contact">Kontakta mig</Link>
        <Link className={styles.navLink} href="/projects">Tidigare projekt</Link>
        <Link className={styles.navLink} href="/cv">CV</Link>
      </div>
    </div>
  )});

  NavBar.displayName = "NavBar";

  export default NavBar;