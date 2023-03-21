import Background from "../Background.tsx";
import HomeButton from "../HomeButton.tsx";
import ContactOptions from "../ContactOptions.tsx";
import { useRef } from "react";
import { useState } from "react";
import Footer from "../Footer.tsx";

function Contact() {

  const [isAnimated, setIsAnimated] = useState(false);

  const emailTooltipRef = useRef(null);
  const githubTooltipRef = useRef(null);

  window.onmousemove = function(e) {
    let x = (e.clientX + 20) + "px";
    let y = (e.clientY + 20) + "px";

    emailTooltipRef.current.style.top = y;
    emailTooltipRef.current.style.left = x;
    githubTooltipRef.current.style.top = y;
    githubTooltipRef.current.style.left = x;
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