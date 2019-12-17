//Temple List
fetch(requestURL).then(response => {
  response.json().then(response => {
    const temples = response.temples;

    temples.forEach(temples => {
      let location = document.createElement("option");
      location.textContent = temples.NameOfTemple;
      document.querySelector("#location").appendChild(location);
    });
  });
});