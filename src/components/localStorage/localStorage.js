import { currentCard } from '../cardItem/cardItem';
import storageMethods from './storageMethods';

export function toggleQueue() {
  let filmQueueList = [];
  const queue = storageMethods.load('queue');
  if (queue) {
    filmQueueList.push(...queue);
    if (filmQueueList.find(film => film.id === currentCard.id)) {
      filmQueueList = filmQueueList.filter(film => film.id !== currentCard.id);
    } else {
      filmQueueList.push(currentCard);
    }
  } else {
    filmQueueList.push(currentCard);
  }

  storageMethods.save('queue', filmQueueList);
  buttonStatus();
}
export function toggleWatched() {
  let filmWatchedList = [];
  const watched = storageMethods.load('watched');
  if (watched) {
    filmWatchedList.push(...watched);
    if (filmWatchedList.find(film => film.id === currentCard.id)) {
      filmWatchedList = filmWatchedList.filter(
        film => film.id !== currentCard.id,
      );
    } else {
      filmWatchedList.push(currentCard);
    }
  } else {
    filmWatchedList.push(currentCard);
  }

  storageMethods.save('watched', filmWatchedList);
  buttonStatus();
}

export function buttonStatus() {
  const buttonQueue = document.querySelector('#js-QueueButton');
  const buttonWatched = document.querySelector('#js-WatchedButton');

  let isFindId = findId('queue');

  if (isFindId) {
    buttonQueue.textContent = 'Delete from queue';
  } else {
    buttonQueue.textContent = 'Add to queue';
  }

  let isFindId1 = findId('watched');

  if (isFindId1) {
    buttonWatched.textContent = 'Delete from watched';
  } else {
    buttonWatched.textContent = 'Add to watched';
  }
}
function findId(string) {
  const result = storageMethods.load(string);
  if (!result) {
    return;
  }
  return result.find(film => film.id === currentCard.id);
}
