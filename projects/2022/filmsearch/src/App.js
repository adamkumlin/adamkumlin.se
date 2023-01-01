import React, { useState } from "react";
import SearchFilter from "./components/SearchFilter.js";
import DetailsBox from "./components/DetailsBox.js";
import ResultsTable from "./components/ResultsTable.js";
import "./style.css";
// Importerar "React" (med hook:en State) och tre komponenter. Slutligen importeras också styling.

export default function App() {

  const [books, setBooks] = useState([]);
  // Skapar en ny state-variabel "books" som ska innehålla API:ens data. En tom array blir standardvärdet.

  const [query, setQuery] = useState("");
  // Skapar en state-variabel som ska innehålla ett sökord. En tom sträng blir standardvärdet.

  const [activeBook, setActiveBook] = useState(null);
  // Skapar en state-variabel som ska innehålla information om en viss bok. Null (inget värde alls) blir standardvärdet.

  let uri = `https://openlibrary.org/search.json?title=${query}`;
  // Skapar en variabel "uri" som innehåller länken som används för att söka på böckers titlar. State-variabeln "query" sätts in här.

  function searchBooks() {
  // Skapar en funktion som ska ta hand om sökningen.

    if (query === "") {
    // Om "query" är tomt, alltså om sökfältet är tomt när knappen "Sök" trycks på.

      alert("Fel: sökfältet är tomt.")
      // Visar ett felmeddelande.

    } else {

      fetch(uri)
        .then(response => response.json())
        .then(data => setBooks(data.docs));
      // Annars hämtas API:ens data som görs om till flera JSON-objekt. Array:en data blir state-variabeln "books" nya värde. Endast de böcker som matchar sökordet hämtas.
    }

    setActiveBook(null);
    // Sätter activeBook till null (inget värde alls) när knappen "Sök" klickas på. Då försvinner den nuvarande boken i "DetailsBox". Det gör komponenten mer användarvänlig, eventuell förvirrning undviks.
  }

  function showDetails(identifier) {
  // Skapar en funktion som ska hantera visning av detaljer om en bok åt gången. "identifier" används för att funktionen ska veta vilken bok som ska visas.
    
    setActiveBook(books[identifier]);
    // State-variabeln får värdet "books" (array:en med böcker) och tar med sig en speciell identifierare. Detta gör det möjligt att veta vilken boks detaljer som ska visas i komponenten "DetailsBox". Det första resultatet i listan över böcker får identifieraren 0, den andra får 1, osv.
  }

  return (
    <main>

      <h1>Sök bok</h1>
      {/* Skapar en huvudrubrik. */}

      <SearchFilter searchBooks={searchBooks} changeQuery={event => setQuery(event.target.value)}/>
      {/* Sätter in komponenten "SearchFilter". Den ges en onClick-funktion och en onChange-funktion. Skapar en funktion som heter "changeQuery". Funktionen ändrar state-variabeln "query":s värde till det sökord som skrevs in i sökfältet. */}

      <DetailsBox chosenBook={activeBook}/>
      {/* Sätter in komponenten "DetailsBox". "chosenBook" får state-variabeln "activeBook":s data. */}

      <ResultsTable data={books.slice(0, 30)} showDetails={showDetails}/>
      {/* Sätter in komponenten "ResultsTable". Komponenten ges en onClick-funktion, "data" ges array:en "books":s data. Med hjälp av slice(0, 30) skickas endast de 30 första matchande resultaten till komponenten. "showDetails" anropar funktionen "showDetails()". */}
    </main>
  );
}