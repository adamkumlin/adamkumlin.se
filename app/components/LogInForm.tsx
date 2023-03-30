"use client";
import * as React from "react";

type LogInFormProps = {
  usernameLabel: string;
  passwordLabel: string;
}

const LogInForm = ({usernameLabel, passwordLabel}: LogInFormProps) => {

  return (
    <div className="LogInForm">
      <form action="/logIn.php" method="post" name="logInForm">
        <div className="inputContainer">
          <label htmlFor="username">{usernameLabel}</label>
          <input id="username" type="text" name="username"/>
        </div>

        <div className="inputContainer">
          <label htmlFor="password" >{passwordLabel}</label>
          <input id="password" type="password" name="password"/>
        </div>
        
        <input type="submit" value="Logga in"/>
      </form>
    </div>
  );
}
  
export default LogInForm;