import { refs } from '../refs';
import Pagination from './pagination';
import { renderFilmGallery } from '../movies';
import { dataMovieList } from '../API/api';

export default function createPagination(data) {
  const totalPages = data.total_pages;
  const pagination = new Pagination(
    document.querySelector('[data-pagination]'),
    {
      curr: 1,
      slots: 9,
      total: totalPages,
      onChange: page => {
        getListPerPage(page);
      },
    }
  );
  pagination.init();
  pagination.prevPage();
  pagination.nextPage();
}

async function getListPerPage(page) {
  clearFilmsContainer();
  const data = await dataMovieList(page);
  renderFilmGallery(data);
}

function clearFilmsContainer() {
  refs.movieGallery.innerHTML = '';
}
