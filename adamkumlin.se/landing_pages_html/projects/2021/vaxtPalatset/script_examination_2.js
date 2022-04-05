// Adam Kumlin, 31KDW1, Webbredaktörsprogrammet distans.

// Den här listan ska du anpassa efter dina behov - du får både ändra nyckel : och värde. 
// Men ha kvar name, description, image (du kan byta namn på dessa) då dessa måste finnas med i applikationen - de andra värdena kan du ändra.
// Du ska lägga till minst en produkt till i listan nedan, just nu finns endast 2 stycken. 
// "url till bild" får du ersätta med en riktig URL
var products =
    [
        {
            "name": "Murgröna",
            "origin": "Sverige",
            "height": "25 cm",
            "description": "Trevlig växt som är mycket lättskött. Ha den där det är ljust, undvik dock direkt solljus. Bör vattnas sparsamt.",
            "image": "bilder/murgrona.jpg",
            "price": 49
        },
        {
            "name": "Gullranka",
            "origin": "Belgien",
            "height": "25 cm",
            "description": "Grön växt som passar perfekt inne i utehuset. Trvis där det är ljust men undvik direkt solljus. Bör endast vattnas när den är torr.",
            "image": "bilder/gullranka.jpg",
            "price": 199
        },
        {
            "name": "Pelarkaktus",
            "origin": "Argentina",
            "height": "50 cm",
            "description": "En fin och tillfredställande växt som vattnas mycket sparsamt. Mycket lättskött, trivs i ljus och skugga. Vattnas då jorden torkat upp.",
            "image": "bilder/pelarkaktus.jpg",
            "price": 99
        }
    ];

document.getElementById("productName0").innerText = products[0].name;
document.getElementById("productOrigin0").innerText = "Land:" + " " + products[0].origin + ".";
document.getElementById("productHeight0").innerText = "Höjd:" + " " + products[0].height + ".";
document.getElementById("productDescription0").innerText = products[0].description;
document.getElementById("productImage0").src = products[0].image;
document.getElementById("productPrice0").innerText = products[0].price + " " + "kr";
// Lägger till products[0]:s data till den första produktens element genom att ändra elementens .innerText eller .src till respektive produkts information från arrayen "products".

document.getElementById("productName1").innerText = products[1].name;
document.getElementById("productOrigin1").innerText = "Land:" + " " + products[1].origin + ".";
document.getElementById("productHeight1").innerText = "Höjd:" + " " + products[1].height + ".";
document.getElementById("productDescription1").innerText = products[1].description;
document.getElementById("productImage1").src = products[1].image;
document.getElementById("productPrice1").innerText = products[1].price + " " + "kr";
// Lägger till products[1]:s data till den andra produktens element genom att ändra elementens .innerText eller .src till respektive produkts information från arrayen "products".

document.getElementById("productName2").innerText = products[2].name;
document.getElementById("productOrigin2").innerText = "Land:" + " " + products[2].origin + ".";
document.getElementById("productHeight2").innerText = "Höjd:" + " " + products[2].height + ".";
document.getElementById("productDescription2").innerText = products[2].description;
document.getElementById("productImage2").src = products[2].image;
document.getElementById("productPrice2").innerText = products[2].price + " " + "kr";
// Lägger till products[2]:s data till den tredje produktens element genom att ändra elementens .innerText eller .src till respektive produkts information från arrayen "products".

let productAmount0 = 0;
let productAmount1 = 0;
let productAmount2 = 0;
// Skapar tre variabler som håller koll på hur många av sin respektive produkt som användaren lägger till i sin varukorg.

let productCounter = 0;
// Skapar en variabel som håller koll på hur många produkter totalt som användaren lägger till i sin varukorg.

function countProducts() {

    document.getElementById("productCount0").innerText = "Antal:" + " " + productAmount0;
    // I h3-elementet bredvid produkten skrivs det ut hur många av produkten som har lagts till.
    
    document.getElementById("productCount1").innerText = "Antal:" + " " + productAmount1;
    // I h3-elementet bredvid produkten skrivs det ut hur många av produkten som har lagts till.
    
    document.getElementById("productCount2").innerText = "Antal:" + " " + productAmount2;
    // I h3-elementet bredvid produkten skrivs det ut hur många av produkten som har lagts till.

    if (productCounter == 0) {
    // Om productCounter har värdet 0.

        document.getElementById("productCounter").innerText = "";
        // Gör h2-taggen som visar hur många produkter som användaren lägger till i sin varukorg tom för att undvika förvirring.
    }
    else if (productCounter > 1) {
    // Eller om productCounter är större än 1.

        document.getElementById("productCounter").innerText = "Du har lagt till" + " " + productCounter + " " + "varor" + " " + "till din varukorg.";
        // Skriver ut det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.
    }
    else {
    // Annars.

        document.getElementById("productCounter").innerText = "Du har lagt till" + " " + productCounter + " " + "vara" + " " + "till din varukorg.";
        // Skriver ut det sammanlagda antalet produkter som användaren har lagt till i sin varukorg. Notera att ordet "varor" nu är "vara" då endast en produkt är tillagd i varukorgen.
    }
}

function addToCart(button) {
// Funktionen tittar på elementet "button" som anropade funktionen.

    switch (button.id) {
    // Funktionen får med sig knapparnas id. Beroende på knapparnas id så körs olika bitar kod.

        case "productAdd0":
        // Om knappen med id:t "productAdd0" klickas på så körs koden nedan.

            productAmount0++;
            // Adderar 1 till antalet produkter av "products[0]".

            productCounter++;
            // Adderar 1 till variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

            countProducts();
            // Skriver ut det uppdaterade antalet produkter av "products[0]" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

            document.getElementById("productPriceTotal").innerText = "";
            // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.

            break;
            // Skriver ut det uppdaterade antalet produkter. Stoppar switch-satsen.

        case "productAdd1":
        // Om knappen med id:t "productAdd1" klickas på så körs koden nedan.

            productAmount1++;
            // Adderar 1 till antalet produkter av "products[1]".

            productCounter++;
            // Adderar 1 till variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

            countProducts();
            // Skriver ut det uppdaterade antalet produkter av "products[1]"" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

            document.getElementById("productPriceTotal").innerText = "";
            // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.
            
            break;
            // Skriver ut det uppdaterade antalet produkter. Stoppar switch-satsen.

        case "productAdd2":
        // Om knappen med id:t "productAdd2" klickas på så körs koden nedan.

            productAmount2++;
            // Adderar 1 till antalet produkter av "products[2]".

            productCounter++;
            // Adderar 1 till variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

            countProducts();
            // Skriver ut det uppdaterade antalet produkter av "products[2]" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

            document.getElementById("productPriceTotal").innerText = "";
            // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.
        
            break;
            // Skriver ut det uppdaterade antalet produkter. Stoppar switch-satsen.
    }
}

function removeFromCart(button) {
// Funktionen tittar på elementet "button" som anropade funktionen.

    switch (button.id) {
    // Funktionen får med sig knapparnas id. Beroende på knapparnas id så körs olika bitar kod.

        case "productRemove0":
        // Om knappen med id:t "productRemove0" klickas på så körs koden nedan.

            if (productAmount0 == 0) {
            // Om "products[0]" är lika med 0 (vilket betyder att produkten inte finns i varukorgen) så visas ett felmeddelande.

                document.getElementById("productCount0").innerText =
                "Antal:" + " " + productAmount0 + "." + " " + "Error: Produkten" + " " + products[0].name.toLowerCase() + " " + "finns" + " " + "inte i din varukorg.";
                // Felmeddelandet inkluderar produktens namn som blir konverterat till små bokstäver. Felmeddelandet skrivs ut i span-elementet "productCount0".
            }
            else {
            // Annars.

                productAmount0--;
                // Subtraherar 1 från variabeln som räknar antalet produkter av "products[0]" som användaren lägger till i sin varukorg.

                productCounter--;
                // Subtraherar 1 från variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

                countProducts();
                // Skriver ut det uppdaterade antalet produkter av "products[0]" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

                document.getElementById("productPriceTotal").innerText = "";
                // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.
            }
            break;
            // Stoppar switch-satsen.
    
        case "productRemove1":
        // Om knappen med id:t "productRemove1" klickas på så körs koden nedan.

            if (productAmount1 == 0) {
            // Om "products[1]" är lika med 0 (vilket betyder att produkten inte finns i varukorgen) så visas ett felmeddelande.

                document.getElementById("productCount1").innerText =
                "Antal:" + " " + productAmount1 + "." + " " + "Error: Produkten" + " " + products[1].name.toLowerCase() + " " + "finns" + " " + "inte i din varukorg.";
                // Felmeddelandet inkluderar produktens namn som blir konverterat till små bokstäver. Felmeddelandet skrivs ut i span-elementet "productCount1".
            }
            else {
                productAmount1--;
                // Subtraherar 1 från variabeln som räknar antalet produkter av "products[1]" som användaren lägger till i sin varukorg.

                productCounter--;
                // Subtraherar 1 från variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

                countProducts();
                // Skriver ut det uppdaterade antalet produkter av "products[1]" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

                document.getElementById("productPriceTotal").innerText = "";
                // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.
            }
            break;
            // Stoppar switch-satsen.
    
        case "productRemove2":
        // Om knappen med id:t "productRemove2" klickas på så körs koden nedan.

            if (productAmount2 == 0) {
            // Om "products[2]" är lika med 0 (vilket betyder att produkten inte finns i varukorgen) så visas ett felmeddelande.

                document.getElementById("productCount2").innerText =
                "Antal:" + " " + productAmount2 + "." + " " + "Error: Produkten" + " " + products[2].name.toLowerCase() + " " + "finns" + " " + "inte i din varukorg.";
                // Felmeddelandet inkluderar produktens namn som blir konverterat till små bokstäver. Felmeddelandet skrivs ut i span-elementet "productCount2".
            }
            else {
            // Annars.

                productAmount2--;
                // Subtraherar 1 från variabeln som räknar antalet produkter av "products[2]" som användaren lägger till i sin varukorg.

                productCounter--;
                // Subtraherar 1 från variabeln som räknar antalet produkter som användaren lägger till i sin varukorg.

                countProducts();
                // Skriver ut det uppdaterade antalet produkter av "products[2]" samt det sammanlagda antalet produkter som användaren har lagt till i sin varukorg.

                document.getElementById("productPriceTotal").innerText = "";
                // Gör h2-taggen som innehåller antal produkter och pris, samt ett eventuellt felmeddelande tom för att undvika förvirring.
            }
            break;
            // Stoppar switch-satsen.
    }
}

function buy() {

    let productAmountTotal = productAmount0 + productAmount1 + productAmount2;
    // Skapar en variabel som summerar alla produkters enskilda antal.

    let productPriceTotal0 = productAmount0 * parseInt(products[0].price);
    let productPriceTotal1 = productAmount1 * parseInt(products[1].price);
    let productPriceTotal2 = productAmount2 * parseInt(products[2].price);
    // Skapar tre olika variabler som multiplicerar antalet av respektive produkt med den produktens pris.

    let productPriceTotal = parseInt(productPriceTotal0) + parseInt(productPriceTotal1) + parseInt(productPriceTotal2);
    // De tre variablernas resultat summeras och blir till ett enda totalpris.

    if (productPriceTotal == 0 || productAmountTotal == 0) {
    // Om totalpriset ("productPriceTotal") är mindre eller lika med 0 (vilket betyder att det inte finns någon produkt i varukorgen) eller om det totala antalet produkter-
    //("productAmountTotal") är lika med 0 så visas ett felmeddelande.

        document.getElementById("productPriceTotal").innerText = "Error: Din varukorg är tom.";
        // Skriver ut ett felmeddelande till h2-elementet "productPriceTotal" där totalpriset visas.
    }
    else if (productAmountTotal == 1) {
    // Om antalet produkter är 1 så utskrivs: "I varukorgen finns 1 vara. Totalpriset blir ("productPriceTotal":s värde vilket är antal kronor).

        document.getElementById("productPriceTotal").innerText =
        "I" + " " + "varukorgen" + " " + "finns" + " " + productAmountTotal + " " + "vara." + " " + "Totalpriset" + " " + "blir" + " " + productPriceTotal + " " + "kr.";
        // Skriver ut det totala antalet produkter ("productAmountTotal") och det totala priset ("productPriceTotal").
    }
    else {
    // Om ingen av de if-satserna ovan stämmer (det finns fler än 1 vara i varukorgen) så skrivs det istället ut: "I varukorgen finns (antalet varor) varor. Totalpriset blir (antal kronor)."
    // Notera att ordet "vara" istället blir "varor".

        document.getElementById("productPriceTotal").innerText =
        "I" + " " + "varukorgen" + " " + "finns" + " " + productAmountTotal + " " + "varor." + " " + "Totalpriset" + " " + "blir" + " " + productPriceTotal + " " + "kr.";
        // Skriver ut det totala antalet produkter ("productAmountTotal") och det totala priset ("productPriceTotal").
    }

    document.getElementById("productCount0").innerText = "Antal:" + " " + productAmount0;
    // Skriver ut antalet produkter av "products[0]". Detta tar bort det eventuella felmeddelandet, det blir mindre rörigt och förvirring undviks.

    document.getElementById("productCount1").innerText = "Antal:" + " " + productAmount1;
    // Skriver ut antalet produkter av "products[1]". Detta tar bort det eventuella felmeddelandet, det blir mindre rörigt och förvirring undviks.

    document.getElementById("productCount2").innerText = "Antal:" + " " + productAmount2;
    // Skriver ut antalet produkter av "products[2]". Detta tar bort det eventuella felmeddelandet, det blir mindre rörigt och förvirring undviks.

    document.getElementById("productCounter").innerText = "";
    // Gör h2-taggen som räknar antalet produkter som användaren lägger till i sin varukorg tom för att undvika förvirring.
}