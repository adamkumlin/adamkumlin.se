
import React, { forwardRef } from "react";
import styles from "./styles/HomeButton.module.css";
import Link from "next/link";

// Home Button component

const HomeButton: React.FC = forwardRef<HTMLDivElement>((props, ref) => {
  // Forward the ref from the parent component, it gets type HTMLDivElement
  return (
    <div className={styles.HomeButton} ref={ref}>
      <Link href="/">
        <h1>Adam Kumlin</h1>
      </Link>
    </div>
  );
});

HomeButton.displayName = "HomeButton";

export default HomeButton;
