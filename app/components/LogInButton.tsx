"use client";
import * as React from "react";
import Link from "next/link";

// Log In Button component

type LogInButtonProps = {
  text: string;
};

const LogInButton: React.FC<LogInButtonProps> = ({ text }) => {
  return (
    <div className="LogInButton">
      <Link href="/login">{text}</Link>
    </div>
  );
};

export default LogInButton;
