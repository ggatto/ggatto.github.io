setTimeout(function() {
  const apiKey = "29691f8306258dc58418908dfb6464bf";
  const unit = "imperial";

  let cityID1 = document.getElementById("cityID-1").value;
  const apiWeatherURL1 = `https://api.openweathermap.org/data/2.5/weather?id=${cityID1}&units=${unit}&appid=${apiKey}`;

  fetch(apiWeatherURL1)
    .then(response => response.json())
    .then(currentWeather => {
      let currentTemp = currentWeather.main.temp;
      let highTemp = currentWeather.main.temp_max;
      let currenly = currentWeather.weather[0].main;
      let minTemp = currentWeather.main.temp_min;

      document.getElementById("currentTemp-1").innerHTML =
        Math.ceil(currentTemp) + "&degF";
      document.getElementById("highTemp-1").innerHTML =
        Math.ceil(highTemp) + "&degF";
      document.getElementById("minTemp-1").innerHTML =
        Math.ceil(minTemp) + "&degF";
      document.getElementById("currenty-1").innerHTML = currenly;
    });

  let cityID2 = document.getElementById("cityID-2").value;
  const apiWeatherURL2 = `https://api.openweathermap.org/data/2.5/weather?id=${cityID2}&units=${unit}&appid=${apiKey}`;

  fetch(apiWeatherURL2)
    .then(response => response.json())
    .then(currentWeather => {
      let currentTemp2 = currentWeather.main.temp;
      let highTemp = currentWeather.main.temp_max;
      let currenly = currentWeather.weather[0].main;
      let minTemp = currentWeather.main.temp_min;

      document.getElementById("currentTemp-2").innerHTML =
        Math.ceil(currentTemp2) + "&degF";
      document.getElementById("highTemp-2").innerHTML =
        Math.ceil(highTemp) + "&degF";
      document.getElementById("minTemp-2").innerHTML =
        Math.ceil(minTemp) + "&degF";
      document.getElementById("currenty-2").innerHTML = currenly;
    });

  let cityID3 = document.getElementById("cityID-3").value;

  const apiWeatherURL3 = `https://api.openweathermap.org/data/2.5/weather?id=${cityID3}&units=${unit}&appid=${apiKey}`;

  fetch(apiWeatherURL3)
    .then(response => response.json())
    .then(currentWeather => {
      let currentTemp = currentWeather.main.temp;
      let highTemp = currentWeather.main.temp_max;
      let currenly = currentWeather.weather[0].main;
      let minTemp = currentWeather.main.temp_min;

      document.getElementById("currentTemp-3").innerHTML =
        Math.ceil(currentTemp) + "&degF";
      document.getElementById("highTemp-3").innerHTML =
        Math.ceil(highTemp) + "&degF";
      document.getElementById("minTemp-3").innerHTML =
        Math.ceil(minTemp) + "&degF";
      document.getElementById("currenty-3").innerHTML = currenly;
    });

  let cityID4 = document.getElementById("cityID-4").value;

  const apiWeatherURL4 = `https://api.openweathermap.org/data/2.5/weather?id=${cityID4}&units=${unit}&appid=${apiKey}`;

  fetch(apiWeatherURL4)
    .then(response => response.json())
    .then(currentWeather => {
      let currentTemp = currentWeather.main.temp;
      let highTemp = currentWeather.main.temp_max;
      let currenly = currentWeather.weather[0].main;
      let minTemp = currentWeather.main.temp_min;

      document.getElementById("currentTemp-4").innerHTML =
        Math.ceil(currentTemp) + "&degF";
      document.getElementById("highTemp-4").innerHTML =
        Math.ceil(highTemp) + "&degF";
      document.getElementById("minTemp-4").innerHTML =
        Math.ceil(minTemp) + "&degF";
      document.getElementById("currenty-4").innerHTML = currenly;
    });
}, 500);
