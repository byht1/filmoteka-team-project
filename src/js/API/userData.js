import { whatLanguage } from '../translation/whatLanguage';
import { server } from './auth';

// Додати нові фільми до бази данних користувача
// Функція очікує:
// id - фільму якого треба додати
// library зі значенням queue або watched залежно куди труба додати
export const add = async (id, library) => {
  const language = whatLanguage();
  try {
    const data = await server.post('/movie', { id, library, language });

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Отримати всі фільми користувача із Queue
export const allQueue = async () => {
  const language = whatLanguage() === 'en-US' ? 'en' : 'uk';

  try {
    const data = await server.get(`/movie/queue/${language}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Отримати всі фільми користувача із Watched
export const allWatched = async () => {
  const language = whatLanguage() === 'en-US' ? 'en' : 'uk';
  try {
    const data = await server.get(`/movie/watched/${language}`);

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

allQueue();
