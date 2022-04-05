const uriQuiz = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz";
const uriCourses = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses";
// Länkar två URI:er till konstanter så de blir lättare att jobba med.

// Hämtar och skriver ut kursinformation-----------------------------------------------------------------------------------------------------------------------------------------

function processCourseData(data) {
  
  let templateCourses = document.getElementById("templateCourses");
  let coursesContainer = document.getElementById("coursesContainer");
  //Länkar två olika variabler till två olika element.

  for (let i = 0; i < data.length; i++) {
  // For-loopen kör så länge det finns data-objekt (kurser) att gå igenom. Detta görs genom att sätta "i < data.length".

    let cloneCourses = templateCourses.content.cloneNode(true);
    // Skapar en variabel som ska klona template:ns innehåll. Alla dess barn (elementen i klonen) klonas också eftersom värdet "true" används i cloneNode().

    cloneCourses.querySelector(".courseName").innerHTML = data[i].courseName;
    cloneCourses.querySelector(".courseId").innerHTML = `<b>Kurs-ID:</b> ${data[i].courseId}`;
    cloneCourses.querySelector(".courseCredits").innerHTML = `<b>Antal högskolepoäng:</b> ${data[i].credit} hp`;
    cloneCourses.querySelector(".courseStartWeek").innerHTML = `<b>Period:</b> vecka ${data[i].startWeek} - `;
    cloneCourses.querySelector(".courseEndWeek").innerHTML = `vecka ${data[i].endWeek}`;
    cloneCourses.querySelector(".courseSchool").innerHTML = `<b>Högskola/universitet:</b> ${data[i].school}`;
    // Lägger in data från JSON-filen i de olika elementen. Detta görs för alla 10 objekt med hjälp av for-loopens variabel "i" längre upp. Respektive elements "innerHTML" ges JSON-filens data. I de flesta elementen läggs HTML-taggar och/eller text in också.

    coursesContainer.appendChild(cloneCourses);
    // Slutligen läggs klonernas innehåll in i en div med hjälp av appendChild.
  }
}

fetch(uriCourses)
  .then(response => response.json())
  // Hämtar de olika data från API:en, gör om de till flera JSON-objekt.

  .then(data => processCourseData(data))
  // Sedan används "data":n i funktionen processCourseData(), den anropas.
  
  .catch(error => console.log(error));
  // Koden har som funktion att fånga eventuella fel som kan uppstå med fetch()-metoden och skriva ut dem till konsolen.

// Hämtar och skriver ut kursinformation-----------------------------------------------------------------------------------------------------------------------------------------

// Hämtar och skriver ut quizdata------------------------------------------------------------------------------------------------------------------------------------------------

function processQuizData(data) {
  
  let templateQuiz = document.getElementById("templateQuiz");
  let quizContainer = document.getElementById("quizContainer0");
  //Länkar två olika variabler till olika element i html-filen.

  for (let i = 0; i < 4; i++) {
  // For-loopen kör fyra gånger. Den tar då alltså med de första fyra frågorna (0 till och med 3) som alla har fyra svarsalternativ var.
    
    let cloneQuiz = templateQuiz.content.cloneNode(true);
    // Skapar en variabel som ska klona template:ns innehåll. Alla dess barn (elementen i klonen) klonas också eftersom värdet "true" används i cloneNode().
    
    cloneQuiz.querySelector(".questionNumber").textContent = `Fråga ${[i + 1]}`; // Lägger till +1 till i:et då det börjar på 0.
    cloneQuiz.querySelector(".question").textContent = data[i].question;
    cloneQuiz.querySelector(".alternative0").textContent = data[i].incorrect_answers[0];
    cloneQuiz.querySelector(".alternative1").textContent = data[i].incorrect_answers[1];
    cloneQuiz.querySelector(".alternative2").textContent = data[i].correct_answer;
    cloneQuiz.querySelector(".alternative3").textContent = data[i].incorrect_answers[2];
    // Lägger in data från JSON-filen i de olika elementen. Detta görs för alla objekt med hjälp av variabeln "i" från for-loopen längre upp. Respektive elements "textContent" ges JSON-filens data.

    quizContainer.appendChild(cloneQuiz);
    // Slutligen läggs klonernas innehåll in i en div med hjälp av appendChild.
  }

  document.querySelector("#quizContainer4 .question").textContent = data[4].question;
  document.querySelector("#quizContainer4 .alternative0").textContent = data[4].incorrect_answers[0];
  document.querySelector("#quizContainer4 .alternative1").textContent = data[4].correct_answer;

  document.querySelector("#quizContainer5 .question").textContent = data[5].question;
  document.querySelector("#quizContainer5 .alternative0").textContent = data[5].correct_answer;
  document.querySelector("#quizContainer5 .alternative1").textContent = data[5].incorrect_answers[0];
  document.querySelector("#quizContainer5 .alternative2").textContent = data[5].incorrect_answers[1]
  document.querySelector("#quizContainer5 .alternative3").textContent = data[5].incorrect_answers[2];

  document.querySelector("#quizContainer6 .question").textContent = data[6].question;
  document.querySelector("#quizContainer6 .alternative0").textContent = data[6].incorrect_answers[0];
  document.querySelector("#quizContainer6 .alternative1").textContent = data[6].correct_answer;
  document.querySelector("#quizContainer6 .alternative2").textContent = data[6].incorrect_answers[1];

  document.querySelector("#quizContainer7 .question").textContent = data[7].question;
  document.querySelector("#quizContainer7 .alternative0").textContent = data[7].incorrect_answers[0];
  document.querySelector("#quizContainer7 .alternative1").textContent = data[7].correct_answer;
  document.querySelector("#quizContainer7 .alternative2").textContent = data[7].incorrect_answers[1];
  document.querySelector("#quizContainer7 .alternative3").textContent = data[7].incorrect_answers[2];

  document.querySelector("#quizContainer8 .question").textContent = data[8].question;
  document.querySelector("#quizContainer8 .alternative0").textContent = data[8].incorrect_answers[0];
  document.querySelector("#quizContainer8 .alternative1").textContent = data[8].incorrect_answers[1];
  document.querySelector("#quizContainer8 .alternative2").textContent = data[8].incorrect_answers[2];
  document.querySelector("#quizContainer8 .alternative3").textContent = data[8].correct_answer;

  document.querySelector("#quizContainer9 .question").textContent = data[9].question;
  document.querySelector("#quizContainer9 .alternative0").textContent = data[9].incorrect_answers[0];
  document.querySelector("#quizContainer9 .alternative1").textContent = data[9].correct_answer;
  // Lägger in resten av frågornas data i sina respektive element. Anledningen varför dessa data ej kan loopas igenom är för att alla frågor inte har fyra alternativ. Några frågor har tre alternativ och en har två alternativ. Därför går det inte att loopa igenom dessa då t.ex. de med två alternativ får två alternativ till av template:n som de egentligen inte har.
}

fetch(uriQuiz)
  .then(response => response.json())
  // Hämtar de olika data från API:en, gör om det till en JSON.

  .then(data => processQuizData(data))
  // Sedan används "data":n i funktionen processQuizData(), den anropas.

  .catch(error => console.log(error));
  // Koden har som funktion att fånga eventuella fel som kan uppstå med fetch()-metoden och skriva ut dem till konsolen.

// Hämtar och skriver ut quizdata------------------------------------------------------------------------------------------------------------------------------------------------

// Skriver ut den inloggade användarens namn på webbsidan------------------------------------------------------------------------------------------------------------------------

function displayUserData() {

    let username = document.getElementById("username");
    // Skapar variabeln "username", kopplar den till sitt respektive element.
  
    if (sessionStorage.length < 1 || sessionStorage.getItem("username") === null) {
    // Om sessionStorage:s längd är mindre än 1, alltså om det är tomt. Eller om "username" innehåller null, detta är till för om webbplatsen besöks med hjälp av t.ex. "Live Server" (en VS Code-extension). "Live Server" förser sessionStorage med data, men inte i "username". Dessa påståenden är endast sanna om sidan "course_information.html" visas utan att ha loggat in på sidan "index.html". 
  
      username.innerHTML= `<a href="../index.html">Logga in</a>`;
      // Gör så att elementet visar en länk som leder till sidan "index.html" där användaren kan logga in.
  
    } else {
  
      username.innerText = `Välkommen ${sessionStorage.getItem("username")}!`;
      // Annars ges elementet "username" det lagrade användarnamnet från "username" via sessionStorage. Nu kan den inloggade användaren se sitt användarnamn på webbsidan som hen loggade in på. Med hjälp av sessionStorage kommer webbläsaren ihåg vad användarnamnet var, men det gör endast det tills webbsessionen avslutas (tills fönstret stängs).
    }
}

// Skriver ut den inloggade användarens namn på webbsidan------------------------------------------------------------------------------------------------------------------------