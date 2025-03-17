

function getBookTemplate(i){
    return `<div class="test_container_section">
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

            <a id="like_btn" onclick="likeButton()" href="#">
                <img id="heart_img${[i]}" class="like_img" src="./assets/icons/icons8-like-gefüllt.png"  alt="">
            </a>
        </div>

    </div>

    <div class="container4">
        <table>
            <tr>
                <td>Author</td>
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
            
                <div id="new_comments" class="input_comment_content"></div>
            <div class="comment_content">

            <table>
            <tr id="test_row${[i]}">
            </tr>
            </table>

            </div>

            </div>
        </div>

        <div class="input_container">
            <input id="input" class="input_field" type="text" placeholder="Schreib deinen Kommentar ...">
            <a onclick="sendComment()" class="send_button" href="#">
                <img src="./assets/icons/icons8-papierflieger.png" alt="">
            </a>
        </div>

    </div>
    </div>
    `;
}


function getInputTemplate(inputText){
    return `
        <table>
          <tr>
            <td>[Leser456]</td>
            <td>:</td>
            <td>${inputText}</td>
          </tr>
          </table>
`;
}