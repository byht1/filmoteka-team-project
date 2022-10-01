import { IMG_URL, dataMovie } from './API/api';
import { refs } from './refs';

refs.openMovieModal.addEventListener('click', openMovieModal);
refs.closeMovieModalBtn.addEventListener('click', closeMovieModal);

let movieId = '';

async function renderMovieModal(id) {
  const movieData = await dataMovie(id);

  console.log(movieData);

  const movieModalMarkup = ({
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  }) => {
    return `<a href="" class="movie-modal__link">
        <div class="movie-modal__image wrapper">
          <img
            class="movie-image"
            src="${IMG_URL}${poster_path}"
            alt="${title}"
          />
          <div class="wrapper__overlay">
            <button type="button" class="wrapper__btn youtube-btn">
              <svg class="youtube-btn__icon" width="92" height="64">
                <use href="./images/symbol-defs.svg#icon-youtube"></use>
              </svg>
            </button>
          </div>
        </div>
      </a>
      <div class="movie-modal__wrapper">
        <div class="data">
          <h2 class="data__title">${title}</h2>
          <ul class="data__list list" data-id-${id}>
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
              <p class="data__info">${genres.join(', ')}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Actors</p>
              <button type="button" class="data__button">Show me</button>
            </li>
          </ul>
          <p class="data__about">About</p>
          <p class="data__about-text">${overview}</p>
        </div> `;
  };

  refs.movieModalContainer.insertAdjacentHTML(
    'afterbegin',
    movieModalMarkup(movieData)
  );
}

function clearMovieModalMarkup() {
  refs.movieModalContainer.innerHTML = '';
}

function openMovieModal(event) {
  event.preventDefault;

  clearMovieModalMarkup();

  const isImageElement = event.target;

  if (!isImageElement.classList.contains('movie-img')) {
    return;
  }

  const parentOfImageElement = isImageElement.closest('.movie-card');

  movieId = parentOfImageElement.dataset.id;

  refs.movieModal.classList.add('is-open');

  renderMovieModal(movieId);

  addEventListenerOnMovieModal();
}

function addEventListenerOnMovieModal() {
  document.addEventListener('keydown', onEscapeClick);
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

function closeMovieModal() {
  refs.movieModal.classList.remove('is-open');

  removeEventListenerFromMovieModal();
}

function removeEventListenerFromMovieModal() {
  document.removeEventListener('keydown', onEscapeClick);
  refs.movieModalBackdrop.removeEventListener(
    'click',
    onBackdropOfMovieModalClick
  );
}
