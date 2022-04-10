    
    let chosenLat = 0;
    let chosenLon = 0;
    let chosenCity = "";

    let kungsbackaButton = document.getElementById("kungsbacka");
    kungsbackaButton.addEventListener("click", () => {
        chosenCity = "Kungsbacka";
    });

    let deniaButton = document.getElementById("denia");
    deniaButton.addEventListener("click", () => {
        chosenCity = "Denia";
    })

    if (chosenCity === "Kungsbacka") {
        chosenLat = 57.4875;
        chosenLon = 12.0762;

        processWeatherData();
    } else if (chosenCity === "Denia") {
        chosenLat = 38.8388;
        chosenLon = 0.1051;

        processWeatherData();
    }

    function processWeatherData() {
        let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${chosenLat}&lon=${chosenLon}&appid=df84535a74b79de946a6460a3a78680f&units=metric`;
        fetch(uri)
        .then(response => response.json())
        .then(data => {
    
            console.log("data")
    
            let city = document.getElementById("city");
            city.innerText = chosenCity;
    
            let weather = document.getElementById("weather");
            weather.textContent = data.weather.main;
    
            let weatherDescription = document.getElementById("weatherDescription");
            weatherDescription.textContent = data.weather.description;
    
            let temp = document.getElementById("temp");
            temp.textContent = data.main.temp;
    
            let tempMax = document.getElementById("tempMax");
            tempMax.textContent = data.main.temp_max;
    
            let tempMin = document.getElementById("tempMin");
            tempMin.textContent = data.main.temp_min;
    
            let tempFeelsLike = document.getElementById("tempFeelsLike");
            tempFeelsLike.textContent = data.main.feels_like;
        });
    }