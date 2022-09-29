import { refs } from './refs';

const {
  signInBtn,
  signInCloseBtn,
  backdropSignIn,
  signUpLink,
  backdropSignUp,
  signUpCloseBtn,
  signInLink,
  formSignUp,
  passwordNotMatchAlert,
} = refs;

function onSignInBtn() {
  backdropSignIn.classList.toggle('is-hidden');
}

function onModalClose() {
  backdropSignIn.classList.toggle('is-hidden');
}
function onSignUp() {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
}
function onSignUpClose() {
  backdropSignUp.classList.toggle('is-hidden');
}

function onSignInLink() {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
}

// function handleSubmit = event = {
//   event.preventDefault();
//   console.log(event);
// };

// console.log('bjbhkjbhkj');
signInBtn.addEventListener('click', onSignInBtn);
signInCloseBtn.addEventListener('click', onModalClose);
signUpLink.addEventListener('click', onSignUp);
signUpCloseBtn.addEventListener('click', onSignUpClose);
signInLink.addEventListener('click', onSignInLink);
formSignUp.addEventListener('submit', handleSub);

function handleSub(event) {
  event.preventDefault();

  const {
    elements: { password, passwordRepeat },
  } = event.currentTarget;

  if (password.value !== passwordRepeat.value) {
    passwordNotMatchAlert.classList.toggle('is-hidden');
  }
}
