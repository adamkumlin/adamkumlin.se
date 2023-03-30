"use client";
import * as React from "react";
import { forwardRef } from "react";
import Link from "next/link";

const HomeButton = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div className="HomeButton" ref={ref}>
      <Link href="/">
        <h1>Adam Kumlin</h1>
      </Link> 
    </div>
  )

});
  
  export default HomeButton;