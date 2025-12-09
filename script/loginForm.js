// --- Credentials and DOM Elements ---

// Hardcoded username for demonstration purposes (security warning: never do this in production!)
const userName = "admin";
// Hardcoded password for demonstration purposes
const password = "admin";
// Get the login modal element
const login_modals = document.getElementById("login_modal");
// Get the login form element
const login_form = document.getElementById("login_form");

// --- Event Listener ---

// Add a 'submit' event listener to the form, which fires when the submit button is clicked.
login_form.addEventListener("submit", login_func);

// --- Functions ---

/**
 * Handles the form submission for user login.
 * Prevents default form behavior, validates credentials, and handles success/failure.
 * @param {Event} event - The form submit event object.
 */
function login_func(event) {
  // 1. Prevent the default form submission behavior (which causes a page reload)
  event.preventDefault();

  // 2. Retrieve the entered values from the form inputs
  // event.target[0] refers to the first input in the form (username)
  let username = event.target[0].value;
  // event.target[1] refers to the second input in the form (password)
  let pwd = event.target[1].value;

  // 3. Credential Validation
  // Check if BOTH the entered username and password match the hardcoded values
  if (!(userName === username && pwd === password)) {
    // If the credentials do NOT match, alert the user and stop the function execution
    alert("Wrong username or password pls Check !");
    return;
  }

  // 4. Successful Login
  alert("Loged in Successfully");
  // Change the header button text (referenced from app.js via global scope) to 'logout'
  login_btn.innerText = "Logout";
  // Close the login modal
  login_modals.close();
  // Set the "logedIn" flag in localStorage to persist the login state across pages/sessions
  localStorage.setItem("logedIn", "yes");
}
