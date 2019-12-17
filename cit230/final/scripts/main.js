// // The temple page describes the details for at least four temples of your
// choice providing information about the address, telephone, email, services,
// history, ordinance schedule, session schedule, temple closure schedule
// (from a JSON source), and summary—current weather information obtained
// from a third party API.

// Font Loader
WebFont.load({
  google: {
    families: ["Quicksand", "Fira Sans"]
  }
});

// ToggleMenu
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

var currentDate = new Date();
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
  currentDate.getDate() + " " + monthName + " " + currentDate.getFullYear();
// Inject to DOM
document.getElementById("CurrentDate").innerHTML = currentDateString;

// Fetch JSON
const requestURL = "data/templeSchedule.json";
