import backgroundVideo from "../../images/background-video.mp4";
import BackButton from "../BackButton";
import ContactOptions from "../ContactOptions";

function Contact() {
    return (
      <div className="Contact">

        <div className="background">
          <div className="backgroundOverlay"></div>
          <video className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
              <source src={backgroundVideo} type="video/mp4"/>
          </video>
        </div>

        <h2 className="heading">Kontakta mig</h2>

        <BackButton/>

        <ContactOptions/>
      </div>
    );
  }
  
  export default Contact;