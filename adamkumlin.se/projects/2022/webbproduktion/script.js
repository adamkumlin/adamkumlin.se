const uriStudents = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students";
// Länkar en URI till en konstant så den blir lättare att jobba med.

let formUsername = document.getElementById("formUsername");
let formPassword = document.getElementById("formPassword");
let formSubmit = document.getElementById("formSubmit");
let errorMessage = document.getElementById("errorMessage");
// Skapar fyra variabler som kopplas till sina respektive element.

formSubmit.addEventListener("click", (event) => {
// Knappen lyssnar efter ett tryck. Den tar med sig "form" som parameter.

  event.preventDefault();
  // Gör så att knappen inte skickar in formuläret via en GET-request. Då visas användarnamnet och lösenordet i webbläsarens adressfält och webbsidan uppdateras när knappen trycks på. I detta formulär vill vi inte skicka något utan bara jämföra textboxarnas värden med API:ens data. "submit-knappen":s vanliga funktion ändras alltså.

  if (formUsername.value === "" || formPassword.value === "") {
  // Om någon av textboxarna "formUsername" och "formPassword" är tomma. Denna if-sats behöver egentligen inte vara med, men om den är sann så ger den ett mer specifikt felmeddelande till användaren. Det blir bättre feedback.

    errorMessage.innerText = "Skriv in ditt användarnamn och lösenord.";
    // Skriver ut ett felmeddelande till användaren.

  } else {
  // Om if-satsen ej är sann så betyder det att textboxarna ej är tomma. Då sker nästa steg. Genom att lägga fetch-delen av koden i en else-sats så körs den inte alls om någon textbox är tom. Det är bra för prestandan.

    fetch(uriStudents)
      .then(response => response.json())
      // Hämtar de olika data från API:en, gör om de till flera JSON-objekt.

        .then(data => {

          let logInSuccessful = false;
          // Skapar en boolean som ska hålla koll på om inloggningsförsök lyckas eller ej. Värdet sätts till "false".
          
          for (let i = 0; i < data.length; i++) {
          // For-loopen kör så länge det finns data-objekt (användarnamn och lösenord) att gå igenom. Detta görs genom att sätta "i < data.length".

            if (data[i].login.username === formUsername.value && data[i].login.password === formPassword.value) {
            // Om användarnamnet för variabeln "i" stämmer är det samma som är inskrivet i textboxen "formUsername" och lösenordet för variabeln "i" är det samma som är inskrivet i textboxen "formUsername". If-satsen går igenom alla 185 par av användarnamn och lösenord med hjälp av variabeln "i" från for-loopen. Om något av dessa 185 par av användarnamn och lösenord matchar det användarnamn och lösenord som skrevs in i textboxarna så körs koden under.

              logInSuccessful = true;
              // Boolean:en "logInSuccessful":s värde ändras till "true".

              sessionStorage.setItem("username", data[i].login.username);
              // Om inloggningen lyckas så lagras användarens användarnamn med hjälp av sessionStorage. Här lagras användarnamnet i "username".

              window.location.href="landing_pages/course_information.html";
              // Skickar vidare användaren till sidan "course_informaton.html".
            }
          }

          if (logInSuccessful === false) {
          // Om logInSuccessful är lika med "true". Det betyder att försöket att logga in ovan ej lyckades då boolean:en "logInSuccessful":s värde ej ändrades till "true".

            errorMessage.innerText = "Du har skrivit in fel användarnamn eller lösenord.";
            // Skriver ut ett felmeddelande till användaren.
          }
        })
        .catch(error => console.log(error));
        // Koden har som funktion att fånga eventuella fel som kan uppstå med fetch()-metoden och skriva ut dem till konsolen.
  }
});