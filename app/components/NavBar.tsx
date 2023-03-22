import * as React from "react";
import Link from "next/link";
import { forwardRef } from "react";

const NavBar = forwardRef<HTMLDivElement>((props: any, ref) => {

  return (
    <div className="NavBar" ref={ref}>
      <div className="navLinkContainer" onMouseLeave={props.unBlurBackground}>
        <Link className="navLink" href="/contact" onMouseEnter={props.blurBackground}>Kontakta mig</Link>
        <Link className="navLink" href="/about" onMouseEnter={props.blurBackground}>Om mig</Link>
        <Link className="navLink" href="/projects" onMouseEnter={props.blurBackground}>Tidigare projekt</Link>
        <Link className="navLink" href="/cv" onMouseEnter={props.blurBackground}>Cv</Link>
      </div>
    </div>
  )});

  export default NavBar;