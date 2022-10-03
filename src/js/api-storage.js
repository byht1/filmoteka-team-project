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
  console.log(idOfMovie);

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

    return;
  }

  addMovieToWatched(idOfMovie, e.target);

  if (refs.queueBtn.dataset.action === 'removeById') {
    deleteMovieFromQueue(idOfMovie, refs.queueBtn);
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

    return;
  }

  addMovieToQueue(idOfMovie, e.target);

  if (refs.watchedBtn.dataset.action === 'removeById') {
    deleteMovieFromWatched(idOfMovie, refs.watchedBtn);
  }
}

async function checkAllWatched() {
  try {
    const response = await allWatched();

    if (!response) {
      shiftActionToAddByWatched(refs.watchedBtn);
      return;
    }

    const {
      data: { data },
    } = response;

    console.log('watched', data);

    const containsId = data.find(element => element.id === idOfMovie);

    containsId
      ? shiftActionToRemoveByWatched(refs.watchedBtn)
      : shiftActionToAddByWatched(refs.watchedBtn);
  } catch (error) {
    console.error(error);
  }
}

async function checkAllQueue() {
  try {
    const response = await allQueue();

    if (!response) {
      shiftActionToAddByQueue(refs.queueBtn);
      return;
    }

    const {
      data: { data },
    } = response;

    console.log('queue', data);

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
