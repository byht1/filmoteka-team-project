import { dataGenre } from './API/api';

const findDiv = document.querySelector('.genere-box');
// const findButton = document.querySelector('.click');
// console.log(findButton);
outputGenre();

async function outputGenre() {
    
    const allGenres = await dataGenre();
    console.log(allGenres);
         const markup = allGenres.genres
             .map((genre) => {
    return ` <div class="genere-box">
    <button class = "click">${genre.name}</button>
    </div>
    `
})
       .join("");
  findDiv.innerHTML = markup;
}