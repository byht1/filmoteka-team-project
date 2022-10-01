import { refs } from '../refs';

const footerUk = '2022 | Усі права захищені | Розроблено з';

const footerEng = '2022 | All Rights Reserved | Developed with';

export function changeLanguageFooter() {
    // refs.footerChangeLanguage.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.footerTextChangeLanguage.textContent = footerUk;
        refs.footerByChangeLanguage.textContent = 'командою';
    } else {
        refs.footerTextChangeLanguage.textContent = footerEng;
        refs.footerByChangeLanguage.textContent = 'by';
    }
}
