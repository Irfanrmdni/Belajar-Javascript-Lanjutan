// Dengan menggunakan Fetch

/* const serachButton = document.querySelector('.search-button');

serachButton.addEventListener('click', function () {
    // ? mengambil class input keyword
    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=862c6674&&s=' + inputKeyword.value)
        // ? membuat ketika callback nya terpenuhi (ini akan menghasilkan promise)
        .then(response => response.json())
        // ? maka kita harus buat then lagi agar menjadi bentuk array
        .then(response => {
            const movies = response.Search;
            let cards = '';

            movies.forEach((m) => {
                cards += showCards(m);
            });
            // ? memanggil class movie container
            const movieContainer = document.querySelector('.movies-container');
            movieContainer.innerHTML = cards;

            // ? membuat ketika tombol details di klik
            const detailsButton = document.querySelectorAll('.modal-detail-button');
            detailsButton.forEach((btnModal) => {
                btnModal.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=862c6674&&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetails = showMovieDetails(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetails;
                        });
                });
            });
        });
}); */

// ? fetch refactor async await

const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', async function () {
    let input = document.querySelector('.input-keyword');
    const movies = await getMovies(input.value);
    updateUi(movies);
})

function getMovies(value) {
    let movies;
    fetch('http://www.omdbapi.com/?apikey=862c6674&&s=' + value)
        .then(response => response.json())
        .then(response => {
            movies = response.Search;
        });
    return movies;
}

function updateUi(movies) {
    let cardMovie = '';
    const moviesContainer = document.querySelector('.movies-container');

    movies.forEach(function (movie) {
        cardMovie += showCards(movie);
    });
    moviesContainer.innerHTML = cardMovie;
}

document.addEventListener('click', async function (event) {
    if (event.target.classList.contains('modal-detail-button')) {
        let imdbid = event.target.dataset.imdbid;
        let movieDetail = await getMovieDetail(imdbid);
        updateUiDetail(movieDetail);
    };
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=862c6674&&i=' + imdbid)
        .then(response => response.json())
        .then(response => response);
}


function updateUiDetail(response) {
    const movieDetail = showMovieDetails(response);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}




// function showCards
function showCards(m) {
    return `<div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h5 class="card-title">${m.Type}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-toggle="modal" data-target="#moviesDataModal">Show Details</a>
            </div>
        </div>
    </div>`
}

// function showMovieDetails
function showMovieDetails(m) {
    return `<div class="modal-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h3>Toy Story</h3>
                    </li>
                    <li class="list-group-item"><strong>Released : </strong> ${m.Released}</li>
                    <li class="list-group-item"><strong>Runtime : </strong> ${m.Runtime}</li>
                    <li class="list-group-item"><strong>Genre : </strong> ${m.Genre}</li>
                    <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                    <li class="list-group-item"><strong>Language : </strong> ${m.Language}</li>
                    <li class="list-group-item"><strong>Country : </strong> ${m.Country}</li>
                    <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                </ul>
            </div>                                                   
        </div>                                              
    </div>                                          
</div>`
}