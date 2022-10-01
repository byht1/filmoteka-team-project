import { token, validate, logIn } from './API/auth';
import TOKEN from './login';

export function loginReload() {
  const tokenLokal = localStorage.getItem(TOKEN);
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
    await logIn({ password: '1', email: res.data.email });
  }
}
