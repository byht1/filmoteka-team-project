import axios from 'axios';
import { whatLanguage } from '../translation/whatLanguage';
const KEY = '8478375b0b2eb45c66ac10717e1ab9a2';
const URL = 'https://api.themoviedb.org/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original/';

axios.defaults.baseURL = URL;

export const serverMovie = axios.create({
  baseURL: URL,
});

// uk-UA;

// Загальна інформація про фільм
export const dataMovieList = async (page = 1) => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/trending/movie/day?api_key=${KEY}&page=${page}&language=${language}`
    );

    const data = await server.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// пошук по ключовому слову
export const dataSearch = async (name, page = 1) => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/search/movie?api_key=${KEY}&language=${language}&query=${name}&page=${page}&include_adult=false`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// список усіх жанрів
export const dataGenre = async () => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/genre/movie/list?api_key=${KEY}&language=${language}`
    );

    const data = await server.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Повна інформація про фільм
export const dataMovie = async id => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/movie/${id}?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Список акторів
export const dataAuthors = async id => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/movie/${id}/credits?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// пошук фільмів по актору
export const dataAuthorMovie = async (id, page = 1) => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/person/${id}/movie_credits?api_key=${KEY}&language=${language}&page=${page}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Трейлер
export const dataTrailer = async id => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/movie/${id}/videos?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Пошук по жанрам
export const dataSearchGenre = async (id, page = 1) => {
  const language = whatLanguage();
  try {
    const server = await serverMovie.get(
      `3/discover/movie?api_key=${KEY}&with_genres=${id}&page=${page}&sort_by=popularity.desc&include_adult=false&include_video=false&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
