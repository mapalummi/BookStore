// Buch-Content rendern
function renderBooks(){
    for (let i = 0; i < books.length; i++) {
        document.getElementById('book_container').innerHTML += getBookTemplate(i);
    }
}

function likeButton(){
    document.getElementById('like_btn').classList.toggle('likes_toggle');
}


// Onclick Funktion für Inputfeld 

// Inputfeld leeren

