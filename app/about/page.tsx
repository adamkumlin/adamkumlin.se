"use client";
import * as React from "react";
import * as Head from "next/head";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";

const About = () => {
    return (
      <div className="About">
        <Background/>
 
        <HomeButton/>
          
          <h2 className="heading">Hej!</h2>

          <p> Välkommen till min webbplats!</p>
          
          <p>Jag heter Adam och är mycket intresserad av webbutveckling och övrig programmering.</p>
          
          <p>Jag går just nu sista året på Webbredaktörsprogrammet på Högskolan i Borås. Genom min utbildning har jag lärt mig programmering med JavaScript samt kodning med HTML och CSS. Jag är också kunnig inom flera frontend-frameworks som React.
            Utbildningen har också givit mig kunskap inom redaktionellt arbete som skrivande och fotoredigering. Slutligen har användbarhet, att en produkt ska kunna vara tillgänglig och enkel att använda,
            varit centralt under hela utbildningen. </p>
            
          <p>Jag är också relativt kunnig gällande backend-utveckling med PHP, Python och Node.js, samt med databasspråket SQL.</p>
          
        <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
      </div>
    );
  }
  
  export default About;