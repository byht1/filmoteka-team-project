import { IMG_URL, dataMovie } from './API/api';
import { renderActorsModal, clearActorsModalMarkup } from './modalActors';
import { renderVideo } from './modalTrailer';
import { refs } from './refs';

const body = document.querySelector('body');

refs.openMovieModal.addEventListener('click', openMovieModal);
refs.closeMovieModalBtn.addEventListener('click', closeMovieModal);

let movieId = '';

async function renderMovieModal(id) {
    const movieData = await dataMovie(id);


  const moviePosterMarkup = ({ poster_path }) => {
    return `<img
            class="movie-image" data-movie="${id}"
            src="${
                poster_path
                    ? `${IMG_URL}${poster_path}`
                    : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
            }"
            alt=""
          />`;
    };

    const movieDataMarkup = ({ title, vote_average, vote_count, popularity, original_title, genres, overview }) => {
        return `
          <h2 class="data__title">${title}</h2>
          <ul class="data__list list">
            <li class="list__item">
              <p class="data__item">Vote / Votes</p>
              <p class="data__info">
                <span class="data__span data__span--orange">${vote_average}</span>
                <span> / </span>
                <span class="data__span data__span--divider">${vote_count}</span>
              </p>
            </li>
            <li class="list__item">
              <p class="data__item">Popularity</p>
              <p class="data__info">${popularity}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Original Title</p>
              <p class="data__info data__info--upper">${original_title}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Genre</p>
              <p class="data__info">${genres.map(genre => genre.name).join(', ')}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Actors</p>
              <button type="button" class="data__button">Show me</button>
            </li>
          </ul>
          <p class="data__about">About</p>
          <p class="data__about-text">${overview}</p> `;
    };

    refs.moviePosterContainer.insertAdjacentHTML('beforeend', moviePosterMarkup(movieData));

    refs.movieDataContainer.insertAdjacentHTML('beforeend', movieDataMarkup(movieData));
}

function clearMovieModalMarkup() {
    refs.moviePosterContainer.innerHTML = '';
    refs.movieDataContainer.innerHTML = '';
}

function openMovieModal(event) {
    event.preventDefault;

    clearMovieModalMarkup();
    clearActorsModalMarkup();

    const isImageElement = event.target;

    if (!isImageElement.classList.contains('movie-img')) {
        return;
    }

    const parentOfImageElement = isImageElement.closest('.movie-card');

    movieId = parentOfImageElement.dataset.id;

    refs.movieModal.classList.add('is-open');

  renderMovieModal(movieId);
  renderActorsModal(movieId);
  // renderVideo(movieId);

    addEventListenerOnMovieModal();
}

export function addEventListenerOnMovieModal() {
  document.addEventListener('keydown', onEscapeClick);
  body.classList.add('hidden');
  refs.movieModalBackdrop.addEventListener(
    'click',
    onBackdropOfMovieModalClick
  );
}

function onEscapeClick(event) {
    if (event.key == 'Escape') {
        closeMovieModal();
    }
}

function onBackdropOfMovieModalClick(event) {
    if (event.target == event.currentTarget) {
        closeMovieModal();
    }
}

export function closeMovieModal() {
  refs.movieModal.classList.remove('is-open');
  body.classList.remove('hidden');

    removeEventListenerFromMovieModal();
}

export function removeEventListenerFromMovieModal() {
    document.removeEventListener('keydown', onEscapeClick);
    refs.movieModalBackdrop.removeEventListener('click', onBackdropOfMovieModalClick);
}

const playBox = document.querySelector('.trailer-backdrop');
const box = document.querySelector('.image__wrapper');

box.addEventListener('click', function (e) {
  e.preventDefault();

  const id = document.querySelector('.movie-image').dataset.movie;
  renderVideo(id);
  playBox.classList.remove('is-hidden3');
  document.removeEventListener('keydown', onEscapeClick);
});

playBox.addEventListener('click', function (e) {
  if (e.target !== e.currentTarget) return;

  playBox.classList.add('is-hidden3');
  document.addEventListener('keydown', onEscapeClick);
});

document.addEventListener('keydown', escVideo);

function escVideo(e) {
  if (e.key == 'Escape') {
    playBox.classList.add('is-hidden3');
    document.addEventListener('keydown', onEscapeClick);
    document.removeEventListener('keydown', escVideo);
  }
}
