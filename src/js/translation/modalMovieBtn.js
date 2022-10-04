import { refs } from '../refs';

const btnWatched = document.querySelector('.movie-modal__button.button-watched');
const btnQueue = document.querySelector('.movie-modal__button.button-queue');

export function changeLanguageModalMovieBtn() {
    if (refs.html.getAttribute('lang') == 'uk') {
        btnWatched.textContent = 'Додати до переглянутого';
        btnQueue.textContent = 'Додати до заплановоного';
    } else {
        btnWatched.textContent = 'Add to watched';
        btnQueue.textContent = 'Add to queue';
    }
}
