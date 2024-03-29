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