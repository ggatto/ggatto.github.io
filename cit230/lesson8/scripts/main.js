// Font Loader
WebFont.load({
  google: {
    families: [
       'Anton',
       'Fira Sans'
    ]
  }
});

var currentDate = new Date();

//get day of week
var weekDayNumber = currentDate.getDay();
var weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var weekDayName = weekDayNames[weekDayNumber];

//get months
var monthNumber = currentDate.getMonth();
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthName = monthNames[monthNumber];
//Display date String

currentDateString =
  weekDayName +
  ", " +
  currentDate.getDate() +
  " " +
  monthName +
  " " +
  currentDate.getFullYear();

// Inject to DOM
document.getElementById("currentDate").innerHTML = currentDateString;

// ToggleMenu
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// create five-day forecast
let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
  //add one day to current day
  currentDay++;
  //if current day is greater than 6 (Saturday)
  if (currentDay > 6) {
    currentDay = 0;
  }
  // assign
  const element = document.getElementById(`day${i}`);
  // element.innerHTML = weekDayName[currentDay];
}

// show/hide pancake
if (currentDate.getDay() === 5) {
  document.getElementById("pancake").removeAttribute("class", "hidden");
}

// Display Range
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

