"use client";
import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import ContactEmailOption from "../components/ContactEmailOption";
import styles from "../../styles/Contact.module.css";
import ContactLinkOption from "../components/ContactLinkOption";

// Contact page

const Contact: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  return (
    <div className={styles.Contact}>

      <h2 className="heading">Kontakta mig</h2>

      <HomeButton />

      <div className={styles.contactOptions}>
        <ContactEmailOption
          setIsAnimated={setIsAnimated}
          isAnimated={isAnimated}
          name="E-post"
        />
        
        <ContactLinkOption
          link="https://github.com/adamkumlin"
          image="/github-icon.svg"
          name="GitHub"
        />

        <ContactLinkOption
        link="https://discord.com/users/177812688120971264"
        image="/discord-icon.svg"
        name="Discord"
        />
      </div>
    </div>
  );
};

export default Contact;
