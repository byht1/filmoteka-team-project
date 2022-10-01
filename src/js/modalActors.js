import { IMG_URL, dataAuthors } from './API/api';
import { refs } from './refs';

refs.openActorsModalBtn.addEventListener('click', openActorsModal);
refs.closeActorsModalBtn.addEventListener('click', closeActorsModal);

let movieId = '';

async function renderActorsModal(id) {
  const actorsData = await dataAuthors(id);

  const actorsList = actorsData.cast;

  console.log(actorsList);

  const actorsModalMarkup = actorsList
    .map(({ character, name, profile_path }) => {
      return `<li class="actors__item">
          <a href="" class="actors__link">
            <div class="actors__wrap wrap">
              <img
                class="actors-image"
                src="${IMG_URL}${profile_path}"
                alt="${name}"
              />
            </div>
            <p class="actors__title">${name}</p>
            <p class="actors__label">${character}</p>
          </a>
        </li>`;
    })
    .join('');

  refs.actorsModalContainer.insertAdjacentHTML('afterbegin', actorsModalMarkup);
}

function openActorsModal(event) {
  event.preventDefault;

  const isBtnElement = event.target;

  if (!isBtnElement.classList.contains('data__button')) {
    return;
  }

  const parentOfBtnElement = isBtnElement.closest('.data__list');

  movieId = parentOfBtnElement.dataset.id;

  console.log(movieId);

  refs.actorsModal.classList.add('is-open');

  renderActorsModal(718930);

  addEventListenerOnActorsModal();
}

function addEventListenerOnActorsModal() {
  document.addEventListener('keydown', onEscapeClick);
  refs.actorsModalBackdrop.addEventListener(
    'click',
    onBackdropOfActorsModalClick
  );
}

function onEscapeClick(event) {
  if (event.key == 'Escape') {
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
