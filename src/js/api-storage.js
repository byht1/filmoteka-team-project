import {
  shiftActionToRemoveByWatched,
  shiftActionToAddByWatched,
  shiftActionToRemoveByQueue,
  shiftActionToAddByQueue,
} from './shiftActionOfBtn';
import { refs } from './refs';
import { onSignInBtn } from './login';

import {
  add,
  allQueue,
  allWatched,
  deleteWatched,
  deleteQueue,
} from './API/userData';

import { getAllWatched, getAllQueue } from './myLibrary';

const STORAGE_KEY = 'token';
let idOfMovie = '';

refs.movieGallery.addEventListener('click', onGalleryClick);
refs.watchedBtn.addEventListener('click', onAddWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onGalleryClick(e) {
  const targetEl = e.target;

  if (!targetEl.classList.contains('movie-img')) {
    return;
  }

  const parentEl = targetEl.closest('.movie-card');

  idOfMovie = parentEl.dataset.id;

  checkAllWatched();

  checkAllQueue();
}

function onAddWatchedBtnClick(e) {
  const valueFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!valueFromStorage || valueFromStorage === '') {
    onSignInBtn();
    return;
  }

  checkAllWatched();

  checkAllQueue();

  if (e.target.dataset.action === 'removeById') {
    deleteMovieFromWatched(idOfMovie, e.target);
    if (refs.watchedButton.classList.contains('library-button__active')) {
      getAllWatched();
    }

    return;
  }

  addMovieToWatched(idOfMovie, e.target);

  if (refs.queueBtn.dataset.action === 'removeById') {
    deleteMovieFromQueue(idOfMovie, refs.queueBtn);
  }

  if (refs.queueButton.classList.contains('library-button__active')) {
    getAllQueue();
  }
}

function onQueueBtnClick(e) {
  const valueFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!valueFromStorage || valueFromStorage === '') {
    onSignInBtn();
    return;
  }

  checkAllWatched();

  checkAllQueue();

  if (e.target.dataset.action === 'removeById') {
    deleteMovieFromQueue(idOfMovie, e.target);
    if (refs.queueButton.classList.contains('library-button__active')) {
      getAllQueue();
    }
    return;
  }

  addMovieToQueue(idOfMovie, e.target);

  if (refs.watchedBtn.dataset.action === 'removeById') {
    deleteMovieFromWatched(idOfMovie, refs.watchedBtn);
  }

  if (refs.watchedButton.classList.contains('library-button__active')) {
    getAllWatched();
  }
}

async function checkAllWatched() {
  const valueFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!valueFromStorage || valueFromStorage === '') {
    return;
  }
  try {
    const response = await allWatched();

    if (!response) {
      shiftActionToAddByWatched(refs.watchedBtn);
      return;
    }

    const {
      data: { data },
    } = response;

    const containsId = data.find(element => element.id === idOfMovie);

    containsId
      ? shiftActionToRemoveByWatched(refs.watchedBtn)
      : shiftActionToAddByWatched(refs.watchedBtn);
  } catch (error) {
    console.error(error);
  }
}

async function checkAllQueue() {
  const valueFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!valueFromStorage || valueFromStorage === '') {
    return;
  }
  try {
    const response = await allQueue();

    if (!response) {
      shiftActionToAddByQueue(refs.queueBtn);
      return;
    }

    const {
      data: { data },
    } = response;

    const containsId = data.find(element => element.id === idOfMovie);

    containsId
      ? shiftActionToRemoveByQueue(refs.queueBtn)
      : shiftActionToAddByQueue(refs.queueBtn);
  } catch (error) {
    console.error(error);
  }
}

async function deleteMovieFromWatched(idOfMovie, target) {
  await deleteWatched(idOfMovie);
  shiftActionToAddByWatched(target);
}

async function addMovieToWatched(idOfMovie, target) {
  await add(idOfMovie, 'watched');
  shiftActionToRemoveByWatched(target);
}

async function deleteMovieFromQueue(idOfMovie, target) {
  await deleteQueue(idOfMovie);
  shiftActionToAddByQueue(target);
}

async function addMovieToQueue(idOfMovie, target) {
  await add(idOfMovie, 'queue');
  shiftActionToRemoveByQueue(target);
}
