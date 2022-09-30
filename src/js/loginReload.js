import { token, validate } from './API/auth';

export const loginReload = () => {
  const tokenLokal = localStorage.getItem('token');
  token.set(tokenLokal);
  validate();
  console.log(validate());
};

loginReload();
