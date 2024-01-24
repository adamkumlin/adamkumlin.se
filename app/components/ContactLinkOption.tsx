"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Contact Link Option component

interface ContactLinkOptionProps {
  name: string;
  image: string;
  link: string;
}

const ContactLinkOption: React.FC<ContactLinkOptionProps> = ({name, image, link}) => {
// Forward the refs from the parent component with forwardRef, define type ContactLinkOptionsProps and pass it to the component

  return (
    <div className="ContactLinkOption">
      <Link href={link} target="_blank" rel="noreferrer" className="link">
        <Image width="200" height="200" src={image} alt={name}/>
      </Link>
      <p className="linkTooltip">{name}</p>
    </div>
  );
};

ContactLinkOption.displayName = "ContactLinkOption";
export default ContactLinkOption;