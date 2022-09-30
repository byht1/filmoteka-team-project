export function shiftActionToRemoveByWatched(target) {
  target.setAttribute('data-action', 'removeById');
  target.innerText = 'Remove from watched';
}

export function shiftActionToAddByWatched(target) {
  target.setAttribute('data-action', 'addById');
  target.innerText = 'Add to watched';
}
