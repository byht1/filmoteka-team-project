import { refs } from './refs';

const body = document.querySelector('body');

refs.goItStud.addEventListener('click', onGoItStudentsClick);
refs.closeModalBtn.addEventListener('click', closeModal);

function onGoItStudentsClick() {
    refs.modalBackdrop.classList.remove('visually-hidden');
    body.classList.add('hidden');
    console.log('~ refs.body', refs.body);

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
    body.classList.remove('hidden');
    removeEventListener();
}

function removeEventListener() {
    document.removeEventListener('keydown', onEscapeClick);
    refs.modalBackdrop.removeEventListener('click', onBackdropClick);
}
