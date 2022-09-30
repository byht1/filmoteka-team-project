import { refs } from './refs';
import { signUp, logIn, logOut, validate } from './API/auth';

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
  toSignUpBtn,
  accountCreatedText,
  btnValueIn,
  btnValueOut,
  btnLoginWrap,
  signInForm,
  signInErrorText,
} = refs;

function onSignInBtn() {
  backdropSignIn.classList.toggle('is-hidden');
  // signInErrorText.classList.add('none');

  // add event listner on document/escape
  document.addEventListener('keydown', onEscapeClick);
  // add event listner on backdrop/click
  backdropSignIn.addEventListener('click', onBackdropClick);
}

// if Escape push - modal close
function onEscapeClick(evt) {
  if (evt.key == 'Escape') {
    onModalClose();
  }
}

// if on backdrop click - modal close
function onBackdropClick(evt) {
  if (evt.target == evt.currentTarget) {
    onModalClose();
  }
}

function onModalClose() {
  backdropSignIn.classList.toggle('is-hidden');

  // delete event listener on escape and backdrop
  console.log('~ delete event listener on escape and backdrop');
  document.removeEventListener('keydown', onEscapeClick);
  backdropSignIn.removeEventListener('click', onBackdropClick);
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

    // const res = await signUp(userInfo);
    // if (res === 409) {
    //   accountCreatedText.classList.toggle('none');
    // } else {
    //   toSignUpBtn.disabled = true;
    //   accountCreatedText.classList.add('none');
    //   onSignUpClose();
    //   toggleHeaderBtnValue();
    //   btnLoginWrap.insertAdjacentHTML(
    //     'afterbegin',
    //     `<p>Hello, ${userInfo.email}</p>`
    //   );
    // }
  }
}

function toggleHeaderBtnValue() {
  signInBtn.classList.toggle('none');
  btnValueOut.classList.toggle('none');
}

async function getSignUpRes(userInfo) {
  const res = await signUp(userInfo);
  if (res === 409) {
    accountCreatedText.classList.toggle('none');
  } else {
    accountCreatedText.classList.add('none');
    onSignUpClose();
    toggleHeaderBtnValue();
    btnLoginWrap.insertAdjacentHTML(
      'afterbegin',
      `<p data-hello>Hello, ${userInfo.email}</p>`
    );
    await logIn(userInfo);
  }
}
// ----------------------------- LogOut

btnValueOut.addEventListener('click', logoutRes);

async function logoutRes() {
  toggleHeaderBtnValue();
  btnLoginWrap.firstChild.remove();
  await logOut();
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
  console.log(res);
  if (res === 401) {
    signInErrorText.classList.remove('none');
  } else {
    backdropSignIn.classList.toggle('is-hidden');
    toggleHeaderBtnValue();
    btnLoginWrap.insertAdjacentHTML(
      'afterbegin',
      `<p data-hello>Hello, ${userData.email}</p>`
    );
  }
}

export { onSignInBtn };
