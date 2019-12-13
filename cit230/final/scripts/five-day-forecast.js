const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=${unit}&appid=${apiKey}`;
const apiKey = "29691f8306258dc58418908dfb6464bf";
let cityID = document.getElementById("cityID").value;
const unit = "imperial";

fetch(apiForecastURL)
  .then(response => response.json())
  .then(forecasts => {
    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    let dateString = getDateString(nextDate);
    let hourString = "18:00:00";
    let counter = 1;

    // loop though results
    forecasts.list.forEach(forecast => {
      if (
        // forecast.dt_txt.includes(dateString) &&
        forecast.dt_txt.includes(hourString)
      ) {
        // insert temp
        const element = document.getElementById(`temp${counter}`);
        element.innerHTML = Math.ceil(forecast.main.temp_max) + "&deg;F";

        // insert Day
        let nextDate = new Date(forecast.dt_txt);
        const dayElement = document.getElementById(`day${counter}`);
        dayElement.innerHTML = weekDayNames[nextDate.getDay()];

        // insert the icon
        const currentImage =
          "https://openweathermap.org/img/w/" +
          forecast.weather[0].icon +
          ".png";
        document
          .getElementById(`forecast-icon${counter}`)
          .setAttribute("src", currentImage);
        document
          .getElementById(`forecast-icon${counter}`)
          .setAttribute("alt", forecast.weather[0].description);

        // increment Variables
        counter += 1;
        nextDate.setDate(nextDate.getDate() + 1);
        dateString = getDateString(nextDate);
      }
    });
  });
function getDateString(date) {
  let dateString =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return dateString;
}
