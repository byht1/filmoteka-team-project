import { token, validate } from './API/auth';
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
  getValidateRes();
}

async function getValidateRes() {
  const res = await validate();

  if (res.data.message === 'Not authorized') {
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
