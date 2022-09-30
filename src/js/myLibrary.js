import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import { renderMovies } from './movies';

refs.loadWathedBtn.addEventListener('click', getTerminator);
refs.loadQueueBtn.addEventListener('click', getTitanic);

function getTerminator() {
  renderMovies(dataSearch('terminator'));
}

function getTitanic() {
  renderMovies(dataSearch('titanic'));
}
