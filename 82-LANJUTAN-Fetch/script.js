// menjalankan search
/* $('.search-button').on('click', function () {

    // menggunakan AJAX JQUERY
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=862c6674&&s=' + $('.input-keyword').val(),
        success: function (result) {
            // membuat variabel untuk mengambil object data film nya dan tidak mengambil search nya di api
            const movies = result.Search;
            // membuat variabel untuk menampung data film movies
            let cards = '';

            // mengambil data film dengan looping
            movies.forEach((m) => {
                cards += showCards(m);
            });

            // menyimpan movies yang ditampung ke cards ke elemen HTML movies-container
            $('.movies-container').html(cards);

            // membuat ketika tombol details di klik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=862c6674&&i=' + $(this).data('imdbid'),
                    success: function (m) {
                        const moviesDetails = showMovieDetails(m);

                        // mengganti modal body di elemen HTML dengan moviesDetails
                        $('.modal-body').html(moviesDetails);
                    },
                    error: function (e) {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: function (e) {
            console.log(e.responseText);
        }
    });

}); */


// Dengan menggunakan Fetch

// memanggil class button search
const serachButton = document.querySelector('.search-button');

// membuat event click
serachButton.addEventListener('click', function () {
    // mengambil class input keyword
    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=862c6674&&s=' + inputKeyword.value)
        // membuat ketika callback nya terpenuhi (ini akan menghasilkan promise)
        .then(response => response.json())
        // maka kita harus buat then lagi agar menjadi bentuk array
        .then(response => {
            const movies = response.Search;
            let cards = '';

            movies.forEach((m) => {
                cards += showCards(m);
            });
            // memanggil class movie container
            const movieContainer = document.querySelector('.movies-container');
            movieContainer.innerHTML = cards;

            // membuat ketika tombol details di klik
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
});




































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