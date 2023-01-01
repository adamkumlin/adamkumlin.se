import React, { useEffect, useState } from "react";
import SearchFilter from "./components/SearchFilter.js";
import InformationCard from "./components/InformationCard.js";
import "./style.css";
// Importerar "React" (med hook:arna Effect och State) och två komponenter. Slutligen importeras också styling.

export default function App() {

  const [films, setFilms] = useState([]);
    useEffect(() => {
      fetch("https://swapi.dev/api/films/")
        .then(response => response.json())
        .then(data => setFilms(data.results))
        // State-variabeln "films" får data.results. Variabeln innehåller nu samtliga data från API:et.
    }, []);
  // Hämtar data från API:et. Gör om de till flera JSON-objekt.

  const [searchInput, setSearchInput] = useState("");
  // Skapar en ny funktion som ska ta hand om sökandet i sökrutan. "useState" sätts till en tom sträng då en en sträng är det som kommer att skrivas in i sökrutan.

  return (
    <main>

      <h1>Sök film</h1>
      {/* Skapar en huvudrubrik. */}

      <SearchFilter value={searchInput} onChange={event => {setSearchInput(event.target.value)}} innerText={films.filter(function(results) {
      // Sätter in komponenten "SearchFilter". Den ges ett värde, "searchInput" vilket är sökfrasen. Den ges också ett onChange-event. Med hjälp av state-variabeln "searchInput" tar onChange-eventet med sig det som skrevs in i sökfältet. Den ges slutligen en innerText som skriver ut längden på funktionen som filtrerar resultat från sökfrasen. Funktionen förklaras längre ned.

        if (searchInput === "") {

          return null;

        } else if (results.title.toLowerCase().includes(searchInput.toLowerCase())) {

          return results;
        }
      }).length}/>
      {/* Längden på callback-funktionen "results" skrivs ut, om t.ex. tre filmer matchar en viss söksträng så blir längden på funktionen 3. Denna funktion förklaras nedan. */ }

      {films.filter(function(results) {
      // Använder metoden filter() på array:en "films" för att gå igenom filmerna. Callback-funktionen tar med sig "results", "results" representerar antalet objekt i array:en (films) som matchar sökfrasen. Alltså, array:en "films" kommer att filtreras och endast de objekt som går igenom if-satserna nedan kommer att gå igenom. Slutligen gör "results" en ny array av de objekt (filmer) som gick igenom filtret och returnerar dem.

        if (searchInput === "") {
        // Om sökfrasen är tom. Det gör så att inga resultat visas om sökfältet är tomt.

          return null;
          // Returnera null (alltså inget värde alls, vilket gör så att inga resultat (filmer) returneras heller)). Alternativt kan "results" returneras istället och då visas alla resultat om sökfältet är tomt. För tydlighetens skull så görs inte detta.

        } else if (results.title.toLowerCase().includes(searchInput.toLowerCase())) {
        // Annars om sökfrasen (searchInput) inkluderar något av filmernas titlar (results.title). Detta uppnås med metoden includes(). Fortsättningsvis görs detta ej skiftlägeskänsligt med metoden toLowerCase(). Alla resultat och sökfraser görs först om till små bokstäver och sedan jämförs dessa med varandra. Då spelar det ingen roll om stora- och/eller små bokstäver används i sökfältet.

          return results;
          // Returnera eventuella resultat från sökfrasen och visa dem i komponenten "InformationCard". Detta förklaras ytterligare nedan. "results" innehåller samtliga eventuella resultat från sökfraen.
        }
      }).slice(0, 1).map(({episode_id, title, director, producer, opening_crawl, release_date}) => (
        // Med hjälp av metoden slice() så visas endast ett arrayobjekt om gången. Nu visas det första matchande objektet (filmen), och om sökfrasen matchar fler så visas fortfarande bara ett objekt om gången. P-elementet i komponenten "SearchFilter" skriver dock fortfarande ut samtliga resultat, inte bara ett om gången. Nu kommer vi till koden som faktiskt visar resultaten för användaren. Först används metoden map() på den filtrerade array:en (films). Den loopar igenom alla titlar (title), regissörer (director), osv. Beroende på vad som gick igenom filtret (om sökresultaten matchade filmernas titlar ("results")) så visas information om filmerna nedan i komponenten "InformationCard".
        
        <InformationCard key={episode_id} title={title} director={director} producer={producer} opening_crawl={opening_crawl} release_date={release_date}/>
        // Sätter in en komponent som med hjälp av props ges titel, regissör, producent, sammanfattning (opening_crawl) och utgivningsdatum. Även "episode_id" tas in och denna blir en key. Denna key hjälper react att identifiera vilket objekt som har ändrats.
      ))}
    </main>
  );
}
