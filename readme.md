# 📚 JavaScript Module-Based Library Management System

## Welcome, Trainee!

This project is a clean, single-page application (SPA) built purely with **Vanilla JavaScript** and **Web Storage (LocalStorage)**. It serves as an excellent training ground for mastering ES6 Modules, Object-Oriented Programming (OOP) principles, and fundamental DOM manipulation.

The aesthetic uses a warm, **sunset/Halloween-themed color palette** with distinct typography to ensure visual hierarchy.

---

## 🎯 Key Learning Objectives

By studying this codebase, you will solidify your understanding of:

1.  **ES6 Modules (`import`/`export`):** How to divide application logic into maintainable, reusable files.
2.  **Object-Oriented Programming (OOP):** Implementing a simple data structure using the `Book` class.
3.  **DOM Manipulation:** Creating dynamic elements from a `<template>` and attaching event listeners efficiently.
4.  **Web Storage (`localStorage`):** Persisting user data (the book list) across browser sessions.
5.  **Data Management:** Implementing CRUD (Create, Read, Update, Delete) operations on an array (`book_list`) and synchronizing it with `localStorage`.

---

## 📁 Project Structure Overview

The application logic is neatly separated into the following modules:

| File Name                   | Role / Functionality       | Key Responsibility                                                                                                                                                                      |
| :-------------------------- | :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                | Markup                     | Defines the overall structure, modals (`<dialog>`), the book `<template>`, and imports all JS modules.                                                                                  |
| `style.css`                 | Styling                    | Manages the color palette, fonts, layout, and visual appearance of the books and modals.                                                                                                |
| `app.js`                    | Main Controller            | Initializes the application, loads data from `localStorage`, calls the `add_genre` function, and triggers the initial `renderBook`.                                                     |
| `Book_class.js`             | Data Model (OOP)           | Defines the blueprint for a `Book` object, containing properties like `title`, `author`, `genre`, and `reading_status`.                                                                 |
| `add_form.js`               | Create (C)                 | Contains the logic for the "Add Book" form submission, including data validation, creating a new `Book` instance, updating `book_list`, and saving to `localStorage`.                   |
| `adding_option_to_genre.js` | Utility                    | Provides a list of genres and dynamically populates the genre `<select>` dropdown in the modal form.                                                                                    |
| `render_book.js`            | Read, Update, Delete (RUD) | Handles the dynamic creation of book cards, appending them to the DOM, and manages the deletion of books and updating their reading status.                                             |
| `loginForm.js`              | User Authentication        | Handles basic hard-coded user login (`admin`/`admin`) and manages the login state using `localStorage` (though the UI interaction is currently removed in `index.html` for simplicity). |

---

## ⚙️ Detailed Module Breakdown

### 1. `render_book.js` (The Core Renderer)

This is where the magic happens for displaying the library.

- **Book Card Generation:** It uses a `<template id="book_template">` from `index.html` to clone and populate a new book card for every object in the `book_list` array.
- **Update Status:** The `update_reading_status` function is attached to the `<select id="reading_status">` input event. It finds the book by `book_title`, updates the `book_reading_status` property in the array, and saves the new array to `localStorage`.
- **Delete Book:** The "Delete Book" button uses the `filter` method to create a `new_data` array that excludes the book being deleted. It then **reassigns** `book_list` to this new array and re-renders the entire list.

**⚠️ Trainer Note:** Notice the use of `book_list = new_data;` inside `render_book.js`. While it works because `book_list` is an array reference passed from `app.js`, for true modularity, it's generally better practice to use methods that modify the array in place (like `splice`) or export a method to update the main data source in `app.js`.

### 2. `add_form.js` (Handling Input)

This module handles form processing and validation.

- **Validation:** It checks for empty fields for `book_title`, `book_author`, and `book_genre`.
- **Duplicate Check:** It uses the `some` array method to ensure no two books have the exact same title before adding.
- **Instantiation:** A new `Book` object is created using the `Book` class.
- **Data Persistence:** The new book is added to the `book_list` array using `push`, and the updated array is immediately serialized and stored in `localStorage`.

### 3. `loginForm.js` (Separation of Concerns)

This file isolates the login validation logic.

- **Credentials:** Hard-coded `userName: "admin"` and `password: "admin"`.
- **Login Check:** The `login_func` compares the form inputs to the stored credentials.
- **State Management:** On successful login, it sets the `logedIn` flag in `localStorage`.

---

## 🛠️ Next Steps for Practice

1.  **Refactor `render_book.js`:** Change the delete logic to use `book_list.splice()` instead of reassigning the variable.
2.  **Add `book_genre` to card:** Currently, the genre data is only stored, but the `book_genre` span in the template is empty. Update the `renderBook` function to display the genre on the card.
3.  **Enhance Styling:** Implement a visual change on the book card (e.g., border color) when the status is "completed."
