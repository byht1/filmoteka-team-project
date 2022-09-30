import { saveToStorage, loadFromStorage } from './storage';
import {
  shiftActionToRemoveByWatched,
  shiftActionToAddByWatched,
} from './shiftActionOfBtn';
import { refs } from './refs';

const SAVED_WATCHED_MOVIE = 'saved-to-storage-watched-movies';

let idOfMovie = '';

refs.movieGallery.addEventListener('click', onGalleryClick);
refs.watchedBtn.addEventListener('click', onAddWatchedBtnClick);

function onGalleryClick(e) {
  const swatchEl = e.target;

  if (!swatchEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = swatchEl.closest('.movie-card');

  idOfMovie = parentEl.dataset.id;
  console.log(idOfMovie);

  const arrayOfStorage = loadFromStorage(SAVED_WATCHED_MOVIE);

  if (arrayOfStorage && arrayOfStorage.includes(idOfMovie)) {
    shiftActionToRemoveByWatched(refs.watchedBtn);
    return;
  }

  shiftActionToAddByWatched(refs.watchedBtn);
}

function onAddWatchedBtnClick(e) {
  let arrayOfStorage = loadFromStorage(SAVED_WATCHED_MOVIE);

  if (e.target.dataset.action === 'removeById') {
    const filteredArrayOfStorage = arrayOfStorage.filter(
      element => element !== idOfMovie
    );

    saveToStorage(SAVED_WATCHED_MOVIE, filteredArrayOfStorage);

    shiftActionToAddByWatched(e.target);

    return;
  }

  if (!arrayOfStorage) {
    arrayOfStorage = [];
  }

  arrayOfStorage.push(idOfMovie);
  saveToStorage(SAVED_WATCHED_MOVIE, arrayOfStorage);

  shiftActionToRemoveByWatched(e.target);
}
