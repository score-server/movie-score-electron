const electron = require('electron');

let movie;

function loadMovie() {
    const url = new URL(window.location.href);
    const param = url.searchParams.get("movie");
    console.log(param);

    const json = httpGet('http://scorewinner.ch:8081/api/movie/' + param
        + '?sessionId=b9d59e78ea5f30c2bd1d748d8ef6bd7f6a914dadac213b1a2d0f4b0a170104f1');

    movie = JSON.parse(json);

    const container = document.querySelector('#movie');
    const img = document.createElement('img');
    img.src = movie.backgroundImg;
    img.style = 'width: 100%';
    container.appendChild(img)
}

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
