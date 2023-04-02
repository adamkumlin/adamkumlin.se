"use client";
import * as React from "react";
import Link from "next/link";

// Footer component

type FooterProps = {
  privacyLabel: string;
  copyrightLabel: string;
}

const Footer: React.FC<FooterProps> = ({privacyLabel, copyrightLabel}) => {

  return (
    <div className="Footer">
        <p>{copyrightLabel}</p>
        <Link href="privacy">{privacyLabel}</Link>
    </div>
  );
}

export default Footer;