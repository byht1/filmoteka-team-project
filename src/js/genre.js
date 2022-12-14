import { dataGenre, dataSearchGenre } from './API/api';
import { logOut } from './API/auth';
import { renderFilmGallery, renderMovies } from './movies';
import { show } from './shearch';

const findDiv = document.querySelector('.genre-box-button');
const showGenreButton = document.querySelector('.show-burron-general');
const genreBox = document.querySelector('.genre-box');

showGenreButton.addEventListener('click', function (e) {
  genreBox.classList.toggle('general-show');
});

// outputGenre();
let i = 0;

export function genreRender() {
  if (window.innerWidth < 767) {
    return;
  }

  const genreBox = document.querySelector('.genre__elements-box');

  if (!genreBox && i === 0) {
    i += 1;
    outputGenre();
  }

  // if (i === 0 && window.innerWidth > 767) {
  //   i = 1;
  //   outputGenre();
  // }
}

export async function outputGenre() {
  const allGenres = await dataGenre();
  const markup = allGenres.genres
    .map(genre => {
      return ` <div class="genre__elements-box" >
    <button class="genre__button" data-genre="${genre.id}">${genre.name}</button>
    </div>
    `;
    })
    .join('');
  findDiv.innerHTML = markup;
}

findDiv.addEventListener('click', genreSearch);

async function genreSearch(e) {
  const target = e.target;

  if (!target.classList.contains('genre__button')) {
    return;
  }
  show();
  const id = Number(target.dataset.genre);

  const data = await dataSearchGenre(id);
  renderMovies(data, dataSearchGenre, id);
  genreBox.classList.toggle('general-show');
}
