//Temple Home
fetch(requestURL).then(response => {
  response.json().then(response => {
    const temples = response.temples;
    document.querySelector("#home-temple").textContent =
      temples[0].NameOfTemple;

    document.querySelector('figure.img')
      .setAttribute("src", "images/" + temples[0].Image);
  });
});
