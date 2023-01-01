// Adam Kumlin, 31KDW1, Webbredaktörsprogrammet distans

// Denna webbsida har fem olika interaktivitetsmöjligheter, användaren kan: se en viss specifik data mer tydligt med muspekaren, visa eller dölja vissa dataset:s, välja vilket dataset som ska visas,
// välja vilket typ av diagram som ska användas och slutligen välja om diagrammet ska vara stackat eller ostackat.

let type = 'line';
// Skapar en variabel "type" som håller koll på vilken typ av diagram som ska presenteras. Variabeln har från början standardvärdet "line" (ett linjediagram).

let dataset = topics;
// Skapar en variabel "dataset" som håller koll på de olika dataset:en. Variabeln har från början standardvärdet "topics" (alla dataset:s).

let allCharts;
// Deklarerar en ny variabel.

let stack = false;
// Skapar en ny variabel "stacked" och ändrar dess standardvärde till "false".

let options = {
	animation: {duration: 0},
	scales: {y: {stacked: stack}, x: {stacked: stack}},
};
// Ställer in några inställningar, t.ex. att x- och y-axelns "stacked"-egenskaper beror på variabeln "stacked":s värde och att animationerna inte ska utspelas då "duration" är lika med 0.

let chart = document.getElementById("chart").getContext("2d");
// Kopplar canvas-elementet "chart" till en variabel. Det framtida diagrammet ("chart") kopplas alltså till en rityta.

initialiseChart(type, options);
// Anropar funktionen "initialiseChart".

loadChart(dataset, type, stack);
// Anropar funktionen "loadChart" med variablerna "dataset", "type" och "stack". Detta körs när webbsidan öppnas för första gången. Då visas dataset:et "topics" (alla dataset:s, 
// då "datasets" har standardvärdet "topics") i ett ostackat ("stack" har standardvärdet "false") linjediagram ("type" har standardvärdet "line").

function initialiseChart(type, options) {
// Funktionen tar med sig "type" och "options":s värden. Här skapas diagrammet, fast utan några data.

	let config = {
		type: type, 
		options: options,
		scaleStartValue: 0
	};
	// Skapar en config som innehåller information om vilken typ diagrammet ska vara, vilka inställningar som ska finnas samt att diagrammet ska starta från 0 oavsett värde.

	allCharts = new Chart(chart, config);
	// Skapar ett nytt diagram med hjälp av variabeln "chart" och objektet "config".
}

function loadChart(dataset, type, stack) {
// Funktionen tar med sig "dataset", "type" och "stack":s värden, om användaren valde att göra några ändringar som t.ex. att byta dataset så följder det med här.
	
	allCharts.destroy();
	// Tar bort det förra diagrammet.

	options.scales.x.stacked = stack;
	options.scales.y.stacked = stack;
	// Diagrammets y- och x-axlars egenskap "stacked" beror på "stack":s värde. Om "stack" har värdet "true" så stackas x- och y-axlarna och vice versa om värdet istället är "false".

	chartData = {
		labels: date_labels,
		datasets: dataset,
	};
	// Skapar ett objekt som tilldelas etiketterna "date_labels" från dataset.js-filen. "datasets" egenskap beror på "dataset":s värde (som just nu är "topics" (alla dataset:s)). "labels"-egenskapen är-
	// detsamma för alla datset:s, så den är alltid med oavsett vilket dataset användaren väljer att visa. "labels" behöver därför inte specificeras beroende på valt dataset. Detta objekt uppdateras när-
	// användaren byter dataset.

	if (stack == true) {
	// Om "stack" har värdet "true".

		Chart.defaults.elements.line.fill = 'origin';
		// Diagrammets area blir fyllt.
	}
	else {
	// Annars.

		Chart.defaults.elements.line.fill = false;
		// Digrammets area blir inte fyllt.
	}

	initialiseChart(type, options);
	// Anropar funktionen "initialiseChart" med variablerna "type" och "options" värden.

	allCharts.data = chartData;
	// Diagrammets data får "chartData":s information.

	allCharts.update();	
	// Uppdaterar diagrammet.
}

function updateChart() {

	let stackedOrNot = document.getElementById("selectStack").value;
	// Skapar en variabel som kopplas till select-elementet "selectStack".

	if (stackedOrNot == "stacked") {
	//Om stackedOrNot har värdet "stacked".

		stack = true;
		// "stack" får värdet "true".
	}
	else {
	// Annars.

		stack = false;
		// "stack" får värdet "false".
	}

	let chartType = document.getElementById("selectChart").value;
	// Skapar en variabel som kopplas till select-elementet "selectChart".

	if (chartType == "bar") {
	// Om "chartType" har värdet "bar".
		
		type = "bar";
		// "type" får värdet "bar".
	}
	else {
	// Annars.

		type = "line";
		// "type" får värdet "line".
	}

	let chosenDataset = document.getElementById("selectDataset").value;
	// Skapar en variabel som kopplas till select-elementet "selectDataset".

	switch (chosenDataset) {
	// Skapar en switch-sats som beroende på "dataset":s värde kör olika bitar kod.

		case "all": dataset = topics;
		break;
		// Om "chosenDataset" har värdet "all" får "dataset" värdet "topics". Då visas alla dataset:s. Stoppar switch-satsen med "break;".

		case "socialtBeteende": dataset = topic_4;
		break;
		// Om "chosenDataset" har värdet "socialtBeteende" får "dataset" värdet "topic_4". Då visas endast dataset:et "Socialt beteende". Stoppar switch-satsen med "break;".

		case "karantanliv": dataset = topic_5;
		break;
		// Om "chosenDataset" har värdet "karantanliv" får "dataset" värdet "topic_5". Då visas endast dataset:et "Karantänliv". Stoppar switch-satsen med "break;".

		case "vaccin": dataset = topic_7;
		break;
		// Om "chosenDataset" har värdet "vaccin" får "dataset" värdet "topic_7". Då visas endast dataset:et "Vaccin". Stoppar switch-satsen med "break;".

		case "klimatforandringar": dataset = topic_9;
		break;
		// Om "chosenDataset" har värdet "klimatforandringar" får "dataset" värdet "topic_9". Då visas endast dataset:et "Klimatförändringar". Stoppar switch-satsen med "break;".

		case "teknologi": dataset = topic_10;
		break;
		// Om "chosenDataset" har värdet "teknologi" får "dataset" värdet "topic_10". Då visas endast dataset:et "Teknologi". Stoppar switch-satsen med "break;".

		case "mentalHalsa": dataset = topic_11;
		break;
		// Om "chosenDataset" har värdet "mentalHalsa" får "dataset" värdet "topic_11". Då visas endast dataset:et "Mental hälsa". Stoppar switch-satsen med "break;".

		default: dataset = topics;
		// Om inget case av någon anledning skulle uppfyllas så visas alla dataset:s.
	}

	loadChart(dataset, type, stack);
	// Nu efter användaren har bestämt om diagrammet ska vara stackat eller inte, typen av diagram och vilket dataset så skrivs diagrammet ut på nytt. "dataset", "type", "stack" har-
	// nu uppdaterade värden baserat på vad användaren valde.
}