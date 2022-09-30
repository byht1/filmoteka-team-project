import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import createPagination from './pagination/pagination-api'

renderMovies(dataMovieList());

export async function renderMovies(films) {
  const movies = await films;
  renderFilmGallery(movies);
  createPagination(movies);
}

export async function renderFilmGallery(movies) {
  const genresData = (await dataGenre()).genres;
  
    const markup = movies.results.map(movie => {
      const genresList = movie.genre_ids.map(idNum => {
          for (const obj of genresData) {
            if (idNum === obj.id) {
              return obj.name;
            }
          }
        })
        .join(', ');

      return `<li class="movie-card" data-id="${movie.id}">
      <div class="img-wrap">
      <img class = "movie-img" src="${IMG_URL}${movie.poster_path}" alt="${
        movie.original_title
      }" loading="lazy"/>
      </div>
        <p class="movie-name">${movie.original_title}</p>
        <p class="movie-genre">${genresList}} | ${movie.release_date.slice(0, 4)}</p>
      </li>`;
    })
    .join('');

  refs.movieGallery.innerHTML = markup;
  }