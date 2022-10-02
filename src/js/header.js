import { refs } from './refs';
import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import { renderMovies } from './movies';
import { onSignInBtn } from './login';
import { allQueue } from './API/userData';

window.addEventListener('resize', function () {
  if (window.innerWidth < 767) {
    refs.logoText.classList.add('visually-hidden');
  }
  refs.logoText.classList.remove('visually-hidden');
});

refs.navPageHome.addEventListener('click', homeBtnClick);
refs.navLogo.addEventListener('click', homeBtnClick);
refs.navPageLib.addEventListener('click', libBtnClick);
refs.watchedButton.addEventListener('click', onWatchedClick);
refs.queueButton.addEventListener('click', onQueueClick);

export function homeBtnClick(e) {
  e.preventDefault();
  refs.header.classList.remove('header--library');
  refs.navPageHome.classList.add('current');
  refs.navPageLib.classList.remove('current');
  refs.searchWrap.classList.remove('visually-hidden');
  refs.libWrap.classList.add('visually-hidden');
  renderMovies(dataMovieList());
}

function libBtnClick(e) {
  e.preventDefault();
  if (localStorage.getItem('token') === null) {
    return onSignInBtn();
  }
  refs.header.classList.add('header--library');
  refs.navPageLib.classList.add('current');
  refs.navPageHome.classList.remove('current');
  refs.searchWrap.classList.add('visually-hidden');
  refs.libWrap.classList.remove('visually-hidden');
  getAllQueue();
  refs.queueButton.classList.add('library-button__active');
  refs.watchedButton.classList.remove('library-button__active');
}

async function getAllQueue() {
  const {
    data: { data: results },
  } = await allQueue();
  const movie = { results };
  await renderMovies(movie);
}

function onWatchedClick() {
  refs.watchedButton.classList.add('library-button__active');
  refs.queueButton.classList.remove('library-button__active');
}

function onQueueClick() {
  refs.queueButton.classList.add('library-button__active');
  refs.watchedButton.classList.remove('library-button__active');
}
