import { saveToStorage, loadFromStorage } from './storage';
import { refs } from './refs';

let idOfMovie = '';

refs.movieGallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  const swatchEl = e.target;
  if (!swatchEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = swatchEl.closest('.movie-card');

  idOfMovie = parentEl.dataset.id;
  console.log(idOfMovie);
}
