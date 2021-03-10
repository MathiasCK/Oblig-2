const regTickets = (e) => {
  e.preventDefault();
  const customer = {
    movie: $("#movie").val(),
    fName: $("#fName").val(),
    lName: $("#lName").val(),
    num: $("#num").val(),
    tel: $("#tel").val(),
    mail: $("#mail").val(),
  };

  $.post("/save", customer, function () {
    getAll();
  });

  $("#movie").val("");
  $("#fName").val("");
  $("#lName").val("");
  $("#num").val("");
  $("#tel").val("");
  $("#mail").val("");
};

const getAll = () => {
  $.get("/tickets", function (data) {
    formatData(data);
  });
};

const formatData = (customers) => {
  for (const customer of customers) {
    message.innerHTML += /*html*/ `
    <div>
      Film: ${customer.movie}<br/>
      Antall: ${customer.num}<br/>
      Fornavn: ${customer.fName}<br/>
      Etternavn: ${customer.lName}<br/>
      Telefon: ${customer.tel}<br/>
      Mail: ${customer.mail}
    </div>
    `;
  }
};

const delTickets = () => {
  form.reset();
  message.innerHTML = "";
  $.get("/delete", function () {
    getAll();
  });
};

const message = document.getElementById("output");
const form = document.querySelector("form");
form.addEventListener("submit", regTickets);
form.addEventListener("reset", delTickets);
