import { dataGenre, dataSearchGenre } from './API/api';
import { logOut } from './API/auth';
import { renderFilmGallery } from './movies';

const findDiv = document.querySelector('.genre-box-button');

outputGenre();

async function outputGenre() {
  const allGenres = await dataGenre();
  // console.log(allGenres);
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

  if (!target.classList.contains('click')) {
    return;
  }
  const id = target.dataset.genre;

  const data = await dataSearchGenre(id);
  renderFilmGallery(data);
}
