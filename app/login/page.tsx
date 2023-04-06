"use client";
import * as React from "react";
import LogInForm from "../components/LogInForm";
import HomeButton from "../components/HomeButton";

// Log In page

const LogIn: React.FC = () => {
  return (
    <div className="LogIn">

      <HomeButton />

      <h2 className="heading">Logga in</h2>

      <LogInForm usernameLabel="Användarnamn" passwordLabel="Lösenord" />
    </div>
  );
};

export default LogIn;
