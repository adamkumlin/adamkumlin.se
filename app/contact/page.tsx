"use client";
import * as React from "react";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";
import ContactOptions from "../components/ContactOptions";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  const emailTooltipRef = useRef<HTMLInputElement>(null);
  const githubTooltipRef = useRef<HTMLInputElement>(null);

  window.onmousemove = function(e) {
    let x = (e.clientX + 20) + "px";
    let y = (e.clientY + 20) + "px";

    if (emailTooltipRef.current) {
      emailTooltipRef.current.style.top = y;
      emailTooltipRef.current.style.left = x;
    }

    if (githubTooltipRef.current) {
      githubTooltipRef.current.style.top = y;
      githubTooltipRef.current.style.left = x;
    }


  }

    return (
      <div className="Contact">

        <Background/>

        <h2 className="heading">Kontakta mig</h2>

        <HomeButton/>

        <ContactOptions setIsAnimated={setIsAnimated} isAnimated={isAnimated} ref={{ref0: emailTooltipRef, ref1: githubTooltipRef}}/>

        <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
      </div>
    );
  }
  
  export default Contact;