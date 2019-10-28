var currentDate = new Date();
var currentYear = currentDate.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("updatedOn").innerHTML =
  "Updated on: " + document.lastModified.split(" ")[0];
