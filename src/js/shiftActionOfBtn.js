export function shiftActionToRemoveByWatched(target) {
  target.setAttribute('data-action', 'removeById');
  target.innerText = 'Remove from watched';
}

export function shiftActionToAddByWatched(target) {
  target.setAttribute('data-action', 'addById');
  target.innerText = 'Add to watched';
}

export function shiftActionToRemoveByQueue(target) {
  target.setAttribute('data-action', 'removeById');
  target.innerText = 'Remove from queue';
}

export function shiftActionToAddByQueue(target) {
  target.setAttribute('data-action', 'addById');
  target.innerText = 'Add to queue';
}
