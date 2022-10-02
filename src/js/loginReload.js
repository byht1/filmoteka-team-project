import { token, validate, logIn } from './API/auth';
import TOKEN from './login';
import { refs } from './refs';
import { toggleHeaderBtnValue } from './login';

const { btnLoginWrap, signInBtn } = refs;

export function loginReload() {
  const tokenLokal = localStorage.getItem('token');
  if (tokenLokal === null) {
    return;
  }
  signInBtn.classList.add('none');
  token.set(tokenLokal);
  console.log(tokenLokal);
  getValidateRes();
}

async function getValidateRes() {
  const res = await validate();

  console.log(res.data);
  if (res.data.message === 'Not authorized') {
    console.log('Не авторизован');
    localStorage.removeItem(TOKEN);
  } else {
    localStorage.setItem(TOKEN, res.data.token);
    toggleHeaderBtnValue();
    signInBtn.classList.add('none');
    btnLoginWrap.insertAdjacentHTML(
      'afterbegin',
      `<p data-hello>Hello, ${res.data.email}</p>`
    );
  }
}
