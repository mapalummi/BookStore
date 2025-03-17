
function init(){
  renderBooks();
}


function renderBooks() {
  for (let i = 0; i < books.length; i++) {
      document.getElementById("book_container").innerHTML += getBookTemplate(i);
    }
  }



// Onclick mit Like-Funktion und true/false Prüfung für den Counter:
function likeButton() {
  document.getElementById("heart_img").classList.toggle("liked");

  let countNumber = document.getElementById("like_counter").innerHTML;
  let newLikeNumber = parseFloat(countNumber);

  let likedOrNot = document.getElementById("heart_img").classList.contains("liked");

  if (likedOrNot == true) {
    document.getElementById("like_counter").innerHTML = /*html*/ `
    ${newLikeNumber + 1}
`;
  } else {
    document.getElementById("like_counter").innerHTML = /*html*/ `
    ${newLikeNumber - 1}
`;
  }
}


// Onclick Funktion für Inputfeld
function sendComment() {
  let inputText = document.getElementById("input").value;

  if (inputText == "") {
    alert("Bitte schreibe einen Kommentar");
  } else {
    document.getElementById("new_comments").innerHTML += getInputTemplate(inputText);

    document.getElementById("input").value = "";
  }
}
