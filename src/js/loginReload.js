import { token, validate, logIn } from './API/auth';

export const loginReload = () => {
  const tokenLokal = localStorage.getItem('token');
  token.set(tokenLokal);
  getValidateRes();
};

async function getValidateRes() {
  const res = await validate();
  //  если ок
  const newToken = res.data.token;
  console.log(res.data);
  localStorage.setItem('token', res.data.token);
  await logIn({ password: '1', email: res.data.email });
  //   const userInfo = { password: null, email: null };
  //   userInfo.email = res.data.email;
  //   userInfo.password = '1';
  //   signInModalRes(userInfo);
}

// async function signInModalRes(userData) {
//   const res = await logIn(userData);

//   if (res === 401) {
//     signInErrorText.classList.remove('none');
//   } else {
// backdropSignIn.classList.toggle('is-hidden');
// toggleHeaderBtnValue();
// btnLoginWrap.insertAdjacentHTML(
//   'afterbegin',
//   `<p data-hello>Hello, ${userData.email}</p>`
// );
//   }
// }
