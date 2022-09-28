const signInBtn = document.querySelector('[data-signin-open]');
const signInCloseBtn = document.querySelector('[data-modal-close]');
const backdropSignIn = document.querySelector('[data-modal]');
const signUpLink = document.querySelector('[data-modal-link]');
const backdropSignUp = document.querySelector('[data-modal-signup]');
const signUpCloseBtn = document.querySelector('[data-modal-signup-close]');

const onSignInBtn = () => {
  backdropSignIn.classList.toggle('is-hidden');
};
const onModalClose = () => {
  backdropSignIn.classList.toggle('is-hidden');
};
const onSignUp = () => {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
};
const onSignUpClose = () => {
  backdropSignUp.classList.toggle('is-hidden');
};

signInBtn.addEventListener('click', onSignInBtn);
signInCloseBtn.addEventListener('click', onModalClose);
signUpLink.addEventListener('click', onSignUp);
signUpCloseBtn.addEventListener('click', onSignUpClose);
