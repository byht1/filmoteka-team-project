import { refs } from '../refs';

const footerUk =
    '&copy; 2022 | Усі права захищено | Розроблено з<svg class="footer-pic" width="14" height="12"><use href="/symbol-defs.a8b2e413.svg#icon-favorite"></use></svg>командою&#xa0;';

const footerEng =
    '&copy; 2022 | All Rights Reserved | Developed with<svg class="footer-pic" width="14" height="12"><use href="/symbol-defs.a8b2e413.svg#icon-favorite"></use></svg>by&#xa0;';

export function changeLanguageFooter() {
    refs.footerChangeLanguage.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.footerChangeLanguage.insertAdjacentHTML('afterbegin', footerUk);
    } else {
        refs.footerChangeLanguage.insertAdjacentHTML('afterbegin', footerEng);
    }
}
