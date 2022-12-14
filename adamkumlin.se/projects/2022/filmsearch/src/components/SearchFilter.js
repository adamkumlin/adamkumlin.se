import React from "react";
// Importerar "React".

function SearchFilter(props) {
// Skapar en ny komponent som använder props. Komponenten ska agera som en sökfunktion för användare att skriva i och söka fram resultat.

  return (
    <div className="SearchFilter">
      <input type="text" placeholder="Sök..." onChange={props.changeQuery}/>
      <button onClick={props.searchBooks}>Sök</button>
    </div>
  )
  // Skapar en input av typen "text". När text skrivs in i textboxen så tar funktionen med hjälp av props med sig onChange-funktionen "changeQuery()" från själva komponenten i "App.js". Denna funktion är speciell, den är skapad inuti komponenten i "App.js". Även ett button-element skapas, det ska agera som en sökknapp. Knappen tar med sig onClick-funktionen "searchBooks()" från komponenten i "App.js" med hjälp av props.
}

export default SearchFilter;
// Exporterar komponenten som "SearchFilter".