let resquestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(resquestURL).then(response => {
  response.json().then(response => {
    const towns = response.towns;
    towns.forEach(towns => {
      // Fish Haven
      if (towns.name.toLowerCase() === "fish haven") {
        document.querySelector("#fishHavenMotto").textContent = towns.motto;

        document.querySelector("#fishHavenYear").textContent =
          towns.yearFounded;
        document.querySelector("#fishHavenPopulation").textContent =
          towns.currentPopulation;
        document.querySelector("#fishHavenAR").textContent =
          towns.averageRainfall;

        document
          .querySelector("#fishHavenImage")
          .setAttribute("src", "images/" + towns.photo);

        // Preston
      } else if (towns.name.toLowerCase() === "preston") {
        document.querySelector("#prestonMotto").textContent = towns.motto;

        document.querySelector("#prestonYear").textContent = towns.yearFounded;
        document.querySelector("#prestonPopulation").textContent =
          towns.currentPopulation;
        document.querySelector("#prestonAR").textContent =
          towns.averageRainfall;

        document
          .querySelector("#prestonImage")
          .setAttribute("src", "images/" + towns.photo);

        // Soda Springs
      } else if (towns.name.toLowerCase() === "soda springs") {
        document.querySelector("#sodaSpringsMotto").textContent = towns.motto;

        document.querySelector("#sodaSpringsYear").textContent =
          towns.yearFounded;

        document.querySelector("#sodaSpringsPopulation").textContent =
          towns.currentPopulation;

        document.querySelector("#sodaSpringsAR").textContent =
          towns.averageRainfall;

        document
          .querySelector("#sodaSpringsImage")
          .setAttribute("src", "images/" + towns.photo);
      }
    });
  });
});
