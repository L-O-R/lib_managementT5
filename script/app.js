const login_btn = document.getElementById("login_btn");
if (localStorage.getItem("logedIn")) {
  login_btn.innerText = "Logout";
}

const login_modal = document.getElementById("login_modal");

const close_modal = document.getElementById("close_modal");
close_modal.addEventListener("click", () =>
  login_modal.close()
);

const add_book_btn =
  document.getElementById("add_book_btn");
add_book_btn.addEventListener("click", add_book_func);
login_btn.addEventListener("click", () => {
  if (login_btn.innerText === "login") {
    login_modal.showModal();
  } else {
    localStorage.removeItem("logedIn");
    login_btn.innerText = "login";
  }
});
function add_book_func(event) {
  if (!localStorage.getItem("logedIn")) {
    alert("Please Login TO Add Books!");
    login_modal.showModal();
  }
}
