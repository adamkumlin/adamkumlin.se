"use client";
import * as React from "react";
import styles from "../../styles/NavButton.module.css";

// Nav Button component

type NavButtonProps = {
  goToMainContent: () => void;
};

const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <div className={styles.NavButton} onClick={props.goToMainContent}>
      <div className={styles.arrowLine0}></div>
      <div className={styles.arrowLine1}></div>
      <div className={styles.arrowLine2}></div>
    </div>
  );
};
export default NavButton;
