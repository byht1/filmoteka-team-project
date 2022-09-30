import { refs } from './refs';
import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import { renderMovies } from './movies';
import { onSignInBtn } from './login';

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

function homeBtnClick(e) {
  e.preventDefault();
  refs.header.classList.remove('header--library');
  refs.navPageHome.classList.add('current');
  refs.navPageLib.classList.remove('current');
  refs.searchWrap.classList.remove('visually-hidden');
  refs.libWrap.classList.add('visually-hidden');
}

function libBtnClick(e) {
  e.preventDefault();
  const loginvalue = Math.random();
  if (loginvalue > 0.7) {
    return onSignInBtn();
  }
  refs.header.classList.add('header--library');
  refs.navPageLib.classList.add('current');
  refs.navPageHome.classList.remove('current');
  refs.searchWrap.classList.add('visually-hidden');
  refs.libWrap.classList.remove('visually-hidden');
  renderMovies(dataSearch('titanic'));
  refs.queueButton.classList.add('library-button__active');
  refs.watchedButton.classList.remove('library-button__active');
}

function onWatchedClick() {
  refs.watchedButton.classList.add('library-button__active');
  refs.queueButton.classList.remove('library-button__active');
}

function onQueueClick() {
  refs.queueButton.classList.add('library-button__active');
  refs.watchedButton.classList.remove('library-button__active');
}
