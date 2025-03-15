// Buch-Content rendern
function renderBooks() {
  for (let i = 0; i < books.length; i++) {
    document.getElementById("book_container").innerHTML += getBookTemplate(i);
  }
}



// Onclick Funktion für Like-Button:
function likeButton() {
  document.getElementById("like_btn").classList.toggle("likes_toggle");
//   document.getElementById("like_btn").classList.add("likes_toggle");


let countNumber = document.getElementById("like_counter").innerHTML;
let newLikeNumber = parseFloat(countNumber);

document.getElementById('like_counter').innerHTML = /*html*/`
    ${newLikeNumber+1}
`;





}



// Onclick Funktion für Inputfeld
function sendComment() {
  let inputText = document.getElementById("input").value;

  if (inputText == "") {
    alert("Bitte schreibe einen Kommentar");
  } else {
    document.getElementById('new_comments').innerHTML += getInputTemplate(inputText);

    document.getElementById("input").value = "";
  }
}