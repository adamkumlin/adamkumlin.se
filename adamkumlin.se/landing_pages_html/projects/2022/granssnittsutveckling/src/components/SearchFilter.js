import React from "react";
// Importerar "React".

function SearchFilter(props) {
// Skapar en ny komponent som använder props. Komponenten ska agera som ett sökfält för användare att skriva i och söka fram resultat. Komponenten ska också visa antal sökresultat.

  return (
    <div className="SearchFilter">
      <input type="text" value={props.searchFilms} placeholder="Sök..." onChange={props.onChange}/>
      <p>Antal resultat: {props.innerText}</p>
    </div>
  )
  {/* Skapar en input av typen "text". När text skrivs in i textboxen så tar funktionen med hjälp av props med sig onChange-funktionen från själva komponenten i "App.js". Den ges dessutom en placholder och ett värde, igen med hjälp av props. Värdet hämtas från komponentens givna värde i "App.js". Även ett p-element skapas, en del av elementets innehåll blir "innerText" från komponenten i "App.js". Detta görs återigen med hjälp av props. */}
}

export default SearchFilter;
// Exporterar komponenten som "SearchFilter".