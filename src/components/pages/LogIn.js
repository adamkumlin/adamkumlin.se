import Footer from "../Footer.js";
import backgroundVideo from "../../images/background-video.mp4";
import LogInForm from "../LogInForm.js";

function LogIn() {

  return (
    <div className="LogIn">
      <div className="background">
          <div className="backgroundOverlay"></div>
          <video className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
              <source src={backgroundVideo} type="video/mp4"/>
          </video>
      </div>

      <h2 className="heading">Logga in</h2>

      <LogInForm/>
      <Footer/>
    </div>
  );
}
  
export default LogIn;