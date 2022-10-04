import { refs } from '../refs';

const teamSlogan = document.querySelector('.team-slogan');
const teamInfo = document.querySelector('.team-info-list');
const cast = document.querySelector('.cast-box');
const about = document.querySelector('.about-box');

export function changeLanguageModalTeam() {
    teamInfo.innerHTML = '';
    cast.innerHTML = '';
    about.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        // refs.modalTeamLanguage.innerHTML = modalTeamUk;
        teamSlogan.textContent = 'Або JavaScript нас, або ми його';
        teamInfo.innerHTML =
            '<li class="team-info-list-item">         <p class="info-caption">Оцінка</p><p class="info-description"><span class="span-orange">10</span></p></li>        <li class="team-info-list-item"><p class="info-caption">Мова оригіналу</p><p class="info-description">HTML, CSS, JavaScript</p></li><li class="team-info-list-item"><p class="info-caption">Країна-виробник</p><p class="info-description">Україна</p></li><li class="team-info-list-item"><p class="info-caption">Жанр</p>         <p class="info-description">Триллер, пригоди, комедія</p></li><li class="team-info-list-item"><p class="info-caption">Дата виходу</p><p class="info-description">2022</p></li><li class="team-info-list-item">     <p class="info-caption">Тривалість</p><p class="info-description">1 тиждень</p></li>';
        cast.innerHTML =
            '<h2 class="cast-title">Над фільмом працювали</h2><div><ul class="cast-list"><li class="cast-list-item"><p class="cast-role">Продюсер / Team lead</p><p class="cast-name"><a href="https://github.com/byht1">Віталій Дихал</a></p></li><li class="cast-list-item"><p class="cast-role">Режисер / Scrum Master</p><p class="cast-name"><a href="https://github.com/hellene-mary">Марія Грек</a></p></li><li class="cast-list-item"><p class="cast-role">Оператор-постановник / Розробник</p><p class="cast-name"><a href="https://github.com/Veronika-chenko">Veronika Kravchenko</a></p></li><li class="cast-list-item"><p class="cast-role">Художник-постановник / Розробник</p><p class="cast-name"><a href="https://github.com/ViktoriaZinyak">Зиняк Виктория</a></p></li><li class="cast-list-item"><p class="cast-role">Монтажер / Розробник</p><p class="cast-name"><a href="https://github.com/AlexKekc">Джонсонюк</a></p></li><li class="cast-list-item"><p class="cast-role">Кастинг-директор / Розробник</p><p class="cast-name"><a href="https://github.com/Nazarii7">Nazarii Pushkaruk</a></p></li><li class="cast-list-item"><p class="cast-role">Помічник режисера / Розробник</p><p class="cast-name"><a href="https://github.com/zlatan-dp">Олександр Шубін</a></p></li><li class="cast-list-item"><p class="cast-role">Постановник трюків / Розробник</p><p class="cast-name"><a href="https://github.com/Dmytro80">Дмитро Вороневський</a></p></li><li class="cast-list-item"><p class="cast-role">Каскадер / Розробник</p><p class="cast-name"><a href="https://github.com/yanikr">Yanik Rikhter</a></p></li><li class="cast-list-item"><p class="cast-role">Лінійний продюсер / Розробник</p><p class="cast-name"><a href="https://github.com/Lyud0k">Люда</a></p></li></ul></div></div>';
        about.innerHTML =
            '<h2 class="about-title">About</h2><p class="about-text">Колись зорі склались так, що ці люди зібрались разом, щоб створити щось надзвичайне. Кожен з них має унікальні здібності, нерозкриті таланти та надзвичайні амбіції. Це їхня перша пригода як команди. І саме ти, глядачу, маєш унікальну можливість це побачити!</p>';
    } else {
        // refs.modalTeamLanguage.innerHTML = modalTeamEng;
        teamSlogan.textContent = 'For the sake of future programming!';
        teamInfo.innerHTML =
            '<li class="team-info-list-item"><p class="info-caption">Vote</p><p class="info-description"><span class="span-orange">10</span></p></li><li class="team-info-list-item"><p class="info-caption">Original Language</p><p class="info-description">HTML, CSS, JavaScript</p></li><li class="team-info-list-item"><p class="info-caption">Country</p><p class="info-description">Ukraine</p></li><li class="team-info-list-item"><p class="info-caption">Genre</p><p class="info-description">Thriller, adventure, comedy</p></li><li class="team-info-list-item"><p class="info-caption">Release date</p><p class="info-description">2022</p></li><li class="team-info-list-item"><p class="info-caption">Duration</p><p class="info-description">1 week</p></li>';
        cast.innerHTML =
            '<h2 class="cast-title">Production by</h2><div><ul class="cast-list"><li class="cast-list-item"><p class="cast-role">Producer / Team lead</p><p class="cast-name"><a href="https://github.com/byht1">Віталій Дихал</a></p></li><li class="cast-list-item"><p class="cast-role">Director / Scrum Master</p><p class="cast-name"><a href="https://github.com/hellene-mary">Марія Грек</a></p></li><li class="cast-list-item"><p class="cast-role">Cinematographer / Developer</p><p class="cast-name"><a href="https://github.com/Veronika-chenko">Veronika Kravchenko</a></p></li><li class="cast-list-item"><p class="cast-role">Production designer / Developer</p><p class="cast-name"><a href="https://github.com/ViktoriaZinyak">Зиняк Виктория</a></p></li><li class="cast-list-item"><p class="cast-role">Editor / Developer</p><p class="cast-name"><a href="https://github.com/AlexKekc">Джонсонюк</a></p></li><li class="cast-list-item"><p class="cast-role">Casting director / Developer</p><p class="cast-name"><a href="https://github.com/Nazarii7">Nazarii Pushkaruk</a></p></li><li class="cast-list-item"><p class="cast-role">Assistant director / Developer</p><p class="cast-name"><a href="https://github.com/zlatan-dp">Олександр Шубін</a></p></li><li class="cast-list-item"><p class="cast-role">Stunt coordinator / Developer</p><p class="cast-name"><a href="https://github.com/Dmytro80">Дмитро Вороневський</a></p></li><li class="cast-list-item"><p class="cast-role">Stunt double / Developer</p><p class="cast-name"><a href="https://github.com/yanikr">Yanik Rikhter</a></p></li><li class="cast-list-item"><p class="cast-role">Line producer / Developer</p><p class="cast-name"><a href="https://github.com/Lyud0k">Люда</a></p></li></ul></div></div>';
        about.innerHTML =
            '<h2 class="about-title">About</h2><p class="about-text">Once upon a time, the stars aligned in such a way that these people came together to create something extraordinary. Each of them has unique abilities, undiscovered talents and extraordinary ambitions. This is their first adventure as a team. And you have a unique opportunity to see it!</p>';
    }
}
