import { Link } from "react-router-dom";

function LogInButton() {

    return (
      <div className="LogInButton">
          <Link to="/login">
            <div className="backArrowLine0"></div>
            <div className="backArrowLine1"></div>
          </Link> 
      </div>
    );
  }
  
  export default LogInButton;