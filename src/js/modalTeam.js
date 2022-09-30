import { refs } from './refs';

refs.goItStud.addEventListener('click', onGoItStudentsClick);
refs.closeModalBtn.addEventListener('click', closeModal);

function onGoItStudentsClick() {
    refs.modalBackdrop.classList.remove('visually-hidden');

    addEventListener();
}

function addEventListener() {
    document.addEventListener('keydown', onEscapeClick);
    refs.modalBackdrop.addEventListener('click', onBackdropClick);
}

function onEscapeClick(evt) {
    if (evt.key == 'Escape') {
        closeModal();
    }
}

function onBackdropClick(evt) {
    if (evt.target == evt.currentTarget) {
        closeModal();
    }
}

function closeModal() {
    refs.modalBackdrop.classList.add('visually-hidden');

    removeEventListener();
}

function removeEventListener() {
    document.removeEventListener('keydown', onEscapeClick);
    refs.modalBackdrop.removeEventListener('click', onBackdropClick);
}
