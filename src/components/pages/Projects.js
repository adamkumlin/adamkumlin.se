import Footer from "../Footer.js";
import Background from "../Background.js";
import HomeButton from "../HomeButton.js";
import Calculator from "../Calculator.js";

function Projects() {

    return (
      <div className="Projects">
        <Background/>

        <HomeButton/>

        <h2>2022</h2>
        
        <h3>Ehnsbbq.se</h3>
        
        <p>Denna webbplatsen skapade jag för företaget Ehns BBQ som var en del av ett skolprojekt. Webbplatsen innehöll också en kontaktfunktion som skapades med PHP.</p>

        <iframe src="https://adamkumlin.se/ehnsbbq/index.html"/>

        <Calculator/>

        <Footer/>
      </div>
    );
  }
  
  export default Projects;