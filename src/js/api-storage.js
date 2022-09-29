import { saveToStorage, loadFromStorage } from './storage';
import { refs } from './refs';

refs.movieGallery.addEventListener('click', onGalleryClick);

let idOfMovie = '';

function onGalleryClick(e) {
  const swatchEl = e.target;
  if (!swatchEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = swatchEl.closest('.movie-card');

  console.log(parentEl.dataset.id);

  console.log(typeof parentEl.dataset.id);

  idOfMovie += parentEl.dataset.id;
}

console.log(idOfMovie);
