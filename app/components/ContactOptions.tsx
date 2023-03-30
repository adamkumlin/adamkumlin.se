"use client";
import * as React from "react";
import { forwardRef } from "react";
import githubIcon from "../../public/github-icon.svg";
import Image from "next/image";
import styles from "../../styles/ContactOptions.module.css";

const ContactOptions = forwardRef<HTMLAnchorElement, HTMLSpanElement>((props: any, ref: any) => {

  const {ref0, ref1} = ref;

  return (

    <div className={styles.ContactOptions}>
      <a href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => props.setIsAnimated(true)} className={styles.email}>
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div>&nbsp;</div>
          <span ref={ref0} className={styles.emailTooltip}>E-post</span>
      </a>

      <a href="https://github.com/adamkumlin" target="_blank" rel="noreferrer" className={styles.github}>
        <Image src={githubIcon} alt="GitHub icon"/>
        <span ref={ref1} className={styles.githubTooltip}>GitHub</span>
      </a>
    </div>
  );
  
});
  export default ContactOptions;