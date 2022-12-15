import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <div className="navLinkContainer">
        <Link className="navLink" to="/contact">KONTAKTA MIG</Link>
        <Link className="navLink" to="/about">OM MIG</Link>
        <Link className="navLink" to="/projects">TIDIGARE PROJEKT</Link>
        <Link className="navLink" to="/cv">CV</Link>
      </div>
    </div>
  );
}

export default NavBar;