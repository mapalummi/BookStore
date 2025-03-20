function init() {
  getFromLocalStorage();
  renderBooks();
}

function renderBooks() {
  document.getElementById('book_container').innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    document.getElementById("book_container").innerHTML += getBookTemplate(i);

    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(`comment_content${i}`).innerHTML += getCommentTemplate(i, j);
    }

  likedOrNotliked(i);
  }
}

function likedOrNotliked(i){
  let likedProof = (books[i].liked)
  
  if (likedProof == true) {
    document.getElementById(`heart_img${i}`).classList.add("liked");
    
  } else {
    document.getElementById(`heart_img${i}`).classList.remove("liked");
  }
}

function likeButton(i){
  document.getElementById(`heart_img${i}`).classList.toggle("liked");

  let likedOrNot = document.getElementById(`heart_img${i}`).classList.contains("liked");

    if (likedOrNot == true) {
      books[i].likes += 1
      books[i].liked = true

    } else{
      books[i].likes -= 1
      books[i].liked = false
  }

saveToLocalStorage();
renderBooks();
}

function sendComment(i) {
  let comment = document.getElementById(`input${i}`).value;

  if (comment == "") {
    alert("Bitte schreibe einen Kommentar");
    return
  } else {
    document.getElementById(`new_comments${i}`).innerHTML += getInputTemplate(comment);
    document.getElementById(`input${i}`).value = "";
  }

  saveComment(i, comment);
}

function saveComment(i, comment){
  books[i].comments.push({name: "Leser4567", comment});

  saveToLocalStorage();
  renderBooks();
}

function saveToLocalStorage(){
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage(){
  newBooks = JSON.parse(localStorage.getItem("books"));

  if (newBooks != null) {
   books = newBooks
  }
}