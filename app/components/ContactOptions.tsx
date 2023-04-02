"use client";
import * as React from "react";
import { forwardRef } from "react";
import githubIcon from "../../public/github-icon.svg";
import Image from "next/image";

// Contact Options component

type ContactOptionsProps = {
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimated: boolean;
}

const ContactOptions: React.FC<ContactOptionsProps> = forwardRef((props, ref: any) => {
// Forward the refs from the parent component with forwardRef, define type ContactOptionsProps and pass it to the component

  const {ref0, ref1} = ref;
  // Create two constants with the two refs, from the one ref parameter

  return (

    <div className="ContactOptions">
      <a href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => props.setIsAnimated(true)} className="email">
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div>&nbsp;</div>
          <span ref={ref0} className="emailTooltip">E-post</span>
      </a>

      <a href="https://github.com/adamkumlin" target="_blank" rel="noreferrer" className="github">
        <Image src={githubIcon} alt="GitHub icon"/>
        <span ref={ref1} className="githubTooltip">GitHub</span>
      </a>
    </div>
  );
  
});
  export default ContactOptions;