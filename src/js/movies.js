import { IMG_URL, dataMovieList, dataGenre } from './API/api';
import { refs } from './refs';

renderMovies();

async function renderMovies() {
  const movies = await dataMovieList();

  //console.log(movies.results);

  const markup = movies.results
    .map(movie => {
      return `<div class="movie-card">
        <img src="${IMG_URL}${movie.poster_path}" alt="${
        movie.original_title
      }" />
        <p class="movie-name">${movie.original_title}</p>
        <p class="movie-genre">${movie.genre_ids.join(
          ', '
        )} | ${movie.release_date.slice(0, 4)}</p>
      </div>`;
    })
    .join('');

  refs.movieGallery.innerHTML = markup;
}

/* async function genres(genresId) {
  const allGenres = await dataGenre();
  //   console.log(allGenres);
  let genresMovie = [];

  for (const id of genresId) {
    const genreId = allGenres.genres.findIndex(genre => genre.id === id);
    genresMovie.push(allGenres.genres[genreId].name);
  }
  return genresMovie;
} */
