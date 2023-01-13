function LogInForm() {

  return (
    <div className="LogInForm">
      <form action="/logIn.php" method="post" name="logInForm">
        <div className="inputContainer">
          <label htmlFor="username">Användarnamn</label>
          <input id="username" type="text" name="username"/>
        </div>

        <div className="inputContainer">
          <label htmlFor="password" >Lösenord</label>
          <input id="password" type="password" name="password"/>
        </div>
        
        <input type="submit" value="Skicka"/>
      </form>
    </div>
  );
}
  
export default LogInForm;