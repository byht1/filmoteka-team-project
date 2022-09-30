import { refs } from './refs';

refs.toggleTheme.addEventListener('input', changeTheme);

function changeTheme(ent) {
    ent.target.checked ? refs.html.setAttribute('data-mode', 'dark') : refs.html.setAttribute('data-mode', 'light');
}
