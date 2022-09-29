import { refs } from '../refs';

const {
  signInBtn,
  signInCloseBtn,
  backdropSignIn,
  signUpLink,
  backdropSignUp,
  signUpCloseBtn,
  signInLink,
  formSignUp,
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

const onSignInLink = () => {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(event);
};

signInBtn.addEventListener('click', onSignInBtn);
signInCloseBtn.addEventListener('click', onModalClose);
signUpLink.addEventListener('click', onSignUp);
signUpCloseBtn.addEventListener('click', onSignUpClose);
signInLink.addEventListener('click', onSignInLink);
formSignUp.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
console.log('bjbhkjbhkj');
