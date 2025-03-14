function getBookTemplate(i){
    return `<div>
                <p>${books[i].title}</p>
                <p>${books[i].author}</p>
                <p>${books[i].likes}</p>
                <p>${books[i].price}</p>
                <p>${books[i].publishedYear}</p>
                <p>${books[i].genre}</p>
            </div>
    `;
}