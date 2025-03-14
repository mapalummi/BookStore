// Buch-Content rendern
function renderBooks(){
    for (let i = 0; i < books.length; i++) {
        document.getElementById('book_container').innerHTML += getBookTemplate(i);
    }
}
