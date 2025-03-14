// function getBookTemplate(i){
//     return `<div>
//                 <p>${books[i].title}</p>
//                 <p>${books[i].author}</p>
//                 <p>${books[i].likes}</p>
//                 <p>${books[i].price}</p>
//                 <p>${books[i].publishedYear}</p>
//                 <p>${books[i].genre}</p>
//             </div>
//     `;
// }


function getBookTemplate(i){
    return `<div>
            <h1>${books[i].title}</h1>
        </div>
        <div class="book_img_section"><img src="./assets/img/buch03.png" alt=""></div>
        <div class="book_info_section">Autor:${books[i].author}</div>
        <div class="book_comment_section">Kommentare</div>
        <div class="book_input_section">
            <input type="text" placeholder="Schreib deinen Kommentar ...">
            <a class="send_btn" href="#"><img src="./assets/icons/icons8-gesendet.png" alt=""></a>
        </div>
    `;
}
