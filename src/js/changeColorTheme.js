import { refs } from './refs';

refs.toggleTheme.addEventListener('input', changeTheme);

function changeTheme(ent) {
    ent.target.checked ? refs.html.setAttribute('data-mode', 'dark') : refs.html.setAttribute('data-mode', 'light');
}

// // ====================================================
// const lightTheme = document.querySelector('.light-theme-js');
// const darkTheme = document.querySelector('.dark-theme-js');
// const greyTheme = document.querySelector('.grey-theme-js');
// const changeThemeBtn = document.querySelector('.change-theme');
// const changeThemeList = document.querySelector('.change-theme-list');

// changeThemeBtn.addEventListener('click', enableChangeThemeList);

// lightTheme.addEventListener('click', turnLightTheme);
// darkTheme.addEventListener('click', turnDarkTheme);
// greyTheme.addEventListener('click', turnGreyTheme);

// function enableChangeThemeList() {
//     changeThemeList.classList.toggle('visually-hidden');
// }

// function turnLightTheme() {
//     refs.html.setAttribute('data-mode', 'light');
//     console.log('Light theme');
// }
// function turnDarkTheme() {
//     refs.html.setAttribute('data-mode', 'dark');
//     console.log('Dark theme');
// }
// function turnGreyTheme() {
//     refs.html.setAttribute('data-mode', 'grey');
//     console.log('Grey theme');
// }
