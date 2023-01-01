import React from "react";
// Importerar "React".

function InformationCard(props) {
// Skapar en ny komponent som använder props. Komponenten ska visa information om samtliga filmer.
    
  return (
    <div className="InformationCard">
      <h2>{props.title}</h2>
      <p>Regissör: {props.director}</p>
      <p>Producent(er): {props.producer}</p>
      <p>{props.opening_crawl}</p>
      <p>Utgivningsdatum: {props.release_date}</p>
    </div>
  )
  {/* Med hjälp av props får elementen/delar av elementen värdet som återfinns i "App.js". */}
}

export default InformationCard;
// Exporterar komponenten som "InformationCard".