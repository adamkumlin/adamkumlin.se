"use client";
import React from "react";
import Link from "next/link";

// Contact Email Option component

interface ContactEmailOptionProps {
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimated: boolean;
  name: string;
}

const ContactEmailOption: React.FC<ContactEmailOptionProps> = ({ setIsAnimated, isAnimated, name }) => {

  return (
    <div className="ContactEmailOption">
      <Link href="mailto:kumlinadam99@gmail.com" target="_blank" rel="noreferrer" onMouseEnter={() => setIsAnimated(true)} className="email">
        <div className={isAnimated ? "animated" : ""}>&nbsp;</div>
        <div className={isAnimated ? "animated" : ""}>&nbsp;</div>
        <div>&nbsp;</div>
      </Link>
      <p className="emailTooltip">{name}</p>
    </div>
  );
};

ContactEmailOption.displayName = "ContactEmailOption";

export default ContactEmailOption;
