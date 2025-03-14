// Buch-Content rendern
function renderBooks(){
    for (let i = 0; i < books.length; i++) {
        document.getElementById('book_container').innerHTML += getBookTemplate(i);
    }
}


//   for (let i = 0; i < books.length; i++) {
//   }

// zeigt die Arrays an:
// console.log(Object.entries(books));
  
// zeigt den Titel an Index-Position 0 an:
// console.log(books[1].title);

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i].title);
//     console.log(books[i].author);
//     console.log(books[i].likes);
//     console.log(books[i].price);
//     console.log(books[i].publishedYear);
//     console.log(books[i].genre);
//   }