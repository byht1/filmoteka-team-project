import { refs } from '../refs';

export function changeLanguageGenre() {
    if (refs.html.getAttribute('lang') == 'uk') {
        refs.genreText.textContent = 'Жанри';
    } else {
        refs.genreText.textContent = 'Genres';
    }
}
