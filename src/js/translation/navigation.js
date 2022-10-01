import { refs } from '../refs';

export function changeLanguageNav() {
    refs.homeTextChangeLanguage.innerHTML = '';
    refs.myLibraryTextChangeLanguage.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.homeTextChangeLanguage.insertAdjacentHTML('afterbegin', 'Головна');
        refs.myLibraryTextChangeLanguage.insertAdjacentHTML('afterbegin', 'Моя бібліотека');
    } else {
        refs.homeTextChangeLanguage.insertAdjacentHTML('afterbegin', 'Home');
        refs.myLibraryTextChangeLanguage.insertAdjacentHTML('afterbegin', 'My library');
    }
}
