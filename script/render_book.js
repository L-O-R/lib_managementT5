/**
 * @fileoverview Contains the core logic for rendering the book list to the DOM and managing book actions (delete, status update).
 */

/**
 * Renders the list of books to the main 'root' section of the page.
 * @param {Array<Object>} book_list - The array of book objects to display.
 */
export function renderBook(book_list) {
  const section = document.getElementById("root");

  // 1. Handle Empty List Scenario
  if (book_list.length <= 0) {
    // Display a message if no books are present
    section.innerHTML = `<p class ="no_books"> No book Added yet, Pls add Some Books! </p>`;
    // Update localStorage to ensure it reflects the empty state if deletion caused it
    localStorage.setItem(
      "book_list",
      JSON.stringify(book_list)
    );
    return;
  }

  // Clear the existing content before rendering the new list
  section.innerHTML = "";

  const template = document.getElementById("book_template");

  // 2. Prepare Data for Rendering
  // Create a deep copy of the array and reverse it to show the newest books first (LIFO order)
  let data_to_render = JSON.parse(
    JSON.stringify(book_list)
  ).reverse();

  // 3. Iterate and Render Books
  data_to_render.forEach((element) => {
    // Clone the content of the HTML <template> element
    const clone = template.content.cloneNode(true);

    // Set book details
    const h2 = clone.querySelector(".book_title");
    h2.innerText = element.book_title;

    const h3 = clone.querySelector(".book_author");
    h3.innerText = element.book_author;

    const span_genre = clone.querySelector(".book_genre");
    span_genre.innerText = element.book_genre;

    // Set the initial reading status on the <select> element
    let select = clone.querySelector("#reading_status");
    select.value = element.book_reading_status;

    // Add listener for status change
    select.addEventListener("input", (event) => {
      // Call the update function when the user changes the status
      update_reading_status(element.book_title, event);
    });

    // Add listener for book deletion
    const delete_book_btn =
      clone.querySelector("#delete_book");
    delete_book_btn.addEventListener("click", () => {
      // Filter out the book to be deleted, creating a new array
      const new_data = book_list.filter(
        (item) => item.book_title !== element.book_title
      );

      // Reassign the main book_list array to the new filtered array
      // NOTE: This assumes 'book_list' passed here is the reference from 'app.js'
      book_list.splice(0, book_list.length, ...new_data); // Use splice to modify the original array reference in place

      // Update localStorage
      localStorage.setItem(
        "book_list",
        JSON.stringify(book_list)
      );

      // Re-render the page to show the list without the deleted book
      renderBook(book_list);
    });

    // Append the completed book card to the main section
    section.append(clone);
  });

  /**
   * Updates the reading status of a specific book in the book_list array and localStorage.
   * @param {string} book_title - The title of the book to update.
   * @param {Event} event - The input event object from the select element.
   */
  function update_reading_status(book_title, event) {
    let new_reading_status = event.target.value;

    // Find the index of the book in the array using its title
    let index_number = book_list.findIndex((el) => {
      return el.book_title === book_title;
    });

    // Update the reading status property of the found book object
    book_list[index_number].book_reading_status =
      new_reading_status;

    // Update localStorage
    localStorage.setItem(
      "book_list",
      JSON.stringify(book_list)
    );
    alert("Reading Status was updated Successfully");
  }
}
