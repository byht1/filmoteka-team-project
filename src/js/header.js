import { refs } from './refs';

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
  refs.header.classList.add('header--library');
  refs.navPageLib.classList.add('current');
  refs.navPageHome.classList.remove('current');
  refs.searchWrap.classList.add('visually-hidden');
  refs.libWrap.classList.remove('visually-hidden');
}
