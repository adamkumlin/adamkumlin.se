import Footer from "../Footer.tsx";
import Background from "../Background.tsx";
import LogInForm from "../LogInForm.tsx";
import HomeButton from "../HomeButton.tsx";

function LogIn() {

  return (
    <div className="LogIn">
      <Background/>

      <HomeButton/>

      <h2 className="heading">Logga in</h2>

      <LogInForm/>
      <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
    </div>
  );
}
  
export default LogIn;