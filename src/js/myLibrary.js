import { IMG_URL, dataMovieList, dataSearch, dataGenre } from './API/api';
import { refs } from './refs';
import { renderMovies } from './movies';
import { allQueue, allWatched } from './API/userData';

refs.loadWathedBtn.addEventListener('click', getAllWatched);
refs.loadQueueBtn.addEventListener('click', getAllQueue);

async function getAllWatched() {
  const {
    data: { data: results },
  } = await allWatched();
  const movie = { results };
  await renderMovies(movie);
}

async function getAllQueue() {
  const {
    data: { data: results },
  } = await allQueue();
  const movie = { results };
  await renderMovies(movie);
}
