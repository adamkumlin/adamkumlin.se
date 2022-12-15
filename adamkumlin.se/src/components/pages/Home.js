import NavBar from "../NavBar";
import backgroundVideo from "../../images/background-video.mp4";

function Home() {
    return (
      <div className="Home">
        <video className="backgroundVideo" autoplay muted>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
        <NavBar/>
      </div>
    );
  }
  
  export default Home;