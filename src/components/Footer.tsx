import * as React from "react";
import { Link } from "react-router-dom";

type FooterProps = {
  privacyLabel: string;
  copyrightLabel: string;
}

export default function Footer({privacyLabel, copyrightLabel}: FooterProps) {

  return (
    <div className="Footer">
        <p>{copyrightLabel}</p>
        <Link to="privacy">{privacyLabel}</Link>
    </div>
  );
}