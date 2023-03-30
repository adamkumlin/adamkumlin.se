"use client";
import * as React from "react";

type FooterProps = {
  privacyLabel: string;
  copyrightLabel: string;
}

const Footer: React.FC<FooterProps> = ({privacyLabel, copyrightLabel}) => {

  return (
    <div className="Footer">
        <p>{copyrightLabel}</p>
        <p>{privacyLabel}</p>
    </div>
  );
}

export default Footer;