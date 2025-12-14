/**
 * @fileoverview Manages the dynamic creation and insertion of genre options into the Add Book form's select element.
 */

// Array of pre-defined book genres
const genre = [
  "", // Empty string for the default "Select the genre" option
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Adventure",
  "Romance",
  "Contemporary",
  "Mystery",
  "Thriller",
  "Horror",
  "Historical Fiction",
  "Young Adult",
  "Children's",
  "Nonfiction",
  "Biography",
  "Autobiography",
  "Self-Help",
  "True Crime",
  "Poetry",
  "Graphic Novel",
  "Classics",
  "Literary Fiction",
  "Crime",
  "Humor",
  "Philosophy",
  "Religion",
  "Travel",
  "Science",
  "History",
  "Business",
  "Health & Wellness",
];

/**
 * Iterates through the genre array and dynamically adds <option> elements to the book_genre <select>.
 */
const add_genre = () => {
  // Get the <select> element for the book genre
  const book_genre = document.getElementById("book_genre");
  // Clear any existing options to prevent duplicates on reload
  book_genre.innerHTML = "";

  // Loop through each genre in the array
  genre.forEach((g) => {
    // Create a new <option> element for each genre
    const option = document.createElement("option");

    // Handle the default (empty) option
    if (g.length <= 0) {
      option.value = "";
      option.innerText = "Select the genre";
      option.disabled = true; // Make the default option unselectable
      option.selected = true; // Make the default option pre-selected
    } else {
      // Set the value to a clean, lowercased string for data storage
      option.value = g.toLowerCase().trim();
      // Set the display text
      option.innerText = g;
    }

    // Append the newly created option to the <select> element
    book_genre.appendChild(option);
  });
};

// Export the function to be called in app.js
export default add_genre;
