import { saveToStorage, loadFromStorage } from './storage';
import {
  shiftActionToRemoveByWatched,
  shiftActionToAddByWatched,
  shiftActionToRemoveByQueue,
  shiftActionToAddByQueue,
} from './shiftActionOfBtn';
import { refs } from './refs';

export const SAVED_WATCHED_MOVIES = 'watched-movies';
export const SAVED_QUEUE_MOVIE = 'movies-queue';

let idOfMovie = '';

refs.movieGallery.addEventListener('click', onGalleryClick);
refs.watchedBtn.addEventListener('click', onAddWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onGalleryClick(e) {
  const swatchEl = e.target;

  if (!swatchEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = swatchEl.closest('.movie-card');

  idOfMovie = parentEl.dataset.id;
  console.log(idOfMovie);

  const watchedOfStorage = loadFromStorage(SAVED_WATCHED_MOVIES);

  watchedOfStorage && watchedOfStorage.includes(idOfMovie)
    ? shiftActionToRemoveByWatched(refs.watchedBtn)
    : shiftActionToAddByWatched(refs.watchedBtn);

  const queueOfStorage = loadFromStorage(SAVED_QUEUE_MOVIE);

  queueOfStorage && queueOfStorage.includes(idOfMovie)
    ? shiftActionToRemoveByQueue(refs.queueBtn)
    : shiftActionToAddByQueue(refs.queueBtn);
}

function onAddWatchedBtnClick(e) {
  let arrayOfStorage = loadFromStorage(SAVED_WATCHED_MOVIES);

  if (e.target.dataset.action === 'removeById') {
    const filteredArrayOfStorage = arrayOfStorage.filter(
      element => element !== idOfMovie
    );

    saveToStorage(SAVED_WATCHED_MOVIES, filteredArrayOfStorage);

    shiftActionToAddByWatched(e.target);

    return;
  }

  if (!arrayOfStorage) {
    arrayOfStorage = [];
  }

  arrayOfStorage.push(idOfMovie);
  saveToStorage(SAVED_WATCHED_MOVIES, arrayOfStorage);

  shiftActionToRemoveByWatched(e.target);
}

function onQueueBtnClick(e) {
  let arrayOfStorage = loadFromStorage(SAVED_QUEUE_MOVIE);

  if (e.target.dataset.action === 'removeById') {
    const filteredArrayOfStorage = arrayOfStorage.filter(
      element => element !== idOfMovie
    );

    saveToStorage(SAVED_QUEUE_MOVIE, filteredArrayOfStorage);

    shiftActionToAddByQueue(e.target);

    return;
  }

  if (!arrayOfStorage) {
    arrayOfStorage = [];
  }

  arrayOfStorage.push(idOfMovie);

  saveToStorage(SAVED_QUEUE_MOVIE, arrayOfStorage);

  shiftActionToRemoveByQueue(e.target);
}
