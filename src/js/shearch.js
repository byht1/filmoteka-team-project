import debounce from 'lodash.debounce';
import { dataMovieList, dataSearch } from './API/api';
import { renderFilmGallery, renderMovies } from './movies';
import { refs } from './refs';

const { searchErrorText, searchInput } = refs;

const form = document.querySelector('.search-bar');

const input = document.querySelector('.search-bar__input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  searchErrorText.classList.remove('is-open');
  // show();
});

input.addEventListener(
  'input',
  debounce(e => onChange(e), 500)
);

async function onChange(e) {
  const value = e.target.value.trim();

  if (value.length === 0) {
    renderMovies(dataMovieList());
    return;
  }

  if (value.length < 3) {
    return;
  }

  const data = await dataSearch(value);

  if (data.results.length === 0) {
    searchErrorText.classList.remove('is-open');
    return;
  }

  show();

  renderMovies(data, dataSearch, value);

  document.addEventListener('click', inputNull);
}

export function show() {
  if (!searchErrorText.classList.contains('is-open')) {
    searchErrorText.classList.add('is-open');
  }
}

function inputNull(e) {
  if (e.target.classList.contains('search-bar__input')) {
    show();
    return;
  }

  show();
  input.value = '';
  document.removeEventListener('click', inputNull);
}
