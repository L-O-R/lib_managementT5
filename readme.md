# 📚 Digital Library Management (Vanilla JavaScript)

A beginner-friendly _Digital Library Management_ web application built using _HTML, CSS, and Vanilla JavaScript_.  
This project is designed to practice _DOM manipulation, semantic HTML, CSS layout, Object-Oriented Programming (OOP), and \*\*browser storage_ without using any frameworks or external libraries.

---

## 🚀 Project Overview

The Digital Library Management app helps users manage a personal book collection directly in the browser.

Users can:

- Add books
- View books
- Edit book details
- Delete books
- Mark books as Available or Borrowed
- Search and filter books
- Persist data using browser storage

All logic runs entirely in the browser.  
There is _no backend, **no APIs, and **no external dependencies_.

---

## 🎯 Learning Objectives

This project focuses on mastering core frontend fundamentals.

### JavaScript

- DOM selection and manipulation
- Event handling and event delegation
- Working with forms and user input
- Object-Oriented Programming using ES6 classes
- Working with arrays of objects
- State management inside the browser
- localStorage and sessionStorage usage

### HTML

- Semantic HTML structure
- Accessibility-friendly forms
- Proper usage of buttons and inputs
- Logical document structure

### CSS

- Layout using Flexbox and/or Grid
- Styling tables or card-based lists
- Creating responsive layouts
- Visual hierarchy and spacing
- UI states (hover, focus, disabled)

---

## ✅ Features

### Core Features

- Add new books via a form
- Edit existing book details
- Delete books from the library
- Toggle book status (Available / Borrowed)
- Display all books in a table or card layout
- Show real-time statistics:
  - Total books
  - Available books
  - Borrowed books

### Search & Filter

- Search books by:
  - Title
  - Author
- Filter books by:
  - Category
  - Status (All / Available / Borrowed)

### Data Persistence

- Books are stored in _localStorage_
- Data remains available even after page refresh
- Optional: use _sessionStorage_ to remember active filters and search values

---

## ❌ Out of Scope (Not Allowed)

To keep the project beginner-focused, the following are _strictly not allowed_:

- APIs or HTTP requests (fetch, Axios, etc.)
- Promises or async / await
- JavaScript frameworks or libraries (React, Vue, Angular, jQuery)
- CSS frameworks (Bootstrap, Tailwind, etc.)
- Bundlers or build tools (Webpack, Vite)
- Node.js or package managers (npm, yarn)
- Backend databases or servers

---

## 🧱 Application Structure

### Sections in the UI

1. _Header_

   - Application title
   - Short description

2. _Controls / Sidebar_

   - Search input (title or author)
   - Category filter
   - Status filter
   - “Add New Book” button

3. _Book List_

   - Books displayed in a table or cards
   - Each book shows:
     - Title
     - Author
     - Category
     - Status
     - Action buttons (Edit, Delete, Borrow/Return)

4. _Statistics Panel_

   - Total books count
   - Available books count
   - Borrowed books count

5. _Add / Edit Book Form_
   - Title (required)
   - Author (required)
   - Category (required)
   - Status (Available / Borrowed)
   - Notes (optional)
   - Form validation with error messages

---

## 🧠 Data Model & OOP Design

### Book Object

Each book contains:

- id (unique identifier)
- title
- author
- category
- status ("available" or "borrowed")
- notes (optional)

### Library Object

The library manages all books and handles logic.

Methods include:

- addBook(book)
- removeBook(id)
- updateBook(id, updatedData)
- toggleStatus(id)
- getStats()
- filterBooks(criteria)

---
