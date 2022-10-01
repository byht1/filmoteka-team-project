import { refs } from '../refs';

export function changeLanguageMyLibraryBtn() {
    refs.loadWathedBtn.innerHTML = '';
    refs.loadQueueBtn.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.loadWathedBtn.insertAdjacentHTML('afterbegin', 'Переглянуто');
        refs.loadQueueBtn.insertAdjacentHTML('afterbegin', 'Заплановоно');
    } else {
        refs.loadWathedBtn.insertAdjacentHTML('afterbegin', 'Watched');
        refs.loadQueueBtn.insertAdjacentHTML('afterbegin', 'Queue');
    }
}
