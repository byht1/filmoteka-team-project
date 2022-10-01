import { server } from './auth';

// Додати нові фільми до бази данних користувача
// Функція очікує:
// id - фільму якого треба додати
// library зі значенням queue або watched залежно куди труба додати
export const add = async (id, library) => {
  try {
    const data = await server.post('/movie', { id, library });

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Отримати всі фільми користувача із Queue
export const allQueue = async () => {
  try {
    const data = await server.get('/movie/queue');

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Отримати всі фільми користувача із Watched
export const allWatched = async () => {
  try {
    const data = await server.get('/movie/watched');

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Видалити всі фільми користувача із Queue
// Функція очкує id фільму
export const deleteQueue = async id => {
  try {
    const data = await server.delete(`/movie/queue/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Видалити всі фільми користувача із Watched
// Функція очкує id фільму
export const deleteWatched = async id => {
  try {
    const data = await server.delete(`/movie/watched/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
