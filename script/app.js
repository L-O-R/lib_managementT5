import add_book from "./add_form.js";
import add_genre from "./adding_option_to_genre.js";
import { renderBook } from "./render_book.js";

add_genre();

const add_book_modal = document.getElementById(
  "add_book_modal"
);

// open modal logic
document
  .getElementById("add_book_btn")
  .addEventListener("click", () =>
    add_book_modal.showModal()
  );

// close modal logic
document
  .getElementById("close_modal")
  .addEventListener("click", () => add_book_modal.close());

// add book function
const book_list =
  JSON.parse(localStorage.getItem("book_list")) || [];
add_book(book_list);

// render books
renderBook(book_list);
