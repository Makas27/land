window.onload = function () {
  fetch("http://ip-api.com/json/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let status = data.status;
      let country = data.country;
      let city = data.city;
      let ip = data.query;
      let weatherAPI_KEY = "38d286176f9240979d1131055230802";
      if (status === "success") {
        fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=" +
            weatherAPI_KEY +
            "&q=" +
            city +
            "&aqi=no"
        )
          .then(function (weatherResponse) {
            return weatherResponse.json();
          })
          .then(function (weatherData) {
            let state = weatherData.location.region;
            let lastUpdated = weatherData.current.last_updated;
            let countriesThatUseF = [
              "United States",
              "Bahamas",
              "Cayman Islands",
              "Liberia",
              "Palau",
              "Micronesia",
              "Marshall Islands",
              "Ukraine",
            ];
            let tempLetter = "C";
            let temp = weatherData.current.temp_c;
            if (countriesThatUseF.includes(country)) {
              tempLetter = "F";
              temp = weatherData.current.temp_f;
            }

            document.getElementById("weatherInfo").innerHTML = `
                <button id="temp">
                    ${temp} °${tempLetter}
                </button>
            `;
          });
      }
    });
};
