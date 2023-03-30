"use client";
import * as React from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import LogInForm from "../components/LogInForm";
import HomeButton from "../components/HomeButton";

const LogIn: React.FC = () => {

  return (
    <div className="LogIn">
      <Background/>

      <HomeButton/>

      <h2 className="heading">Logga in</h2>

      <LogInForm usernameLabel="Användarnamn" passwordLabel="Lösenord"/>
      <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
    </div>
  );
}
  
export default LogIn;