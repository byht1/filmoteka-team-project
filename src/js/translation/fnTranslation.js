import { refs } from '../refs';
import { changeLanguageModalTeam } from './modalTeam';
import { changeLanguageFooter } from './footer';
import { changeLanguageNav } from './navigation';
import { changeLanguageMyLibraryBtn } from './myLibraryBtn';

refs.changeLanguage.addEventListener('input', changeLanguage);

function changeLanguage(evt) {
    // true - ukr
    // fasle - eng

    if (evt.target.checked) {
        refs.html.setAttribute('lang', 'uk');
    } else {
        refs.html.setAttribute('lang', 'en');
    }

    changeLanguageFooter();
    changeLanguageModalTeam();
    changeLanguageNav();
    changeLanguageMyLibraryBtn();
}
