import { refs } from '../refs';
import { changeLanguageModalTeam } from './modalTeam';
import { changeLanguageFooter } from './footer';
import { changeLanguageNav } from './navigation';
import { changeLanguageMyLibraryBtn } from './myLibraryBtn';
import { changeLanguageSearch } from './search';
import { changeLanguageLogin } from './login';
import { changeLanguageGenre } from './genre';

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

    callTranslationFunctions();
}

// localStorage.removeItem('lang');

function chechedLocalStorageLanguage() {
    if (localStorage.getItem('lang') == null) {
        console.log('local storege is empty');
        return;
    } else {
        let lang = localStorage.getItem('lang');

        refs.html.setAttribute('lang', `${lang}`);

        lang == 'uk' ? (refs.changeLanguage.checked = true) : (refs.changeLanguage.checked = false);
    }

    callTranslationFunctions();
}

chechedLocalStorageLanguage();

function callTranslationFunctions() {
    changeLanguageFooter();
    changeLanguageModalTeam();
    changeLanguageNav();
    changeLanguageMyLibraryBtn();
    changeLanguageSearch();
    changeLanguageLogin();
    changeLanguageGenre();
}
