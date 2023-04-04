"use client";
import * as React from "react";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";
import ContactEmailOption from "../components/ContactEmailOption";
import ContactLinkOption from "../components/ContactLinkOption";
import { useState } from "react";
import Footer from "../components/Footer";

// Contact page

const Contact: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  return (
    <div className="Contact">
      <Background />

      <h2 className="heading">Kontakta mig</h2>

      <HomeButton />

      <div className="contactOptions">
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

      <Footer />
    </div>
  );
};

export default Contact;
