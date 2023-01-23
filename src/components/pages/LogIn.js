import Footer from "../Footer.js";
import Background from "../Background.js";
import LogInForm from "../LogInForm.js";
import HomeButton from "../HomeButton.js";

function LogIn() {

  return (
    <div className="LogIn">
      <Background/>

      <HomeButton/>

      <h2 className="heading">Logga in</h2>

      <LogInForm/>
      <Footer/>
    </div>
  );
}
  
export default LogIn;