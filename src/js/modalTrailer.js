import { dataTrailer } from './API/api';

export async function renderVideo(id) {
  const { results } = await dataTrailer(id);
  console.log('🚀 ~ results', results);

  const render = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  const playBox = document.querySelector('#player');
  playBox.innerHTML = render;
}
