import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="Footer">
        <p>&#169; 2022 Adam Kumlin</p>
        <Link to="privacy">Integritetspolicy</Link>
    </div>
  );
}

export default Footer;