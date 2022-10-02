import { dataAuthorMovie } from './API/api';
import { closeMovieModal } from './modalMovie';
import { closeActorsModal } from './modalActors';
import { renderMovies } from './movies';
import { refs } from './refs';

refs.actorsContainer.addEventListener('click', searchMoviesByActor);

async function movieListByActorMarkup(id) {
  const actorMovies = await dataAuthorMovie(id);

  const movies = actorMovies.cast;

  renderMoviesByActor(movies);
}

function clearMovieGallery() {
  refs.movieGallery.innerHTML = '';
}

function renderMoviesByActor(movieList) {
  return movieList.map(movie => {
    renderMovies(movie);
  });
}

function searchMoviesByActor(event) {
  event.preventDefault;

  closeActorsModal();
  closeMovieModal();
  clearMovieGallery();

  const isImageElement = event.target;

  if (!isImageElement.classList.contains('actors-image')) {
    return;
  }

  const parentOfImageElement = isImageElement.closest('.actors__item');

  actorId = parentOfImageElement.dataset.id;

  console.log(actorId);

  movieListByActorMarkup(actorId);
}
