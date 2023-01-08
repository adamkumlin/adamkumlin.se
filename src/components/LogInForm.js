function LogInForm() {

  return (
    <div className="LogInForm">
        <div className="inputContainer">
          <label>Användarnamn</label>
          <input type="text" name="password"/>
        </div>
        <div className="inputContainer">
          <label>Lösenord</label>
          <input type="password" name="password"/>
        </div>
        <button>Logga in</button>
    </div>
  );
}
  
export default LogInForm;