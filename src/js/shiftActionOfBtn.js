export function shiftActionToRemoveByWatched(target) {
  target.setAttribute('data-action', 'removeById');
  const language = localStorage.getItem('lang');
  const uk = 'Видалити з переглянутих';
  const en = 'Remove from watched';
  target.innerText = language === 'uk' ? uk : en;
}

export function shiftActionToAddByWatched(target) {
  target.setAttribute('data-action', 'addById');
  const language = localStorage.getItem('lang');
  const uk = 'Додати в переглянуті';
  const en = 'Add to watched';
  target.innerText = language === 'uk' ? uk : en;
}

export function shiftActionToRemoveByQueue(target) {
  target.setAttribute('data-action', 'removeById');
  const language = localStorage.getItem('lang');
  const uk = 'Видалити з черги';
  const en = 'Remove from queue';
  target.innerText = language === 'uk' ? uk : en;
}

export function shiftActionToAddByQueue(target) {
  target.setAttribute('data-action', 'addById');
  const language = localStorage.getItem('lang');
  const uk = 'Додати в чергу';
  const en = 'Add to queue';
  target.innerText = language === 'uk' ? uk : en;
}
