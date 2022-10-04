import { refs } from '../refs';
import { changeLanguageModalTeam } from './modalTeam';
import { changeLanguageFooter } from './footer';
import { changeLanguageNav } from './navigation';
import { changeLanguageMyLibraryBtn } from './myLibraryBtn';
import { changeLanguageSearch } from './search';
import { changeLanguageLogin } from './login';
import { changeLanguageGenre } from './genre';
import { renderMovies } from '../movies';
import { dataMovieList } from '../API/api';
import { outputGenre } from '../genre';
import { getAllQueue, getAllWatched } from '../myLibrary';

refs.changeLanguage.addEventListener('input', changeLanguage);

function changeLanguage(evt) {
  // true - ukr
  // fasle - eng
  if (evt.target.checked) {
    refs.html.setAttribute('lang', 'uk');
    localStorage.setItem('lang', 'uk');
  } else {
    refs.html.setAttribute('lang', 'en');
    localStorage.setItem('lang', 'en');
  }
  location.reload();
  callTranslationFunctions();
}

// localStorage.removeItem('lang');

function chechedLocalStorageLanguage() {
  if (localStorage.getItem('lang') == null) {
    return;
  } else {
    let lang = localStorage.getItem('lang');

    refs.html.setAttribute('lang', `${lang}`);

    lang == 'uk'
      ? (refs.changeLanguage.checked = true)
      : (refs.changeLanguage.checked = false);
  }

  callTranslationFunctions();
}

chechedLocalStorageLanguage();

function callTranslationFunctions() {
  if (refs.navPageLib.classList.contains('current')) {
    if (refs.queueButton.classList.contains('library-button__active')) {
      getAllQueue();
    } else {
      getAllWatched();
    }
  } else {
    renderMovies(dataMovieList());
  }
  outputGenre();
  changeLanguageFooter();
  changeLanguageModalTeam();
  changeLanguageNav();
  changeLanguageMyLibraryBtn();
  changeLanguageSearch();
  changeLanguageLogin();
  changeLanguageGenre();
}

// console.log(refs.noEmailText.textContent);
