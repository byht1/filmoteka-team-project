import { refs } from "../refs";
import Pagination from "./pagination";
import { renderMovies } from "../movies";

export default function createPagination(data) {
    const totalPages = data.total_pages;
    const pagination = new Pagination(document.querySelector(".pagination-list"), {
    curr: 1,
    //   slots: 11,
    slots: 9,
    total: totalPages,
        onChange: page => {
            getListPerPage(page)
        }
    })
        pagination.init();
}

function getListPerPage(page) {
    console.log("Yeah, its works, we on:", page);
    clearFilmsContainer();
    // const data = await dataMovieList(page, language = 'en-US');
    // renderFilmGallery(data); //wrong page
    // renderMovies(page);
}

function clearFilmsContainer() {
    refs.movieGallery.innerHTML = "";
}