import { currentCard } from '../cardItem/cardItem';

export function toggleQueue() {
  let filmQueueList = [];
  let localStorageInfo = localStorage.getItem('queue');
  if (localStorageInfo !== null) {
    filmQueueList.push(...JSON.parse(localStorageInfo));
  }
  if (filmQueueList.find(film => film.id === currentCard.id)) {
    filmQueueList = filmQueueList.filter(film => film.id !== currentCard.id);
  } else {
    filmQueueList.push(currentCard);
  }
  localStorage.setItem('queue', JSON.stringify(filmQueueList));
  buttonStatus();
}

export function toggleWatched() {
  let filmWatchedList = [];
  let localStorageInfo = localStorage.getItem('watched');
  if (localStorageInfo !== null) {
    filmWatchedList.push(...JSON.parse(localStorageInfo));
  }
  if (filmWatchedList.find(film => film.id === currentCard.id)) {
    filmWatchedList = filmWatchedList.filter(
      film => film.id !== currentCard.id,
    );
  } else {
    filmWatchedList.push(currentCard);
  }
  localStorage.setItem('watched', JSON.stringify(filmWatchedList));
  buttonStatus();
}

export function buttonStatus() {
  const buttonQueue = document.querySelector('#js-QueueButton');
  const buttonWatched = document.querySelector('#js-WatchedButton');

  let findQueueLocalStorage = localStorage.getItem('queue');
  if (findQueueLocalStorage !== null) {
    let isFindId = JSON.parse(findQueueLocalStorage).find(
      film => film.id === currentCard.id,
    );
    if (isFindId) {
      buttonQueue.textContent = 'Delete from queue';
    } else {
      buttonQueue.textContent = 'Add to queue';
    }
  }

  let findWatchedLocalStorage = localStorage.getItem('watched');
  if (findWatchedLocalStorage !== null) {
    let isFindId1 = JSON.parse(findWatchedLocalStorage).find(
      film => film.id === currentCard.id,
    );
    if (isFindId1) {
      buttonWatched.textContent = 'Delete from watched';
    } else {
      buttonWatched.textContent = 'Add to watched';
    }
  }
}
