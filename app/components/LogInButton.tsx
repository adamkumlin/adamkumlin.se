"use client";
import * as React from "react";
import Link from "next/link";

type LogInButtonProps = {
  text: string;
}

const LogInButton = ({text}: LogInButtonProps) => {

    return (
      <div className="LogInButton">
          <Link href="/login">
            {text}
          </Link> 
      </div>
    );
  }

export default LogInButton;