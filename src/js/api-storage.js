import { saveToStorage, loadFromStorage } from './storage';
import { refs } from './refs';

const SAVED_WATCHED_MOVIE = 'saved-to-storage-watched-movies';

let idOfMovie = '';

refs.movieGallery.addEventListener('click', onGalleryClick);
refs.addWatchedBtn.addEventListener('click', onAddWatchedBtnClick);

console.log();
function onGalleryClick(e) {
  const swatchEl = e.target;
  if (!swatchEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = swatchEl.closest('.movie-card');

  idOfMovie = parentEl.dataset.id;
  console.log(idOfMovie);
}

function onAddWatchedBtnClick(e) {
  let arrayOfStorage = loadFromStorage(SAVED_WATCHED_MOVIE);

  if (!arrayOfStorage) {
    arrayOfStorage = [];
  }

  arrayOfStorage.push(idOfMovie);
  saveToStorage(SAVED_WATCHED_MOVIE, arrayOfStorage);

  console.log(arrayOfStorage);
}
