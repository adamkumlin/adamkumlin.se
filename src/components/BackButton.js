import { Link } from "react-router-dom";

function BackButton() {

    return (
      <div className="BackButton">
          <Link to="/">
            <div className="backArrowLine0"></div>
            <div className="backArrowLine1"></div>
          </Link> 
      </div>
    );
  }
  
  export default BackButton;