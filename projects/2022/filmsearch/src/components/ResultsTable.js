import React from "react";
// Importerar "React".

function ResultsTable(props) {
// Skapar en ny komponent som använder props. Komponenten ska visa information om böcker som söks fram.

  if (props.data.length < 1) {
  // Om "props.data":s längd är mindre än 1. Det betyder att inget returnerades/har ännu returnerats från sökningen.

    return <div></div>;
    // Returnera en tom div. If-satsen gör så att tabellen bara returneras om det faktiskt finns data att visa. Om denna if-sats inte finns så är tabellen tom med endast th-elementen synliga tills något/några resultat hittas.

  } else {
    
    return (
    // Annars returneras komponentens innehåll som vanligt.

      <div className="ResultsTable">
        <table cellSpacing="0">{/* Tabellen ges inget utrymme mellan resultaten med hjälp av cellSpacing="0". */}
          <thead>
            <tr>
              <th>Författare</th>
              <th>Titel</th>
              <th>Första utgivningsår</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((bookResult, bookResultIdentifier) => {
            // Använder metoden map() för att skriva ut array:en "data":s information från "App.js". Objektet "bookResult" och numret "bookResultIdentifier" skapas, "bookResult" fylls med böckerna som framkom från sökningen. Varje bok får en speciell identifierare med sig ("bookResultIdentifier") i form av ett nummer (0 - x).
            
              let name;
              if (!bookResult.author_name) {
                name = <b>Ingen författare hittades</b>;
              } else {
                name = bookResult.author_name.slice(0, 1);
                // Först deklareras en variabel som ska innehålla ett av två olika värden. Sedan körs en if sats som kontrollerar så att en författare är falsk, dvs. odefinierad (att den inte finns). Då ges "name" ett felmeddelande i ett b-element. B-elementet göt texten fet, då sticker texten ut. Annars ges "name" array:ens data. Endast den första författaren skrivs ut med hjälp av metoden slice(). Anledningen till varför denna if-sats existerar är för att om något som söks på inte ger några resultat alls så försöker åndå funktionen nedan använda metoden slice() på en array som inte existerar. Då krashar programmet. Med hjälp av denna if-sats undviks detta.
              }

              let title;
              if (!bookResult.title) {
                title = <b>Ingen titel hittades</b>;
              } else {
                title = bookResult.title;
                // Först deklareras en variabel som ska innehålla ett av två olika värden. Sedan körs en if sats som kontrollerar så att en titel är falsk, dvs. odefinierad (att den inte finns). Då ges "title" ett felmeddelande i ett b-element. B-elementet gör texten fet, då sticker texten ut. Annars ges "titel" array:ens data. If-satsens funktion är att endast visa attributet om det faktitskt existerar.
              }

              let first_publish_year;
              if (!bookResult.first_publish_year) {
                first_publish_year = <b>Inget utgivningsår hittades</b>;
              } else {
                first_publish_year = bookResult.first_publish_year;
                // Först deklareras en variabel som ska innehålla ett av två olika värden. Sedan körs en if sats som kontrollerar så att ett utgivningsår är falskt, dvs. odefinierad (att det inte finns). Då ges "first_publish_year" ett meddelande i ett b-elememt. B-elementet gör texten fet, då sticker texten ut. Annars ges "first_publish_year" array:ens data. If-satsens funktion är att endast visa attributet om det fakitkst existerar.
              }

              return (
                
              <tr key={bookResultIdentifier} onClick={() => props.showDetails(bookResultIdentifier)}>
              {/* Varje rad av td-element om varje bok ges en unik identifierare ("bookResultIdentifier"). onClick-funktionen "showDetails()" tar med sig identifieraren ("bookResultIdentifier") som parameter. När en bok klickas på så tas alltså dess identifierare också med. Funktionen "showDetails()" hämtas från komponenten i "App.js" med hjälp av props. "key" används då det hjälper React att identifiera vilket objekt som har ändrats. */}
              
                <td>{name}</td>
                <td>{title}</td>
                <td>{first_publish_year}</td>
                {/* Sätter in variablerna i td-element. */}
              </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ResultsTable;
// Exporterar komponenten som "ResultsTable".