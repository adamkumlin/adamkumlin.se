import Background from "../Background.js";
import BackButton from "../BackButton.js";
import ContactOptions from "../ContactOptions.js";
import { useRef } from "react";
import Footer from "../Footer.js";

function Contact() {

  const emailTopRef = useRef(null);
  const emailMiddleRef = useRef(null);
  const emailTooltipRef = useRef(null);
  const githubTooltipRef = useRef(null);

  function playEmailAnimation() {
    emailTopRef.current.style.animation = "openEnvelopeTop 0.5s forwards linear";
    emailMiddleRef.current.style.animation = "openEnvelopeMiddle 1s forwards";
    emailMiddleRef.current.style.animationDelay = "0.6s";
  }

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

        <BackButton/>

        <ContactOptions playEmailAnimation={playEmailAnimation} ref={{ref0: emailTopRef, ref1: emailMiddleRef, ref2: emailTooltipRef, ref3: githubTooltipRef}}/>

        <Footer/>
      </div>
    );
  }
  
  export default Contact;