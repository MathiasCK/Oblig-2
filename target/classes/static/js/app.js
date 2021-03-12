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
  const url = "/save";
  $.post(url, customer, function () {
    getAll();
  })
    .done(function () {
      alert("Success");
    })
    .fail(function () {
      alert("error");
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
  console.log(customers);
  message.innerHTML = "";
  for (const customer of customers) {
    message.innerHTML += /*html*/ `
    <div style="margin: 1rem 0;">
      <p>Film: ${customer.movie}<p/>
      <p>Antall: ${customer.num}<p/>
      <p>Fornavn: ${customer.fName}<p/>
      <p>Etternavn: ${customer.lName}<p/>
      <p>Telefon: ${customer.tel}<p/>
      <p>Mail: ${customer.mail}<p />
    </div>
    `;
  }
};

const delTickets = () => {
  form.reset();
  message.innerHTML = "";
  $.get("/delete", function () {
    getAll();
  }).done(function () {
    alert("Deleted");
  });
};

const message = document.getElementById("output");
const form = document.querySelector("form");
form.addEventListener("submit", regTickets);
form.addEventListener("reset", delTickets);
