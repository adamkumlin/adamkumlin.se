"use client";
import * as React from "react";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "../../styles/NavBar.module.css";

// Nav Bar component

type NavBarProps = {
  blurBackground?: () => void
  unBlurBackground?: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}
// Define NavBarProps type, the ref is optional and the other properties have type arrow function

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
// Pass the type above and type HTMLDivElement to the ref

  return (
    <div className={styles.NavBar} ref={ref}>
      <div className={styles.navLinkContainer} onMouseLeave={props.unBlurBackground}>
        <Link className={styles.navLink} href="/contact" onMouseEnter={props.blurBackground}>Kontakta mig</Link>
        <Link className={styles.navLink} href="/about" onMouseEnter={props.blurBackground}>Om mig</Link>
        <Link className={styles.navLink} href="/projects" onMouseEnter={props.blurBackground}>Tidigare projekt</Link>
        <Link className={styles.navLink} href="/cv" onMouseEnter={props.blurBackground}>Cv</Link>
      </div>
    </div>
  )});

  NavBar.displayName = "NavBar";

  export default NavBar;