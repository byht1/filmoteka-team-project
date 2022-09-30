import { refs } from './refs';

refs.openMovieModal.addEventListener('click', openMovieModal);
refs.closeMovieModalBtn.addEventListener('click', closeMovieModal);

function openMovieModal(event) {
  event.preventDefault;

  const isImageElement = event.target.classList.contains('movie-img');

  if (!isImageElement) {
    return;
  }

  refs.movieModal.classList.add('is-open');

  addEventListenerOnMovieModal();
}

function addEventListenerOnMovieModal() {
  document.addEventListener('keydown', onEscapeClick);
  refs.movieModalBackdrop.addEventListener(
    'click',
    onBackdropOfMovieModalClick
  );
}

function onEscapeClick(evt) {
  if (evt.key == 'Escape') {
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
