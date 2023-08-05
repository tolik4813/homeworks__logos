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
    let url = `http://www.omdbapi.com/?t=${userUrl}&apikey=f4635392`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            throw new Error('Server Error');
        });
}

searchButton.addEventListener('click', async () => {
    const movieTitle = movieInput.value;
    movieInput.value = '';

    if (movieTitle) {
        try {
            let result = await getResponse(movieTitle);

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
            alert('Try again some server Error');
        }
    }
});