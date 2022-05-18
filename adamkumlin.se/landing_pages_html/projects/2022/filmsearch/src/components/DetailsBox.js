import React from "react";
// Importerar "React".

function DetailsBox(props) {
// Skapar en ny komponent som använder props. Komponenten ska visa mer detaljerad information om en viss bok som väljs.

  if (!props.chosenBook) {
  // Om "props.chosenBook" är falskt, alltså odefinierat (att array:en inte finns). Det betyder att ingen bok har valts att se detaljer om än. "chosenBook" innehåller state-variabeln "activeBook":s information.

    return <div></div>;
    // Returnera en tom div. Om if-satsen inte finns så försöker funktionen rendera en funktion med array:er som inte finns ännu då array:erna endast skapas när en boks titel klickas på i komponenten "ResultsTable".

  } else {
  // Annars fungerar komponenten som vanligt.

    let name;
    if (!props.chosenBook.author_name) {
      name = <b>Inga författare hittades</b>;
    } else {
      name = props.chosenBook.author_name.join(", ");
    }
  
    let title;
    if (!props.chosenBook.title) {
      title = <b>Ingen titel hittades</b>;
    } else {
      title = props.chosenBook.title;
    }
  
    let publisher;
    if (!props.chosenBook.publisher) {
      publisher = <b>Inga förlag hittades</b>;
    } else {
      publisher = props.chosenBook.publisher.join(", ");
    }
  
    let language;
    if (!props.chosenBook.language) {
      language = <b>Inga språk hittades</b>;
    } else {
      language = props.chosenBook.language.join(", ");
    }
  
    let subject;
    if (!props.chosenBook.subject) {
      subject = <b>Inga ämnen hittades</b>;
    } else {
      subject = props.chosenBook.subject.join(", ");
    }
    /* Med hjälp av props kan "chosenBook":s olika data hämtas. "chosenBook" representerar en viss specifik bok. Mer specifikt representerar "chosenBook" den boken som valdes i "ResultsTable":s tabell. Varje attribut får en variabel där informationen läggs in. Sedan körs flera if-satser som kontrollerar så att boken faktiskt har attributen som ska presenteras. Om ett attribut är falskt, dvs. odefinierat (att attrubutet inte finns) så får variabeln en sträng som förmedlar att inget attribut kunde hittas. Strängen finns i ett b-element så att texten blir fet, då sticker texten ut. Annars får respektive variabel sin tillhörande attributs information. Denna kontroll görs eftersom att vissa böcker inte har t.ex. språk (language) eller ämne (subject). Då krashar programmet eftersom att funktionen försöker använda metoden join() på en array som inte finns. I alla td-element förutom det andra används metoden join() för att göra array:ernas resultat till en enda sträng. Arrayobjekten separeras med ett kommatacken och ett mellanslag (", "). */
    
    return (
      <div className="DetailsBox">
              <p><b>Författare:</b> {name}</p>
              <p><b>Titel:</b> {title}</p>
              <p><b>Förlag:</b> {publisher}</p>
              <p><b>Språk:</b> {language}</p>
              <p><b>Ämne(n):</b> {subject}</p>
              {/* Variablerna längre upp läggs in i varsitt p-element. Attributens typer läggs in i b-element så att texten blir fet. */}
      </div>
    )
  }
}

export default DetailsBox;
// Exporterar komponenten som "DetailsBox".