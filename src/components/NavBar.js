import { Link } from "react-router-dom";
import { forwardRef } from "react";

const NavBar = forwardRef((props, ref) => (
  <div className="NavBar" ref={ref}>
      <div className="navLinkContainer" onMouseLeave={props.unBlurBackground}>
        <Link className="navLink" to="/contact" onMouseEnter={props.blurBackground}>KONTAKTA MIG</Link>
        <Link className="navLink" to="/about" onMouseEnter={props.blurBackground}>OM MIG</Link>
        <Link className="navLink" to="/projects" onMouseEnter={props.blurBackground}>TIDIGARE PROJEKT</Link>
        <Link className="navLink" to="/cv" onMouseEnter={props.blurBackground}>CV</Link>
      </div>
    </div>
));

export default NavBar;