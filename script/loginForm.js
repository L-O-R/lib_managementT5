const userName = "admin";
const password = "admin";
const login_modals = document.getElementById("login_modal");

const login_form = document.getElementById("login_form");

login_form.addEventListener("submit", login_func);

function login_func(event) {
  event.preventDefault();
  let username = event.target[0].value;
  let pwd = event.target[1].value;

  if (!(userName === username && pwd === password)) {
    alert("Wrong username or password pls Check !");
    return;
  }

  alert("Loged in Successfully");
  login_btn.innerText = "logout";
  login_modals.close();
  localStorage.setItem("logedIn", "yes");
}
