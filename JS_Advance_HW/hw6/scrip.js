const searchButton = document.getElementById('search-btn');
const movieInput = document.getElementById('movie-input');
const movieDetails = document.getElementById('movie-details');
const modal = document.getElementById('modal');
const title = document.getElementById('details-title');
const posters = document.getElementById('posters');
const awards = document.getElementById('modal-Awards');
const year = document.getElementById('year');
const rating = document.getElementById('rating')
const released = document.getElementById('modal-Released');
const plot = document.getElementById('details-plot');
const director = document.getElementById('modal-Director');

function readMore() {
    modal.style.display = 'block';
}
function closeModalWindow() {
    modal.style.display = 'none';
}

function getResponse(userUrl) {
    const xhr = new XMLHttpRequest();
    let url = `http://www.omdbapi.com/?t=${userUrl}&apikey=f4635392`;
    xhr.open('GET', url, false);
    xhr.send();
    let response = xhr.response;

    return JSON.parse(response);
};

searchButton.addEventListener('click', () => {
    const movieTitle = movieInput.value;
    movieInput.value = '';
    if (movieTitle) {
        try {
            let result = getResponse(movieTitle);
            posters.innerHTML = `<img id="posters_img" src="${result.Poster}"></img>`;
            title.innerText = `${result.Title}`;
            awards.innerText = `Awards: ${result.Awards}`;
            year.innerText = `Year: ${result.Year}`;
            rating.innerText = `Rating: ${result.imdbRating}`;
            released.innerText = `DVD released: ${result.Released}`;
            plot.innerText = `Plot: ${result.Plot}`;
            director.innerText = `Director: ${result.Director}`;
            movieDetails.style.display = 'flex';
        } catch (error) {
            alert('Try again some server Error')
        }
    }
});