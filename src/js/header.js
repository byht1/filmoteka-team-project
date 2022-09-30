import { refs } from './refs';
import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import { renderMovies } from './movies';

window.addEventListener('resize', function () {
  if (window.innerWidth < 767) {
    refs.logoText.classList.add('visually-hidden');
  }
  refs.logoText.classList.remove('visually-hidden');
});

refs.navPageHome.addEventListener('click', homeBtnClick);
refs.navLogo.addEventListener('click', homeBtnClick);
refs.navPageLib.addEventListener('click', libBtnClick);
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
  if (loginvalue > 0.3) {
    return alert('pls login');
  }
  refs.header.classList.add('header--library');
  refs.navPageLib.classList.add('current');
  refs.navPageHome.classList.remove('current');
  refs.searchWrap.classList.add('visually-hidden');
  refs.libWrap.classList.remove('visually-hidden');
  renderMovies(dataSearch('titanic'));
}
