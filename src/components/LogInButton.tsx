import * as React from "react";
import { Link } from "react-router-dom";

type LogInButtonProps = {
  text: string;
}

const LogInButton = ({text}: LogInButtonProps) => {

    return (
      <div className="LogInButton">
          <Link to="/login">
            {text}
          </Link> 
      </div>
    );
  }

export default LogInButton;