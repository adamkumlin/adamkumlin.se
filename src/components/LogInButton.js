import { Link } from "react-router-dom";

function LogInButton() {

    return (
      <div className="LogInButton">
          <Link to="/login">
            Logga in
          </Link> 
      </div>
    );
  }
  
  export default LogInButton;