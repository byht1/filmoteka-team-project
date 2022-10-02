import { refs } from './refs';
export const refs = {
	preLoader: document.querySelector('.loader'),
	backdrop: document.querySelector('.backdrop__loader'),
  
	hide() {
	  setTimeout(() => {
		this.preLoader.classList.add('is-hidden');
		this.backdrop.classList.add('is-hidden');
	  }, 1000);
	},
	show() {
	  this.preLoader.classList.remove('is-hidden');
	  this.backdrop.classList.remove('is-hidden');
	},
  };