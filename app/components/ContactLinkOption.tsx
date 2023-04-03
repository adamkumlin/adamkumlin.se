"use client";
import * as React from "react";
import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Contact Link Option component

type ContactLinkOptionProps = {
  name: string;
  image: string;
  ref?: React.RefObject<HTMLSpanElement>;
  link: string;
}

const ContactLinkOption = forwardRef<HTMLSpanElement, ContactLinkOptionProps>((props, ref) => {
// Forward the refs from the parent component with forwardRef, define type ContactLinkOptionsProps and pass it to the component

  return (

    <div className="ContactLinkOption">
      <Link href={props.link} target="_blank" rel="noreferrer" className="link">
        <Image width="200" height="200" src={props.image} alt={props.name}/>
        <span ref={ref} className="linkTooltip">{props.name}</span>
      </Link>
    </div>
  );
  
});

ContactLinkOption.displayName = "ContactLinkOption";
  export default ContactLinkOption;