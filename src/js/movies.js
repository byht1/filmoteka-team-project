import { IMG_URL, dataMovieList, dataGenre } from './API/api';
import { refs } from './refs';

renderMovies();

async function renderMovies() {
  const movies = await dataMovieList();
  const genresData = (await dataGenre()).genres;

  //   console.log(movies.results);

  const markup = movies.results
    .map(movie => {
      const genresList = movie.genre_ids
        .map(idNum => {
          for (const obj of genresData) {
            if (idNum === obj.id) {
              return obj.name;
            }
          }
        })
        .join(', ');

      return `<li class="movie-card">
      <div class="img-wrap">
      <img class = "movie-img" data-id="${movie.id}" src="${IMG_URL}${
        movie.poster_path
      }" alt="${movie.original_title}" />
      </div>
        
        <p class="movie-name">${movie.original_title}</p>
        <p class="movie-genre">${genresList}} | ${movie.release_date.slice(
        0,
        4
      )}</p>
      </li>`;
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
