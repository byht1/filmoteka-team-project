import { refs } from '../refs';
import Pagination from './pagination';
import { renderFilmGallery } from '../movies';
import { dataMovieList } from '../API/api';

export default function createPagination(data, fn, name) {
  const totalPages = data.total_pages;
  const pagination = new Pagination(refs.paginationList, {
    firstCurrentPage: 1,
    slots: 9,
    total: totalPages,
    onChange: page => {
      getListPerPage(page, fn, name);
      refs.movieGallery.classList.add('movie-height');

      setTimeout(() => {
        refs.movieGallery.classList.remove('movie-height');
      }, 1000);
      window.scrollTo(0, 0);
    },
  });
  pagination.init();
  pagination.prevPage();
  pagination.nextPage();
}

async function getListPerPage(page, fn = dataMovieList, name) {
  clearFilmsContainer();
  if (name) {
    const data = await fn(name, page);
    renderFilmGallery(data);
    return;
  }
  const data = await fn(page);
  renderFilmGallery(data);
}

export function clearFilmsContainer() {
  refs.movieGallery.innerHTML = '';
}
