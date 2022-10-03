import { dataAuthorMovie } from './API/api';
import { closeMovieModal } from './modalMovie';
import { closeActorsModal } from './modalActors';
import { renderFilmGallery } from './movies';
import { refs } from './refs';
import { clearFilmsContainer } from './pagination/pagination-api';

const { paginationSection } = refs;

const actorBox = document.querySelector('.js-actor-list');

actorBox.addEventListener('click', searchMoviesByActor);

async function movieListByActorMarkup(id) {
  if (!id) {
    return;
  }
  const { cast: results } = await dataAuthorMovie(id);

  const data = {
    results: results.filter((x, i) => i < 20),
  };
  clearFilmsContainer();
  renderFilmGallery(data);
  paginationSection.classList.add('is-hidden');
}

function searchMoviesByActor(event) {
  closeActorsModal();
  closeMovieModal();

  const isImageElement = event.target;

  if (!isImageElement.classList.contains('actors-image')) {
    return;
  }

  const parentOfImageElement = isImageElement.closest('.actors__item');

  const actorId = parentOfImageElement.dataset.actor;

  movieListByActorMarkup(actorId);
}
