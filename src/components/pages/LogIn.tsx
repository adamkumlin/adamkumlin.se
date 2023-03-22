import * as React from "react";
import Footer from "../Footer";
import Background from "../Background";
import LogInForm from "../LogInForm";
import HomeButton from "../HomeButton";

const LogIn = () => {

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