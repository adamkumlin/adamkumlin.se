//Adam Kumlin, C3KID1, Webbredaktörsprogrammet distans

function swap_text() {

	let swapTextInputText = document.getElementById("input_text").value;
	//Skapar en variabel och kopplar den till textboxen där användaren ska skriva in text.

	let swapTextSpan = document.getElementById("text").getElementsByTagName("span");
	//Skapar en variabel som kopplas till samtliga span-element inom article-elementet "text".

	for (let i = 0; i < swapTextSpan.length; i++) {
	//Skapar en loop som kör så länge det finns span-element att ändra.

		swapTextSpan[i].innerText = swapTextInputText;
		//Variabeln anropas och sedan ändras span-elementens text till det som användaren skrev in i textboxen "input_text" med hjälp av variabeln "swapTextInputText". 
		//Koden kör så länge det finns span-element att ändra (alltså alla sex stycken). Egenskapen .innerHTML används för att presentera resultatet då det är en sträng och inga HTML-element är med.
	}

	let swapTextP = document.getElementById("text").getElementsByTagName("p");
	//Skapar en variabel som håller koll på samtliga p-element inom article-elementet med id:t "text".

	for (i = 0; i < swapTextP.length; i++) {
	//Skapar en loop som kör så länge det finns p-element inom article-elementet "text" att ändra.

		let swapTextToReplace = document.getElementById("text").getElementsByTagName("p")[i].innerText.replaceAll("robotic mower", swapTextInputText);
		//Sedan skapas en variabel som kopplas till de tre p-elementen i article:n med id:t "text". Metoden replaceAll() används för att först leta upp ordet "robotic mower" i samtliga p-element,
		//efter det ändras just det ordet till det som skrevs in i textboxen av användaren i samtliga p-element. Metoden gör så att samtliga ord som stämmer överrens med strängen "robotic mower"-
		//ändras. Detta görs för alla tre p-element i article:n med id:t "text".

		swapTextP[i].innerText = swapTextToReplace;
		//Slutligen måste allt skrivas ut i dokumentet. p-elementen får en ny text, ordet "robotic mower" är borta och istället för det ordet står där nu det som användaren skrev in i texboxen "input_text".
		//.innerText går att använda här då inga HTML-element är inblandade i resultatet.
	}
	//Resultaten skrivs ut med hjälp av att elementens inre text (.innerText) ersätts med två olika variablers innehåll. .innerText används för att skriva ut innehållet.
}

function swap_color_and_font() {
	
	let swapcfFontColor = document.getElementById("font_color").value;
	let swapcfFontFamily = document.getElementById("font_family").value;
	//Kopplar de textboxar där användaren ska skriva in önskad färg samt font till två olika variabler.

	let swapcfAllHeaders = document.querySelectorAll("h2, h1");
	//Använder querySelectorAll för att hitta samtliga h1- och h2-element och länkar dem till en variabel.

	for (let i = 0; i < swapcfAllHeaders.length; i++) {
	//Koden kör så länge det finns h1-element och h2-element att ändra med hjälp av length-egenskapen.

		swapcfAllHeaders[i].style.color = swapcfFontColor;
		swapcfAllHeaders[i].style.fontFamily = swapcfFontFamily;
		//Ändrar samtliga h1- och h2-elements färg och font till det som använderen väljer. Sedan stoppar loopen och koden körs inte längre eftersom att det inte finns fler h2- och h1-element.
	}	
	//Resultaten framförs med hjälp av att variablernas värde (.value) ges till alla rubrikers ("swapcfAllHeaders") .style.color- och .style.fontFamily-egenskaper. De egenskaperna modifierar alla-
	//h1- och h2-elements stil.
}

function multiply() {

	let multiplyInput1 = document.getElementById("number_1").value;
	let multiplyInput2 = document.getElementById("number_2").value;
	//Skapar två variabler och kopplar dem till sina respektive textboxar.

	if (multiplyInput1 >= 1000 || multiplyInput2 >= 1000 || multiplyInput1 < 0 || multiplyInput2 < 0 || isNaN(multiplyInput1) || isNaN(multiplyInput2) || multiplyInput1 === ""|| multiplyInput2 === "") {
	//Från höger till vänster: Om "multiplyInput1" eller "multiplyInput2" är mindre eller lika med 1000, eller om "multiplyInput1" eller "multiplyInput2" är mindre än 0, eller om "multiplyInput1"-
	//eller "multiplyInput2" inte är ett tal, eller om "multiplyInput1" eller "multiplyInput2" är tomma.

		document.getElementById("result").innerText = "Error.";
		//Skriver ut ett felmeddelande till texboxen "result".

	} else {
		document.getElementById("result").innerText = multiplyInput1 * multiplyInput2;
		//Multiplicerar talen.
	}
	//Sammanfattning: Om något tal är antingen lika med eller större än 1000, mindre än 0, inte ett tal eller tomt så visas ett felmeddelande, om inget av det är sant så multipliceras talen som väntat.
	//Funktionen isNaN() (is Not a Number) används för att kontrollera så att värdet som användaren skrev in faktiskt är ett tal. isNaN() returnerar "true" om värdet inte är ett tal.
	//Egenskapen .innerText skriver ut resultatet i span-elementet "result". Det räcker att använda .innerText eftersom inga HTML-element är med.

	//Resultatet skrivs ut genom att multiplciera variabeln "multiplyInput1" med variabeln "multiplyInput2" direkt efter .innerText-egenskapen istället för att först skapa en variabel med namnet "multiplyResult"-
	//där uträkningarna först görs, exempelvis. .innerText används för att skriva ut innehållet då det är en enkel sträng som ska skrivas ut.
}

function count_chars_and_words() {
	
	let textCountInput = document.getElementById("text_count").value;
	//Skapar en variabel och kopplar den till en textboxen där användaren ska skriva in sin text.

	document.getElementById("char_count").innerText = textCountInput.length;
	//Skriver ut längden (length) på strängen som skrivs in av användaren (antal tecken inklusive mellanslag) i span-elementet "char_count".
	//Här används egenskapen .innerText. Det är endast en enkel sträng som ska skrivas ut, och den innehåller inga HTML-element. Därför används just .innerText.

	let textCountWords = 0;
	//Deklarerar en variabel som ska räkna antal ord.

	let textCountSplit = textCountInput.split(" ");
	//Skapar en variabel som genom metoden split() delar upp strängen i en array efter ett mellanslag (" "). Nu har vi alltså en array som innehåller ord, eftersom ord separeras av mellanslag.

	for (let i = 0; i < textCountSplit.length; i++) {
	//Loopen kör så längre det finns ord att räkna.

		if (textCountSplit[i] != "") {
		//Om ordet i arrayen inte är tomt. Detta görs för alla ord i arrayen.

			textCountWords++;
			//Adderar 1 till textCountWords. Detta görs för alla ej tomma ord i arrayen.
		}
	}
	//Sammanfattning: Loopar igenom arrayen och adderar 1 till ordräknaren för varje ord i arrayen, om ordet inte är tomt. Detta görs så att ordräknaren inte ska sluta fungera om användaren-
	//t.ex. skriver in bara mellanslag följt av ett ord.

	document.getElementById("word_count").innerText = textCountWords;
	//Skriver ut resultatet i span-elementet "word_count". .innerText kan användas eftersom att det är en enkel sträng som ska skrivas ut.

	//Resultatet framförs genom att elementet "word_count" får textCountWords värde.
	//Teckenräknaren använder sig av .innerText följt av variabelns längd. .innerText används för att skriva ut innehållet.
}

function convert_to_list() {

	let listConvertInput = document.getElementById("csv_text").value;
	//Först skapas en variabel som kopplas till textboxen där användaren ska skriva in text.

	let listConvertInputSplit = listConvertInput.split(", ");
	//Sedan skapas en till variabel som delar upp strängen i en array med metoden split(), om orden är separerade med ett mellanslag och ett kommatecken (" ,").

	let listConvertConvertedList = "";
	//Deklarerar en ny variabel som ska innehålla den färdiga listan. Den görs tom till att börja med.

	for (let i = 0; i < listConvertInputSplit.length; i++) {
	//Skapar en loop som skriver ut den nyskapta arrayen, men den gör bara det så länge det finns ord att skriva ut.

		listConvertConvertedList = listConvertConvertedList + "<li>" + listConvertInputSplit[i] + "</li>";
		//Använder li-taggarna för att skapa ett li-element för varje ord i arrayen, orden adderas också till listan "listConvertConvertedList".
	}

	document.getElementById("converted_list").innerHTML = "<ul>" + listConvertConvertedList + "</ul>";
	//Skriver ut resultatet i div:en med hjälp av egenskapen .innerHTML då resultatet innehåller ul-taggar (HTML-element).

	//Resultaten skrivs ut genom att skriva HTML-taggarna "<ul>" samt "</ul>" i div:en med resultatet "listConvertConvertedList". .innerHTML används för att skriva ut innehållet eftersom det-
	//finns HTML-element i resultatet. Om innerText istället hade använts så skulle ul-taggarna också följt med.
}

function converter() {
	
	//(F - 32) / 1.8 = Celsius
	//cup * 0.236 = liter
	//lb * 0.454 = kg
	//Formler för uträkningar.

	let converterToConvert = document.getElementById("to_convert").value;
	//Skapar en variabel och kopplar den till textboxen där användaren ska skriva in ett värde.

	let converterSelect = document.getElementById("unit").value;
	//En variabel skapas som håller koll på select-elementet "unit":s värde.

	let converterToCelsius = (converterToConvert - 32) / 1.8;
	let converterToLiters = converterToConvert * 0.236;
	let converterToKilos = converterToConvert * 0.454;
	//Utför uträkningarna och kopplar dem till var sin variabel.

	if (isNaN(converterToConvert) || converterToConvert === "") {
	//Om värdet inte är ett tal (isNaN()) (isNaN() returnerar "true" om inmatningen inte är ett tal) eller om textboxen är tom.

		document.getElementById("converted").value = "Error.";
		//Skriver ut ett felmeddelande till textboxen "converted".
	}
	else {
		switch (converterSelect) {
		//Påbörjar en switch. Variabeln som håller koll på selection-elementet "unit":s värde bestämmer vilket case (och vilken kod som ska köras).

			case "F": document.getElementById("converted").value = `${converterToCelsius} (grader Celsius)`;
			break;
			//Skriver ut värdet till textboxen. Det har blivit konverterat till grader Celsius. Stoppar switch-satsen.
			
			case "cup": document.getElementById("converted").value = `${converterToLiters} (liter)`;
			break;
			//Skriver ut värdet till textboxen. Det har blivit konverterat till liter. Stoppar switch-satsen.

			case "lb": document.getElementById("converted").value = `${converterToKilos} (kg)`;
			break;
			//Skriver ut värdet till textboxen. Det har blivit konverterat till kg. Stoppar switch-satsen.
		}
		//Sammanfattning: Om det inmatade värdet inte är ett tal eller om det är tomt så visas ett felmeddelande. Annars körs en switch-sats. 
		//Beroende på variabeln "converterSelect":s värde (select-elementets "unit":s värde) så körs olika bitar kod.
		//Till exempel: Om lb/pound är valt i select-elementet så har select-elementet då värdet "lb". Då körs det case som stämmer överrens med variabeln converterSelect:s värde (case: "lb").
		//Sedan körs den kod som multiplicerar det inmatade värdet med 0,454 samt lägger till en enhet beroende på vad värdet ska konverteras till (i detta fallet är enheten kg). Det sista-
		//steget skriver ut resultatet till textboxen "converted" med hjälp av egenskapen .value eftersom att det är en textbox och för textboxar används .value (inte .innerHTML eller-
		//.innerText). Varje kodbit avslutas med påståendet "break;". Det gör så att switch-sasten slutar läsas in. "break;"-påståendet agerar som ett avslut för varje case. Om påståendet inte-
		//skulle funnits med så skulle switch-satsen inte veta var nästa case börjar.
	}
	//Resultatet skrivs ut med hjälp av backtics (`) och dollartecken ($) med måsvingar ({}) följt av en sträng. De gör så att inga additionstecken behöver-
	//användas när resultatet ska skrivas ut. Texten behöver heller inte ha citattecken mellan sig, det ser mer strukturerat ut. .value används för att skriva ut innehållet.
}