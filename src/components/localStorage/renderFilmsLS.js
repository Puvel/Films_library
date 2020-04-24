import '../../stylesheet/main.css';
import listItemTemplate from '../../templates/listItemTamplate.hbs';
import storageMethods from '../localStorage/storageMethods';
import noResultLibrary from '../../templates/noResultLibrary.hbs';
import noRes from '../../assets/images/noResult.jpg';
import { init } from '../pagination/pagination';

export function renderFilmsQueue() {
  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.classList.add('isActive');
  const watchBtn = document.querySelector('#watched-btn');
  watchBtn.classList.remove('isActive');

  let libraryQueueList = [];
  let localStorageInfoList = storageMethods.load('queue');
  
  if (localStorageInfoList && localStorageInfoList.length !== 0) {
    
    libraryQueueList.push(...storageMethods.load('queue'));
    // const divPagination = document.querySelector('#pagination');
    // divPagination.innerHTML = ' ';

    const murkup = libraryQueueList
      .map(card => listItemTemplate(card))
      .join('');
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
    
  }
  else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = noResultLibrary({ noRes });
    const divPagination = document.querySelector('#pagination');
    divPagination.style.padding = 0;
    divPagination.innerHTML = ' ';
  } 
}

export function renderFilmsWatched() {
  const watchBtn = document.querySelector('#watched-btn');
  watchBtn.classList.add('isActive');
  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.classList.remove('isActive');

  let libraryWatchList = [];
  let localStorageInfoList = storageMethods.load('watched');
  if (localStorageInfoList && localStorageInfoList.length !== 0) {
    libraryWatchList.push(...storageMethods.load('watched'));
    const murkup = libraryWatchList
      .map(card => listItemTemplate(card))
      .join('');

    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
  } else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = noResultLibrary({ noRes });
    const divPagination = document.querySelector('#pagination');
    divPagination.style.padding = 0;
    divPagination.innerHTML = ' ';
  }
}


