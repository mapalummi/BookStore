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
function sendComment(){
    let inputText = document.getElementById('input').value;

    if (inputText == "") {
        alert('Bitte schreibe einen Kommentar')
    } else {
        document.getElementById('comment_section').innerHTML += /*html*/`
        <span>[Tester123]</span>
        <span>:${inputText} </span>
`;

        document.getElementById('input').value = "";
}

}

