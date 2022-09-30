import axios from 'axios';
import { allWatched, deleteWatched } from './userData';

export const server = axios.create({
  baseURL: 'https://filmoteka-server.herokuapp.com',
});

export const token = {
  set(token) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = '';
  },
};

// Регистрація
export const signUp = async body => {
  try {
    const response = await server.post('/user/signup', body);

    return response;
  } catch (error) {
    return error.response.status;
  }
};

// Авторизація
export const logIn = async body => {
  try {
    const { data } = await server.post('/user', body);
    token.set(data.token);

    return data;
  } catch (error) {
    return error.response.status;
  }
};

// Вихід
export const logOut = async () => {
  try {
    const { status } = await server.get('/user');

    if (status === 204) {
      token.unset();
    }

    return status;
  } catch (error) {
    return error.response.status;
  }
};

// Перевірка. Користувач авторизований? (токен дійчний чи ні?)
export const validate = async () => {
  try {
    const response = await server.get('/user/validate');
    return response;
  } catch (error) {
    console.error(error);
  }
};
