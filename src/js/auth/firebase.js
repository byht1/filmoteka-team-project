import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBVsHfjyHpy1GMQaL681yLs2jlzk5Ip3iU',
  authDomain: 'new-tem-film.firebaseapp.com',
  projectId: 'new-tem-film',
  storageBucket: 'new-tem-film.appspot.com',
  messagingSenderId: '432755747933',
  appId: '1:432755747933:web:b7c28c3fcf3c46465231b4',
  measurementId: 'G-DBJJ31BZRF',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
