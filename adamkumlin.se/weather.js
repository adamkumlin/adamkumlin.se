    
    let chosenLat = 0;
    let chosenLon = 0;
    let chosenCity = "";

    let kungsbackaButton = document.getElementById("kungsbacka");
    kungsbackaButton.addEventListener("click", () => {
        chosenCity = "Kungsbacka";
        checkCity();
        processWeatherData();
    });

    let deniaButton = document.getElementById("denia");
    deniaButton.addEventListener("click", () => {
        chosenCity = "Denia";
        checkCity();
        processWeatherData();
    })

    function checkCity() {
        if (chosenCity === "Kungsbacka") {
            chosenLat = 57.4875;
            chosenLon = 12.0762;
    
        } else if (chosenCity === "Denia") {
            chosenLat = 38.8388;
            chosenLon = 0.1051;
        }
    }

    function processWeatherData() {
        let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${chosenLat}&lon=${chosenLon}&appid=df84535a74b79de946a6460a3a78680f&units=metric`;
        fetch(uri)
        .then(response => response.json())
        .then(data => {
    
            let city = document.getElementById("city");
            city.innerText = chosenCity;
    
            let weather = document.getElementById("weather");
            weather.textContent = data.weather[0].main + ", " + data.weather[0].description;

            let temp = document.getElementById("temp");
            temp.textContent = `Temperatur: ${parseInt(data.main.temp)} °C`;
    
            let tempMax = document.getElementById("tempMax");
            tempMax.textContent = `Högsta temperatur: ${parseInt(data.main.temp_max)} °C`;
    
            let tempMin = document.getElementById("tempMin");
            tempMin.textContent = `Lägsta temperatur: ${parseInt(data.main.temp_min)} °C`;
    
            let tempFeelsLike = document.getElementById("tempFeelsLike");
            tempFeelsLike.textContent = `Känns som: ${parseInt(data.main.feels_like)} °C`;
        });
    }