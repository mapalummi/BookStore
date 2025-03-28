function getBookTemplate(i){
    return `<div class="master_container_section">
    <div class="container1">
        <h1>${books[i].title}</h1>
    </div>
    <div class="container2">
        <img src="./assets/img/buch03.png" alt="">
    </div>
    <div class="container3">
        <div id="price_field" class="price">${books[i].price.toFixed(2)} €</div>

        <div id="like_field" class="like_section">
            <p id="like_counter${[i]}" class="like_count">${books[i].likes}</p>

            <a id="like_btn${[i]}" onclick="likeButton(${[i]})" href="javascript:void(0)">
                <img id="heart_img${[i]}" class="like_img" src="./assets/icons/icons8-like-gefüllt.png"  alt="">
            </a>
        </div>
    </div>
    <div class="container4">
        <table>
            <tr>
                <td>Autor</td>
                <td>:</td>
                <td>${books[i].author}</td>
            </tr>
            <tr>
                <td>Erscheinungsjahr</td>
                <td>:</td>
                <td>${books[i].publishedYear}</td>
            </tr>
            <tr>
                <td>Genre</td>
                <td>:</td>
                <td>${books[i].genre}</td>
            </tr>
        </table>
    </div>
    <div class="container5">
        <h4>Kommentare</h4>
        <div class="container6">
            <div id="comment_section" class="comment_container">
                <div id="new_comments${i}" class="comment_content_style"></div>
                <div id="comment_content${i}" class="comment_content_style"></div>
            </div>
        </div>
        <div class="input_container">
            <input id="input${i}" class="input_field" type="text" placeholder="Schreib deinen Kommentar ...">
            <a onclick="sendComment(${i})" class="send_button" href="javascript:void(0)">
                <img src="./assets/icons/icons8-papierflieger.png" alt="">
            </a>
        </div>
    </div>
    </div>
    `;
}

function getCommentTemplate(i,j){
    return `
          <table>
            <tr>
                <td>[${books[i].comments[j].name}]</td>
                <td>:</td>
                <td>${books[i].comments[j].comment}</td>
            </tr>
          </table>
          `;
}

function getInputTemplate(comment){
    return `
        <table>
            <tr>
                <td>[Leser456]</td>
                <td>:</td>
                <td>${comment}</td>
            </tr>
        </table>
`;
}