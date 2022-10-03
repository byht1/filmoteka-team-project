import { refs } from "./refs";

const { preLoader, backdrop} = refs;

window.addEventListener('load', preLoaderHide);

export function preLoaderHide() {
    setTimeout(() => {
        preLoader.classList.add('is-hidden');
        backdrop.classList.add('is-hidden');
    }, 250);
}

export function preLoaderShow() {
    preLoader.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
}