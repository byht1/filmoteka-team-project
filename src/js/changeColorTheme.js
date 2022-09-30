import { refs } from './refs';

const btnDark = document.querySelector('.btn-dark-theme');
const btnLight = document.querySelector('.btn-light-theme');
const themeCangeBtn = document.querySelector('.theme-cange-btn');

btnDark.addEventListener('click', onBtnDarkClick);

btnLight.addEventListener('click', onBtnLightClick);

function onBtnDarkClick(evt) {
    console.log('~ evt', evt);
    refs.html.setAttribute('data-mode', 'dark');

    changeBtn();
}

function onBtnLightClick() {
    refs.html.setAttribute('data-mode', 'light');
    changeBtn();
}

function changeBtn() {
    btnDark.classList.toggle('is-hidden');
    btnLight.classList.toggle('is-hidden');
}
