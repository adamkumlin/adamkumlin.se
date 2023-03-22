import * as React from "react";

type FooterProps = {
  privacyLabel: string;
  copyrightLabel: string;
}

const Footer = ({privacyLabel, copyrightLabel}: FooterProps) => {

  return (
    <div className="Footer">
        <p>{copyrightLabel}</p>
    </div>
  );
}

export default Footer;