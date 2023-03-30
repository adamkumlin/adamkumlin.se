"use client";
import * as React from "react";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "../../styles/NavBar.module.css";

const NavBar = forwardRef<HTMLDivElement>((props: any, ref) => {

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

  export default NavBar;