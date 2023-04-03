"use client";
import * as React from "react";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";
import ContactEmailOption from "../components/ContactEmailOption";
import ContactLinkOption from "../components/ContactLinkOption";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

// Contact page

const Contact: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const emailTooltipRef = useRef<HTMLSpanElement>(null);
  const linkTooltipRef = useRef<HTMLSpanElement>(null);

  window.onmousemove = function (e: MouseEvent) {
    let x = e.clientX + 20 + "px";
    let y = e.clientY + 20 + "px";
    
    if (emailTooltipRef.current) {
      emailTooltipRef.current.style.top = y;
      emailTooltipRef.current.style.left = x;
    }
    // If ref's current object is defined, use it

    if (linkTooltipRef.current) {
      linkTooltipRef.current.style.top = y;
      linkTooltipRef.current.style.left = x;
    }
    // If ref's current object is defined, use it
  };

  return (
    <div className="Contact">
      <Background />

      <h2 className="heading">Kontakta mig</h2>

      <HomeButton />

      <ContactEmailOption
        setIsAnimated={setIsAnimated}
        isAnimated={isAnimated}
        ref={emailTooltipRef}
        name="E-post"
      />
      
      <ContactLinkOption
        link="https://github.com/adamkumlin"
        ref={linkTooltipRef}
        image="/github-icon.svg"
        name="GitHub"
      />

      <Footer />
    </div>
  );
};

export default Contact;
