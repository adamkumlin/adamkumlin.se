import * as React from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const NavBar = forwardRef<HTMLDivElement>((props: any, ref) => (

<div className="NavBar" ref={ref}>
      <div className="navLinkContainer" onMouseLeave={props.unBlurBackground}>
        <Link className="navLink" to="/contact" onMouseEnter={props.blurBackground}>Kontakta mig</Link>
        <Link className="navLink" to="/about" onMouseEnter={props.blurBackground}>Om mig</Link>
        <Link className="navLink" to="/projects" onMouseEnter={props.blurBackground}>Tidigare projekt</Link>
        <Link className="navLink" to="/cv" onMouseEnter={props.blurBackground}>Cv</Link>
      </div>
    </div>
  ));

  export default NavBar;