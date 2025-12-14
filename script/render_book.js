export function renderBook(book_list) {
  const section = document.getElementById("root");
  if (book_list.length <= 0) {
    section.innerHTML = `<p class ="no_books"> No book Added yet , Pls add Some Books! </p>`;
    return;
  }
  section.innerHTML = "";
  const template = document.getElementById("book_template");
  // deep copy of the original data
  let data_to_render = JSON.parse(
    JSON.stringify(book_list)
  );
  data_to_render.reverse().forEach((element) => {
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector("h2");
    h2.innerText = element.book_title;
    const h3 = clone.querySelector("h3");
    h3.innerText = element.book_author;
    let select = clone.querySelector("#reading_status");
    // select.value = element.book_reading_status;
    select.value = element.book_reading_status;
    select.addEventListener("input", (event) => {
      update_reading_status(element.book_title, event);
    });

    const delete_book = clone.querySelector("#delete_book");
    delete_book.addEventListener("click", () => {
      const new_data = book_list.filter(
        (item) => item.book_title !== element.book_title
      );

      book_list = new_data;
      localStorage.setItem(
        "book_list",
        JSON.stringify(book_list) 
      );

      renderBook(book_list);
    });
    section.append(clone);
  });

  function update_reading_status(book_title, event) {
    let new_reading_status = event.target.value;
    let index_number = book_list.findIndex((el) => {
      return el.book_title === book_title;
    });

    book_list[index_number].book_reading_status =
      new_reading_status;

    localStorage.setItem(
      "book_list",
      JSON.stringify(book_list)
    );
    alert("Reading Status was updated Successfully");
  }
}
