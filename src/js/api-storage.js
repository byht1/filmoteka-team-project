import { saveToStorage, loadFromStorage } from './storage';
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
    console.log(refs.watchedBtn);
    refs.watchedBtn.setAttribute('data-action', 'removeById');
    refs.watchedBtn.innerText = 'Remove from watched';
    console.log(refs.watchedBtn);
  }
}

function onAddWatchedBtnClick(e) {
  let arrayOfStorage = loadFromStorage(SAVED_WATCHED_MOVIE);

  console.log(arrayOfStorage);

  if (e.target.dataset.action === 'removeById') {
    console.log(e.target.dataset.action);

    const filteredArrayOfStorage = arrayOfStorage.filter(
      element => element !== idOfMovie
    );

    console.log(filteredArrayOfStorage);

    saveToStorage(SAVED_WATCHED_MOVIE, filteredArrayOfStorage);
    e.target.setAttribute('data-action', 'addById');
    e.target.innerText = 'Add to watched';
    return;
  }

  if (!arrayOfStorage) {
    arrayOfStorage = [];
  }

  arrayOfStorage.push(idOfMovie);
  saveToStorage(SAVED_WATCHED_MOVIE, arrayOfStorage);

  console.log(arrayOfStorage);

  e.target.setAttribute('data-action', 'removeById');
  e.target.innerText = 'Remove from watched';
}
