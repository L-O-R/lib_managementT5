// add form logic

import { Book } from "./Book_class.js";
import { renderBook } from "./render_book.js";

function add_book(book_list) {
  document
    .getElementById("add_book_form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const book_title = event.target[0].value
        .trim()
        .toLowerCase();
      //   validation for the text
      if (book_title.length <= 0) {
        alert(
          "Please enter a Book title(it should not be empty)"
        );
        return;
      }

      let old_data = book_list.some(
        (book) => book.book_title === book_title
      );

      if (old_data) {
        alert("book title already Exist, try another!");
        return;
      }

      const book_author = event.target[1].value
        .trim()
        .toLowerCase();
      //   validation for the book author
      if (book_author.length <= 0) {
        alert(
          "Please enter a Book Author name (it should not be empty)"
        );
        return;
      }

      const book_genre = event.target[2].value
        .trim()
        .toLowerCase();
      //   validation for the book author
      if (book_genre.length <= 0) {
        alert(
          "Please select a book Genre (it should not be empty)"
        );
        return;
      }

      let book_reading_status = event.target[3].value
        .trim()
        .toLowerCase();
      //   validation for the book author
      if (book_reading_status.length <= 0) {
        book_reading_status = "not_started";
      }

      const newBook = new Book(
        book_title,
        book_author,
        book_genre,
        book_reading_status
      );

      book_list.push(newBook);
      localStorage.setItem(
        "book_list",
        JSON.stringify(book_list)
      );

      alert("book added Successfully");
      document.getElementById("add_book_modal").close();
      renderBook(book_list);
    });
}

export default add_book;
