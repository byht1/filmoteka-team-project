import { refs } from '../refs';

const genreText = genreTextdocument.querySelector('.show-burron-general');
console.log('~ genreText', genreText);
export function changeLanguageGenre() {
    if (refs.html.getAttribute('lang') == 'uk') {
        genreText.textContent = 'Жанри';
    } else {
        genreText.textContent = 'Genres';
    }
}
