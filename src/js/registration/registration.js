import { refs } from '../refs';

const {
  signInBtn,
  signInCloseBtn,
  backdropSignIn,
  signUpLink,
  backdropSignUp,
  signUpCloseBtn,
} = refs;

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
