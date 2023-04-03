"use client";
import * as React from "react";
import { forwardRef } from "react";
import Link from "next/link";

// Contact Email Option component

type ContactEmailOptionProps = {
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimated: boolean;
  name: string;
}

const ContactEmailOption = forwardRef<HTMLSpanElement, ContactEmailOptionProps>((props, ref) => {
// Forward the refs from the parent component with forwardRef, define type ContactEmailOptionsProps and pass it to the component

  return (

    <div className="ContactEmailOption">
      <Link href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => props.setIsAnimated(true)} className="email">
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div className={props.isAnimated ? "animated" : ""}>&nbsp;</div>
          <div>&nbsp;</div>
          <span ref={ref} className="emailTooltip">{props.name}</span>
      </Link>
    </div>
  );
  
});

ContactEmailOption.displayName = "ContactEmailOption";

  export default ContactEmailOption;