import { Link } from "react-router-dom";
import { useRef } from "react";

function NavBar() {

    const activeLink = useRef();

    function handleActiveLink() {
        console.log(activeLink.current);
        
    }
  return (
    <div className="NavBar">
        <Link ref={activeLink} onMouseEnter={handleActiveLink} to="/contact">KONTAKTA MIG</Link>
        <Link ref={activeLink} onMouseEnter={handleActiveLink} to="/about">OM MIG</Link>
        <Link ref={activeLink} onMouseEnter={handleActiveLink} to="/projects">TIDIGARE PROJEKT</Link>
        <Link ref={activeLink} onMouseEnter={handleActiveLink} to="/cv">CV</Link>
    </div>
  );
}

export default NavBar;