import { refs } from './refs';

console.log(refs.closeModalBtn);

refs.closeModalBtn.addEventListener('click', toggleClassHidden);
//тут має бути слухач на клік по GoItStudents

function onCloseModalBtn() {
    console.log('Click on close modal btn');
    refs.modalBackdrop.classList.add('is-hidden');
}

// змінити назву функції
function onGoItStudentsClick() {
    console.log('Click on GoIt Students');
    refs.modalBackdrop.classList.remove('is-hidden');
}

//зробити одну функцію з toggle
function toggleClassHidden() {
    console.log('Click - Toggle');
    refs.modalBackdrop.classList.remove('is-hidden');
}
