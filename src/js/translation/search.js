import { refs } from '../refs';

const searchTextErrorUk = 'Невдалий результат пошуку. Введіть правильну назву фільму.';
const searchTextErrorEng = 'Search result not successful. Enter the correct movie name.';

export function changeLanguageSearch() {
    refs.searchErrorText.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.searchErrorText.insertAdjacentHTML('afterbegin', searchTextErrorUk);
        refs.searchInput.placeholder = 'Пошук фільму';
    } else {
        refs.searchErrorText.insertAdjacentHTML('afterbegin', searchTextErrorEng);
        refs.searchInput.placeholder = 'Movie search';
    }
}
