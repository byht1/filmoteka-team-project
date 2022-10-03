import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import createPagination from './pagination/pagination-api';

renderMovies(dataMovieList());

export async function renderMovies(films, fn, value) {
  const movies = await films;
  renderFilmGallery(movies);
  if (typeof value === 'number') {
    createPagination(movies, fn, value);
    return;
  }

  if (value) {
    createPagination(movies, fn, value);
    return;
  }

  createPagination(movies);
}

export async function renderFilmGallery(movies) {
  const genresData = (await dataGenre()).genres;

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
        .slice(0, 3)
        .join(', ');

      return `<li class="movie-card" data-id="${movie.id}">
      <div class="img-wrap">
      <img class = "movie-img" src="${
        movie.poster_path
          ? IMG_URL + movie.poster_path
          : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
      }"
          alt="${movie.original_title}" loading="lazy"/>
      </div>
        <p class="movie-name">${movie.title}</p><div class="movie-info">
        <p class="movie-genre">${
          movie.genre_ids.length > 0 ? genresList : 'Good movie'
        } | ${
        movie.release_date ? movie.release_date.slice(0, 4) : 'none'
      }</p><span class="movie-raiting">${movie.vote_average.toFixed(
        1
      )}</span></div>
      </li>`;
    })
    .join('');
  refs.movieGallery.innerHTML = markup;
}

const showOnPx = 100;

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    refs.scrolltopBtn.classList.remove('visually-hidden');
  } else {
    refs.scrolltopBtn.classList.add('visually-hidden');
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};
refs.scrolltopBtn.addEventListener('click', goToTop);
