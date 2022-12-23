import { Link } from "react-router-dom";

function BackButton() {

    return (
      <div className="BackButton">
          <Link to="/">Tillbaka</Link>
          <div className="backArrow">
            <div className="backArrowLine0"></div>
            <div className="backArrowLine1"></div>
          </div>
      </div>
    );
  }
  
  export default BackButton;