"use client";
import React from "react";
import Link from "next/link";

// Footer component

const Footer: React.FC= () => {
  return (
    <div className="Footer">
      <p>© 2022 Adam Kumlin</p>
      <Link href="privacy">Integritetspolicy</Link>
    </div>
  );
};

export default Footer;
