/**
 * @fileoverview Main application file. Initializes the app, sets up event listeners, and loads data.
 */

// Import modular functions
import add_book from "./add_form.js";
import add_genre from "./adding_option_to_genre.js";
import { renderBook } from "./render_book.js";

// --- Initialization ---

// 1. Populate the genre dropdown in the Add Book modal
add_genre();

// 2. Load existing book data from localStorage or initialize as an empty array
const book_list =
  JSON.parse(localStorage.getItem("book_list")) || [];

// 3. Attach the book submission logic to the form
add_book(book_list);

// 4. Render the initial list of books on the page
renderBook(book_list);

// --- Modal Management ---

// Get the main modal element
const add_book_modal = document.getElementById(
  "add_book_modal"
);

// 1. Open Modal Logic
document
  .getElementById("add_book_btn")
  .addEventListener("click", () =>
    // Show the native <dialog> element
    add_book_modal.showModal()
  );

// 2. Close Modal Logic
document
  .getElementById("close_modal")
  .addEventListener("click", () =>
    // Close the native <dialog> element
    add_book_modal.close()
  );
