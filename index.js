function fetchBooks() {
  // Fetch books from the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      renderBooks(data); // Pass data to renderBooks()

      // Additional exercises:
      console.log("5th Book:", data[4] ? data[4].name : "Not available");
      console.log(
        "Total pages:",
        data.reduce((total, book) => total + book.numberOfPages, 0)
      );

      // Fetch the 1031st character
      return fetch("https://anapioficeandfire.com/api/characters/1031");
    })
    .then((response) => response.json())
    .then((character) =>
      console.log("1031st Character:", character.name || "Unknown")
    )
    .catch((error) => console.error("Error fetching data:", error));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

