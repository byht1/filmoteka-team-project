import { refs } from './refs';

refs.openActorsModalBtn.addEventListener('click', openActorsModal);
refs.closeActorsModalBtn.addEventListener('click', closeActorsModal);

function openActorsModal(event) {
  event.preventDefault;

  const isBtnElement = event.target.classList.contains('data__button');

  if (!isBtnElement) {
    return;
  }

  refs.actorsModal.classList.add('is-open');

  addEventListenerOnActorsModal();
}

function addEventListenerOnActorsModal() {
  document.addEventListener('keydown', onEscapeClick);
  refs.actorsModalBackdrop.addEventListener(
    'click',
    onBackdropOfActorsModalClick
  );
}

function onEscapeClick(evt) {
  if (evt.key == 'Escape') {
    closeActorsModal();
  }
}

function onBackdropOfActorsModalClick(event) {
  if (event.target == event.currentTarget) {
    closeActorsModal();
  }
}

function closeActorsModal() {
  refs.actorsModal.classList.remove('is-open');

  removeEventListenerFromActorsModal();
}

function removeEventListenerFromActorsModal() {
  document.removeEventListener('keydown', onEscapeClick);
  refs.actorsModalBackdrop.removeEventListener(
    'click',
    onBackdropOfActorsModalClick
  );
}
