import { refs } from './refs';

refs.toggleTheme.addEventListener('input', changeTheme);

function changeTheme(evt) {
    if (evt.target.checked) {
        refs.html.setAttribute('data-mode', 'dark');
        localStorage.setItem('data-mode', 'dark');
    } else {
        refs.html.setAttribute('data-mode', 'light');
        localStorage.setItem('data-mode', 'light');
    }
}

function chechedLocalStorageTheme() {
    if (localStorage.getItem('data-mode') == null) {
        return;
    } else {
        let dataMode = localStorage.getItem('data-mode');

        refs.html.setAttribute('data-mode', `${dataMode}`);

        dataMode == 'dark' ? (refs.toggleTheme.checked = true) : (refs.toggleTheme.checked = false);
    }
}

chechedLocalStorageTheme();
// localStorage.removeItem('data-mode');
