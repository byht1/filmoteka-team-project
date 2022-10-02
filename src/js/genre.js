import { dataGenre } from './API/api';

const findDiv = document.querySelector('.genere-box');

outputGenre();

async function outputGenre() {
  const allGenres = await dataGenre();
  // console.log(allGenres);
  const markup = allGenres.genres
    .map(genre => {
      return ` <div class="genere-list" >
    <button class="click" data-genreId="${genre.id}">${genre.name}</button>
    </div>
    `;
    })
    .join('');
  findDiv.innerHTML = markup;
}

findDiv.addEventListener('click', genreSearch);

async function genreSearch(e) {
  const target = e.target;
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  console.log(target.dataset.genreId);
}
