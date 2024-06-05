
import React from "react";
import Link from "next/link";
import styles from "./styles/ContactEmailOption.module.css";

// Contact Email Option component

interface ContactEmailOptionProps {
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimated: boolean;
  name: string;
}

const ContactEmailOption: React.FC<ContactEmailOptionProps> = ({ setIsAnimated, isAnimated, name }) => {

  return (
    <div className={styles.ContactEmailOption}>
      <Link href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => setIsAnimated(true)} className={styles.email}>
        <div className={isAnimated ? styles.animated : ""}>&nbsp;</div>
        <div className={isAnimated ? styles.animated : ""}>&nbsp;</div>
        <div>&nbsp;</div>
      </Link>
      <p className={styles.emailTooltip}>{name}</p>
    </div>
  );
};

ContactEmailOption.displayName = "ContactEmailOption";

export default ContactEmailOption;
