"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ContactLinkOption.module.css";

// Contact Link Option component

interface ContactLinkOptionProps {
  name: string;
  image: string;
  link: string;
}

const ContactLinkOption: React.FC<ContactLinkOptionProps> = ({name, image, link}) => {
// Forward the refs from the parent component with forwardRef, define type ContactLinkOptionsProps and pass it to the component

  return (
    <div className={styles.ContactLinkOption}>
      <Link href={link} target="_blank" rel="noreferrer" className={styles.link}>
        <Image width="200" height="200" src={image} alt={name}/>
      </Link>
      <p className={styles.linkTooltip}>{name}</p>
    </div>
  );
};

ContactLinkOption.displayName = "ContactLinkOption";
export default ContactLinkOption;