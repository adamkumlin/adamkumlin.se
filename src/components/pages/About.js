import Footer from "../Footer.js";
import Background from "../Background.js";
import HomeButton from "../HomeButton.js";

function About() {
    return (
      <div className="About">
        <Background/>

        <HomeButton/>
          
          <h2 className="heading">Hej!</h2>

          <p>
            Välkommen till min webbplats! Jag heter Adam och är mycket intresserad av webbutveckling och övrig programmering. Jag går just nu sista året på Webbredaktörsprogrammet på
            Högskolan i Borås. Genom min utbildning har jag lärt mig programmering med JavaScript samt kodning med HTML och CSS. Jag är också kunnig inom flera frontend-frameworks som React.
            Utbildningen har också givit mig kunskap inom redaktionellt arbete som skrivande och fotoredigering. Slutligen har användbarhet, att en produkt ska kunna vara tillgänglig och enkel att använda,
            varit centralt under hela utbildningen. Jag är också relativt kunnig gällande backend-utveckling med PHP, Python och Node.js, samt med databasspråket SQL.
          </p>
        <Footer/>
      </div>
    );
  }
  
  export default About;