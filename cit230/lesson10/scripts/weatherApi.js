const apiKey = "29691f8306258dc58418908dfb6464bf";
const cityID = document.getElementById("cityID").value;
const unit = "imperial";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${unit}&appid=${apiKey}`;

fetch(apiURL)
  .then(response => response.json())
  .then(currentWeather => {
    document.querySelector("#current-temp").textContent =
      currentWeather.main.temp;

    const currentImage =
      "https://openweathermap.org/img/w/" +
      currentWeather.weather[0].icon +
      ".png";

    // insert the full path of the icon
    document.querySelector("#imagesrc").textContent = currentImage;

    // insert the icon
    document.querySelector("#weather-icon").setAttribute("src", currentImage);
    document
      .querySelector("#weather-icon")
      .setAttribute("alt", currentWeather.weather[0].description);
  });
