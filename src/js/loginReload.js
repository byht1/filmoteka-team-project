import { token, validate, logIn } from './API/auth';

export const loginReload = () => {
  const tokenLokal = localStorage.getItem('token');
  token.set(tokenLokal);
  getValidateRes();
};

async function getValidateRes() {
  const res = await validate();

  console.log(res.data);
  if (res.data.message === 'Not authorized') {
    console.log('fsd');
  } else {
    localStorage.setItem('token', res.data.token);
    await logIn({ password: '1', email: res.data.email });
  }
}
