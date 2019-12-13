const requestURL = "data/templeSchedule.json";

fetch(requestURL).then(response => {
  response.json().then(response => {
    const temples = response.temples;
    console.log(temples[0].history[1]);
  });
});
