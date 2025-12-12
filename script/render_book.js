export function renderBook(book_list) {
  const section = document.getElementById("root");
  if (book_list.length <= 0) {
    section.innerHTML = `<p class ="no_books"> No book Added yet , Pls add Some Books! </p>`;
    return;
  }
  section.innerHTML = "";
  const template = document.getElementById("book_template");

  book_list.reverse().forEach((element) => {
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector("h2");
    h2.innerText = element.book_title;
    const h3 = clone.querySelector("h3");
    h3.innerText = element.book_author;

    section.append(clone);
  });
}
