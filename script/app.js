// --- DOM Element Selection ---

// Get the main login/logout button element
const login_btn = document.getElementById("login_btn");
// Get the login modal element (using the <dialog> tag)
const login_modal = document.getElementById("login_modal");
// Get the button used to close the modal
const close_modal = document.getElementById("close_modal");
// Get the button used to trigger the "Add Book" action
const add_book_btn =
  document.getElementById("add_book_btn");

// --- Initial State Check (Run on page load) ---

// Check if the user has a "logedIn" item in localStorage
if (localStorage.getItem("logedIn")) {
  // If the item exists, change the button text to "Logout"
  login_btn.innerText = "Logout";
}

// --- Event Listeners ---

// 1. Close Modal Listener
// Add a click event listener to the 'X' button inside the modal
close_modal.addEventListener("click", () =>
  // Use the native dialog method to close the modal
  login_modal.close()
);

// 2. Add Book Button Listener
// Add a click event listener to the "Add Books" button
add_book_btn.addEventListener("click", add_book_func);

// 3. Login/Logout Button Listener
login_btn.addEventListener("click", () => {
  // Check the current text of the button to determine the action
  if (login_btn.innerText === "Login") {
    // If the button says "Login", show the login modal
    login_modal.showModal();
  } else {
    // If the button says "Logout" (user is logged in):
    // 1. Remove the "logedIn" flag from localStorage
    localStorage.removeItem("logedIn");
    // 2. Change the button text back to "Login"
    login_btn.innerText = "Login";
  }
});

// --- Functions ---

/**
 * Handles the click event for the "Add Books" button.
 * Prompts the user to log in if they are not authenticated.
 * @param {Event} event - The click event object.
 */
function add_book_func(event) {
  // Check if the user is NOT logged in (i.e., "logedIn" is missing from localStorage)
  if (!localStorage.getItem("logedIn")) {
    // Alert the user and show the login modal
    alert("Please Login TO Add Books!");
    login_modal.showModal();
  }
  // (Note: If logged in, the logic for adding a book would go here.)
}
