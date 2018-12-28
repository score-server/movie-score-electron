const electron = require('electron');

function loadMovies() {
    const movieList = document.querySelector('ul');

    const json =
        httpGet('http://scorewinner.ch:8081/api/movie?sessionId=b9d59e78ea5f30c2bd1d748d8ef6bd7f6a914dadac213b1a2d0f4b0a170104f1');

    const movies = JSON.parse(json);

    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];

        const card = document.createElement('li');
        card.classList.add('list-group-item');
        const thumbnail = document.createElement('img');
        thumbnail.src = movie.caseImg;
        thumbnail.classList.add('img-thumbnail');
        thumbnail.style = "max-height: 50px; min-height: 50px";
        const link = document.createElement('a');
        link.href = './Movie/Movie.view.html?movie=' + movie.id;
        const title = document.createTextNode(movie.title + ' ' + movie.year);

        link.appendChild(title);
        card.appendChild(thumbnail);
        card.appendChild(link);
        movieList.appendChild(card);
    }
}

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
