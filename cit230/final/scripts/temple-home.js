//Temple Home
fetch(requestURL).then(response => {
  response.json().then(response => {
    const temples = response.temples;
    document.querySelector("#home-temple").textContent =
      temples[0].NameOfTemple;

    document.querySelector("#templeImg-1")
      .setAttribute("src", "images/" + temples[0].Image);
      document.querySelector("#templeImg-1")
      .setAttribute("alt", temples[0].NameOfTemple);

      for (i = 0; i < temples[0].history.length; i++) {
        let history = document.createElement("li");
        history.textContent = temples[0].history[i];
        document
          .querySelector("#templeHist-home")
          .appendChild(history);
      }
  });
});
