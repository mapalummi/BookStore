function init() {
  renderBooks();
}

function renderBooks() {



  for (let i = 0; i < books.length; i++) {
    document.getElementById("book_container").innerHTML += getBookTemplate(i);

    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(`comment_content${i}`).innerHTML += getCommentTemplate(i, j);
    }
  }
}

function likeButton(i) {
  document.getElementById(`heart_img${i}`).classList.toggle("liked");
  let countNumber = document.getElementById(`like_counter${i}`).innerHTML;
  let newLikeNumber = parseFloat(countNumber);
  let likedOrNot = document.getElementById(`heart_img${i}`).classList.contains("liked");

  if (likedOrNot == true) {
    document.getElementById(`like_counter${i}`).innerHTML = /*html*/ `
    ${newLikeNumber + 1}
`;
  } else {
    document.getElementById(`like_counter${i}`).innerHTML = /*html*/ `
    ${newLikeNumber - 1}
`;
  }
}






function sendComment(i) {
  

  let inputText = document.getElementById(`input${i}`).value;

  if (inputText == "") {
    alert("Bitte schreibe einen Kommentar");
  } else {
    document.getElementById(`new_comments${i}`).innerHTML += getInputTemplate(inputText);
    document.getElementById(`input${i}`).value = "";
  }

  saveComment(i, inputText);

  
}




function saveComment(i, inputText){
  books[i].comments.push(inputText);

  commentToLocalStorage();
}


function commentToLocalStorage(){
  localStorage.setItem("books", JSON.stringify(books));
}




function commentFromLocalStorage(){

  JSON.parse(localStorage.getItem(books)) || [];

//   if (comment != null) {
//     newArray = myArr
// }

}

















// function saveData(i){
//   let inputRef = document.getElementById(`input${i}`).value;

//   if (inputRef.value != ""){
//       newArray.push(inputRef.value);
//   }

//   saveToLocalStorage();

//   inputRef.value = "";
// }