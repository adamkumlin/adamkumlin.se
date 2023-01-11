import { forwardRef } from "react";
import githubIcon from "../images/github-icon.svg";

const ContactOptions = forwardRef((props, ref) => {

  const {ref0, ref1} = ref;

  return (

    <div className="ContactOptions">
      <a href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => props.setIsAnimated(true)} className="email">
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div>&nbsp;</div>
          <span ref={ref0} className="emailTooltip">E-post</span>
      </a>

      <a href="https://github.com/adamkumlin" target="_blank" rel="noreferrer" className="github">
        <img src={githubIcon} alt="GitHub icon"/>
        <span ref={ref1} className="githubTooltip">GitHub</span>
      </a>
    </div>
  );
  
});
  export default ContactOptions;