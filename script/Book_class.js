/**
 * @fileoverview Defines the Book class for creating book objects.
 */

// Export the Book class to be used by other modules
export class Book {
  /**
   * Constructs a new Book object.
   * @param {string} book_title - The title of the book.
   * @param {string} book_author - The author of the book.
   * @param {string} book_genre - The genre of the book.
   * @param {string} book_reading_status - The reading status (e.g., 'not_started', 'reading', 'completed').
   */
  constructor(
    book_title,
    book_author,
    book_genre,
    book_reading_status
  ) {
    this.book_title = book_title;
    this.book_author = book_author;
    this.book_genre = book_genre;
    this.book_reading_status = book_reading_status;
  }
}
