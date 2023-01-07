import { forwardRef } from "react";
import githubIcon from "../images/github-icon.svg";

const ContactOptions = forwardRef((props, ref) => {

  const {ref0, ref1, ref2, ref3} = ref;

  return (

    <div className="ContactOptions">
      <a href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={props.playEmailAnimation} className="email">
          <div ref={ref0} className="envelopeTop"></div>
          <div ref={ref1} className="envelopeMiddle"></div>
          <div className="envelopeBottom"></div>
          <span ref={ref2} className="emailTooltip">E-post</span>
      </a>

      <a href="https://github.com/adamkumlin" target="_blank" rel="noreferrer" className="github">
        <img src={githubIcon} alt="GitHub icon"/>
        <span ref={ref3} className="githubTooltip">GitHub</span>
      </a>
    </div>
  );
  
});
  export default ContactOptions;