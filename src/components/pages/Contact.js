import backgroundVideo from "../../images/background-video.mp4";
import BackButton from "../BackButton";
import ContactOptions from "../ContactOptions";
import { useRef } from "react";

function Contact() {

  const emailTopRef = useRef(null);
  const emailMiddleRef = useRef(null);
  const emailTooltipRef = useRef(null);

  function playEmailAnimation() {
    emailTopRef.current.style.animation = "openEnvelopeTop 0.5s forwards linear";
    emailMiddleRef.current.style.animation = "openEnvelopeMiddle 1s forwards";
    emailMiddleRef.current.style.animationDelay = "0.6s";

    window.onmousemove = function(e) {
      let x = (e.clientX + 20) + "px";
      let y = (e.clientY + 20) + "px";

      for (let i = 0; i < emailTooltipRef.current.textContent.length; i++) {
        emailTooltipRef.current.style.top = y;
        emailTooltipRef.current.style.left = x;

    }
  }
}

    return (
      <div className="Contact">

        <div className="background">
          <div className="backgroundOverlay"></div>
          <video className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
              <source src={backgroundVideo} type="video/mp4"/>
          </video>
        </div>

        <h2 className="heading">Kontakta mig</h2>

        <BackButton/>

        <ContactOptions playEmailAnimation={playEmailAnimation} ref={{ref0: emailTopRef, ref1: emailMiddleRef, ref2: emailTooltipRef}}/>
      </div>
    );
  }
  
  export default Contact;