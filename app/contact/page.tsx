"use client";
import * as React from "react";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";
import ContactOptions from "../components/ContactOptions";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

// Contact page

const Contact: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const emailTooltipRef = useRef<HTMLInputElement | null>(null);
  const githubTooltipRef = useRef<HTMLInputElement | null>(null);

  window.onmousemove = function (e: MouseEvent) {
    let x = e.clientX + 20 + "px";
    let y = e.clientY + 20 + "px";

    if (emailTooltipRef.current) {
      emailTooltipRef.current.style.top = y;
      emailTooltipRef.current.style.left = x;
    }
    // If ref's current object is defined, use it

    if (githubTooltipRef.current) {
      githubTooltipRef.current.style.top = y;
      githubTooltipRef.current.style.left = x;
    }
    // If ref's current object is defined, use it
  };

  return (
    <div className="Contact">
      <Background />

      <h2 className="heading">Kontakta mig</h2>

      <HomeButton />

      <ContactOptions
        setIsAnimated={setIsAnimated}
        isAnimated={isAnimated}
        ref={{ ref0: emailTooltipRef, ref1: githubTooltipRef }}
      />
      {/* Send ref object to component, it contains the two refs defined at the top-level */}

      <Footer />
    </div>
  );
};

export default Contact;
