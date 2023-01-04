import { forwardRef } from "react";
import { Link } from "react-router-dom";
import githubIcon from "../images/github-icon.svg";

const ContactOptions = forwardRef((props, ref) => {

  const {ref0, ref1, ref2, ref3} = ref;

  return (

    <div className="ContactOptions">
      <Link target="_blank" onClick={() => {window.location.href = "mailto:kumlinadam99@gmail.com";}} className="email" onMouseEnter={props.playEmailAnimation}>
          <div ref={ref0} className="envelopeTop"></div>
          <div ref={ref1} className="envelopeMiddle"></div>
          <div className="envelopeBottom"></div>
          <span ref={ref2} className="emailTooltip">E-post</span>
      </Link>

      <Link target="_blank" onClick={() => {window.location.href = "https://github.com/adamkumlin"}} className="github">
        <img src={githubIcon} alt="GitHub icon"/>
        <span ref={ref3} className="githubTooltip">GitHub</span>
      </Link>
    </div>
  );
  
});
  export default ContactOptions;