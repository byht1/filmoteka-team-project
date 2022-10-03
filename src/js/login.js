import Notiflix from 'notiflix';
import { refs } from './refs';
import { signUp, logIn, logOut } from './API/auth';
import { loginReload } from './loginReload';
import { homeBtnClick } from './header';

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
  accountCreatedText,
  btnValueOut,
  btnLoginWrap,
  signInForm,
  signInErrorText,
  noEmailText,
  body,
} = refs;

let TOKEN = 'token';

export default TOKEN;

loginReload();

// &відкриває модалку авторизації
export function onSignInBtn() {
  backdropSignIn.classList.toggle('is-hidden');
  signInErrorText.classList.add('none');
  body.classList.add('hidden');
  // add event listner on document/escape
  document.addEventListener('keydown', onEscapeClick);
  // add event listner on backdrop/click
  backdropSignIn.addEventListener('click', onBackdropClick);
}

// &відкриває модалку реєстрації
function onSignUp() {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');

  backdropSignUp.addEventListener('click', onBackdropClick);
}
function closeAllModalClose() {
  backdropSignUp.classList.add('is-hidden');
  backdropSignIn.classList.add('is-hidden');
  body.classList.remove('hidden');
  // delete event listener on escape and backdrop
  document.removeEventListener('keydown', onEscapeClick);
  backdropSignIn.removeEventListener('click', onBackdropClick);
  backdropSignUp.removeEventListener('click', onBackdropClick);
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
  backdropSignUp.addEventListener('click', onBackdropClick);
}

// if Escape push - modal close
function onEscapeClick(evt) {
  if (evt.key == 'Escape') {
    closeAllModalClose();
  }
}

// if on backdrop click - modal close
function onBackdropClick(evt) {
  if (evt.target == evt.currentTarget) {
    closeAllModalClose();
  }
}

function onModalClose() {
  backdropSignIn.classList.toggle('is-hidden');
  body.classList.remove('hidden');
}

function onSignUpClose(evt) {
  backdropSignUp.classList.add('is-hidden');
  backdropSignIn.classList.add('is-hidden');
  body.classList.remove('hidden');
  // if (evt.target == evt.currentTarget) {
  //   closeAllModalClose();
  // }
}

function onSignInLink() {
  backdropSignUp.classList.toggle('is-hidden');
  backdropSignIn.classList.toggle('is-hidden');
  signInForm.reset();
  signInErrorText.classList.remove('none');
}

signInBtn.addEventListener('click', onSignInBtn);
signInCloseBtn.addEventListener('click', onModalClose);
signUpLink.addEventListener('click', onSignUp);
signUpCloseBtn.addEventListener('click', onSignUpClose);
signInLink.addEventListener('click', onSignInLink);
formSignUp.addEventListener('submit', handleSub);

signInErrorText.classList.add('none');

function handleSub(event) {
  event.preventDefault();
  const userInfo = { password: null, email: null };
  const {
    elements: { password, passwordRepeat, email },
  } = event.currentTarget;

  userInfo.email = email.value;
  userInfo.password = password.value;

  if (password.value !== passwordRepeat.value) {
    passwordNotMatchAlert.classList.toggle('none');
  } else {
    passwordNotMatchAlert.classList.add('none');
    getSignUpRes(userInfo);
  }
}

export function toggleHeaderBtnValue() {
  signInBtn.classList.toggle('none');
  btnValueOut.classList.toggle('none');
}

async function getSignUpRes(userInfo) {
  const res = await signUp(userInfo);
  if (res === 409) {
    accountCreatedText.classList.toggle('none');
  } else {
    onSignUpClose();
    Notiflix.Notify.success(
      'To continue registration,please, confirm your email'
    );
    // const response = await logIn(userInfo);
    localStorage.setItem('token', response.token);
  }
}

// ----------------------------- LogOut

btnValueOut.addEventListener('click', logoutRes);
btnValueOut.addEventListener('click', homeBtnClick);

async function logoutRes() {
  toggleHeaderBtnValue();
  btnLoginWrap.firstChild.remove();
  await logOut();
  localStorage.removeItem(TOKEN);
  localStorage.removeItem('token');
}
//-----------------------------SignIn

signInForm.addEventListener('submit', onSignInModalBtn);

function onSignInModalBtn(event) {
  event.preventDefault();

  const userInfo = { password: null, email: null };
  const {
    elements: { password, email },
  } = event.currentTarget;

  userInfo.email = email.value;
  userInfo.password = password.value;
  signInModalRes(userInfo);
}

// async function validationRes

async function signInModalRes(userData) {
  const res = await logIn(userData);
  if (res === 401) {
    signInErrorText.classList.remove('none');
    noEmailText.classList.add('none');
  } else if (!res.isActivate) {
    noEmailText.classList.remove('none');
    signInErrorText.classList.add('none');
    // backdropSignIn.classList.toggle('is-hidden');
  } else {
    backdropSignIn.classList.toggle('is-hidden');
    toggleHeaderBtnValue();
    btnLoginWrap.insertAdjacentHTML(
      'afterbegin',
      `<p data-hello>Hello, ${userData.email}</p>`
    );
    localStorage.setItem(TOKEN, res.token);
  }
}
