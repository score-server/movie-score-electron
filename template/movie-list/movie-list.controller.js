const electron = require('electron');

function loadMovies() {
    //load movies from api
    const movieList = document.querySelector('ul');

    const movies = [
        ['blob', 2019],
        ['testmovie', 2019],
        ['teeee', 2014],
        ['bluuu', 201]
    ];

    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];

        const movieCard = document.createElement('li');
        const movieLink = document.createElement('a');
        movieLink.href = './Movie/Movie.view.html?Movie=' + movie[1];
        const movieTitle = document.createTextNode(movie[0] + ' ' + movie[1]);

        movieLink.appendChild(movieTitle);
        movieCard.appendChild(movieLink);
        movieList.appendChild(movieCard);
    }
}