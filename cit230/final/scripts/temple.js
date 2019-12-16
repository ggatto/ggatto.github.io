const requestURL = "data/templeSchedule.json";

fetch(requestURL).then(response => {
  response.json().then(response => {
    const temples = response.temples;

    temples.forEach(temples => {
      if (temples.templeID === 1) {
        let templeNumeber = 1;
        document.querySelector(`#name${templeNumeber}`).textContent =
          temples.NameOfTemple;
        document
          .querySelector(`#image${templeNumeber}`)
          .setAttribute("src", "images/" + temples.Image);
        document.querySelector(`#cityID-${templeNumeber}`).innerHTML =
          temples.cityID;
        document.querySelector(`#street${templeNumeber}`).textContent =
          temples.Address.Street +
          " - " +
          temples.Address.city +
          " (" +
          temples.Address.state +
          ")" +
          " - " +
          temples.Address.county +
          " " +
          temples.Address.zipcode;
        document.querySelector(`#phone${templeNumeber}`).textContent =
          "+" +
          temples.telephone.countyArea +
          " (" +
          temples.telephone.area +
          ")" +
          " " +
          temples.telephone.phone;

        for (i = 0; i < temples.services.length; i++) {
          let services = document.createElement("li");
          services.textContent = temples.services[i];
          document
            .querySelector(`#services${templeNumeber}`)
            .appendChild(services);
        }

        for (i = 0; i < temples.session.length; i++) {
          let session = document.createElement("li");
          session.textContent = temples.session[i];
          document
            .querySelector(`#session${templeNumeber}`)
            .appendChild(session);
        }
        document.querySelector(`#email${templeNumeber}`).textContent =
          temples.email;

        for (i = 0; i < temples.history.length; i++) {
          let history = document.createElement("li");
          history.textContent = temples.history[i];
          document
            .querySelector(`#history${templeNumeber}`)
            .appendChild(history);
        }

        for (i = 0; i < temples.closure.length; i++) {
          let closure = document.createElement("li");
          closure.textContent = temples.closure[i];
          document
            .querySelector(`#closure${templeNumeber}`)
            .appendChild(closure);
        }
      } else if (temples.templeID === 2) {
        let templeNumeber = 2;
        document.querySelector(`#name${templeNumeber}`).textContent =
          temples.NameOfTemple;
        document
          .querySelector(`#image${templeNumeber}`)
          .setAttribute("src", "images/" + temples.Image);
          document.querySelector(`#cityID-${templeNumeber}`).innerHTML =
          temples.cityID;
        document.querySelector(`#street${templeNumeber}`).textContent =
          temples.Address.Street +
          " - " +
          temples.Address.city +
          " (" +
          temples.Address.state +
          ")" +
          " - " +
          temples.Address.county +
          " " +
          temples.Address.zipcode;
        document.querySelector(`#phone${templeNumeber}`).textContent =
          "+" +
          temples.telephone.countyArea +
          " (" +
          temples.telephone.area +
          ")" +
          " " +
          temples.telephone.phone;

        for (i = 0; i < temples.services.length; i++) {
          let services = document.createElement("li");
          services.textContent = temples.services[i];
          document
            .querySelector(`#services${templeNumeber}`)
            .appendChild(services);
        }

        for (i = 0; i < temples.session.length; i++) {
          let session = document.createElement("li");
          session.textContent = temples.session[i];
          document
            .querySelector(`#session${templeNumeber}`)
            .appendChild(session);
        }
        document.querySelector(`#email${templeNumeber}`).textContent =
          temples.email;

        for (i = 0; i < temples.history.length; i++) {
          let history = document.createElement("li");
          history.textContent = temples.history[i];
          document
            .querySelector(`#history${templeNumeber}`)
            .appendChild(history);
        }

        for (i = 0; i < temples.closure.length; i++) {
          let closure = document.createElement("li");
          closure.textContent = temples.closure[i];
          document
            .querySelector(`#closure${templeNumeber}`)
            .appendChild(closure);
        }
      } else if (temples.templeID === 3) {
        let templeNumeber = 3;
        document.querySelector(`#name${templeNumeber}`).textContent =
          temples.NameOfTemple;
        document
          .querySelector(`#image${templeNumeber}`)
          .setAttribute("src", "images/" + temples.Image);
        document.querySelector(`#cityID-${templeNumeber}`).innerHTML =
          temples.cityID;
        document.querySelector(`#street${templeNumeber}`).textContent =
          temples.Address.Street +
          " - " +
          temples.Address.city +
          " (" +
          temples.Address.state +
          ")" +
          " - " +
          temples.Address.county +
          " " +
          temples.Address.zipcode;
        document.querySelector(`#phone${templeNumeber}`).textContent =
          "+" +
          temples.telephone.countyArea +
          " (" +
          temples.telephone.area +
          ")" +
          " " +
          temples.telephone.phone;

        for (i = 0; i < temples.services.length; i++) {
          let services = document.createElement("li");
          services.textContent = temples.services[i];
          document
            .querySelector(`#services${templeNumeber}`)
            .appendChild(services);
        }

        for (i = 0; i < temples.session.length; i++) {
          let session = document.createElement("li");
          session.textContent = temples.session[i];
          document
            .querySelector(`#session${templeNumeber}`)
            .appendChild(session);
        }
        document.querySelector(`#email${templeNumeber}`).textContent =
          temples.email;

        for (i = 0; i < temples.history.length; i++) {
          let history = document.createElement("li");
          history.textContent = temples.history[i];
          document
            .querySelector(`#history${templeNumeber}`)
            .appendChild(history);
        }

        for (i = 0; i < temples.closure.length; i++) {
          let closure = document.createElement("li");
          closure.textContent = temples.closure[i];
          document
            .querySelector(`#closure${templeNumeber}`)
            .appendChild(closure);
        }
      } else if (temples.templeID === 4) {
        let templeNumeber = 4;
        document.querySelector(`#name${templeNumeber}`).textContent =
          temples.NameOfTemple;
        document
          .querySelector(`#image${templeNumeber}`)
          .setAttribute("src", "images/" + temples.Image);
        document.querySelector(`#cityID-${templeNumeber}`).innerHTML =
          temples.cityID;
        document.querySelector(`#street${templeNumeber}`).textContent =
          temples.Address.Street +
          " - " +
          temples.Address.city +
          " (" +
          temples.Address.state +
          ")" +
          " - " +
          temples.Address.county +
          " " +
          temples.Address.zipcode;
        document.querySelector(`#phone${templeNumeber}`).textContent =
          "+" +
          temples.telephone.countyArea +
          " (" +
          temples.telephone.area +
          ")" +
          " " +
          temples.telephone.phone;

        for (i = 0; i < temples.services.length; i++) {
          let services = document.createElement("li");
          services.textContent = temples.services[i];
          document
            .querySelector(`#services${templeNumeber}`)
            .appendChild(services);
        }

        for (i = 0; i < temples.session.length; i++) {
          let session = document.createElement("li");
          session.textContent = temples.session[i];
          document
            .querySelector(`#session${templeNumeber}`)
            .appendChild(session);
        }
        document.querySelector(`#email${templeNumeber}`).textContent =
          temples.email;

        for (i = 0; i < temples.history.length; i++) {
          let history = document.createElement("li");
          history.textContent = temples.history[i];
          document
            .querySelector(`#history${templeNumeber}`)
            .appendChild(history);
        }

        for (i = 0; i < temples.closure.length; i++) {
          let closure = document.createElement("li");
          closure.textContent = temples.closure[i];
          document
            .querySelector(`#closure${templeNumeber}`)
            .appendChild(closure);
        }
      }
    });
  });
});
