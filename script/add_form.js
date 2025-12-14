/**
 * @fileoverview Contains the logic for handling the book submission form.
 */

import { Book } from "./Book_class.js";
import { renderBook } from "./render_book.js";

/**
 * Attaches the submit listener to the Add Book form and handles form validation and book creation.
 * @param {Array<Book>} book_list - The main array holding all book objects.
 */
function add_book(book_list) {
  // Attach an event listener to the Add Book form's submit event
  document
    .getElementById("add_book_form")
    .addEventListener("submit", (event) => {
      // 1. Prevent the default form submission (which reloads the page)
      event.preventDefault();

      // 2. Extract and clean the form values
      // Note: event.target[i] corresponds to the input's order in the form
      const book_title = event.target[0].value
        .trim()
        .toLowerCase();
      const book_author = event.target[1].value
        .trim()
        .toLowerCase();
      const book_genre = event.target[2].value
        .trim()
        .toLowerCase();
      let book_reading_status = event.target[3].value
        .trim()
        .toLowerCase();

      // 3. Validation Checks

      // Validate Book Title
      if (book_title.length <= 0) {
        alert(
          "Please enter a Book title (it should not be empty)"
        );
        return;
      }

      // Check for duplicate book titles in the current list
      let old_data = book_list.some(
        (book) => book.book_title === book_title
      );
      if (old_data) {
        alert("Book title already exists, try another!");
        return;
      }

      // Validate Book Author
      if (book_author.length <= 0) {
        alert(
          "Please enter a Book Author name (it should not be empty)"
        );
        return;
      }

      // Validate Book Genre
      if (book_genre.length <= 0) {
        alert(
          "Please select a book Genre (it should not be empty)"
        );
        return;
      }

      // Handle default reading status if none is selected
      if (book_reading_status.length <= 0) {
        book_reading_status = "not_started";
      }

      // 4. Create and Save the New Book
      const newBook = new Book(
        book_title,
        book_author,
        book_genre,
        book_reading_status
      );

      // Add the new book object to the main book list array
      book_list.push(newBook);

      // Update localStorage with the latest list of books
      localStorage.setItem(
        "book_list",
        JSON.stringify(book_list)
      );

      // 5. Cleanup and UI Update
      alert("Book added successfully");

      // Close the modal
      document.getElementById("add_book_modal").close();

      // Reset the form for the next entry
      event.target.reset();

      // Re-render the book list on the main page to show the new book
      renderBook(book_list);
    });
}

// Export the function to be called in app.js
export default add_book;
