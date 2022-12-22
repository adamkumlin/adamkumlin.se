import backgroundVideo from "../../images/background-video.mp4";

function Contact() {
    return (
      <div className="Contact">
        <div className="background">
          <div lassName="backgroundOverlay"></div>
          <video className="backgroundVideo" autoPlay="autoPlay" muted="muted" loop="loop">
              <source src={backgroundVideo} type="video/mp4"/>
          </video>
      </div>
        <h2>Kontakta mig</h2>
      </div>
    );
  }
  
  export default Contact;
  