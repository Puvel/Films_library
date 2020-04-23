import '../../stylesheet/main.css';
import listItemTemplate from '../../templates/listItemTamplate.hbs';
import storageMethods from '../localStorage/storageMethods';
// import noResult from '../../templates/noResult.hbs';
// import noRes from '../../assets/images/noResult.jpg';

export function renderFilmsQueue() {
  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.classList.add('isActive');
  const watchBtn = document.querySelector('#watched-btn');
  watchBtn.classList.remove('isActive');

  let libraryQueueList = [];
  let localStorageInfoList = storageMethods.load('queue');

  if (localStorageInfoList && localStorageInfoList.length !== 0) {
    libraryQueueList.push(...storageMethods.load('queue'));
    const divPagination = document.querySelector('#pagination');

    divPagination.innerHTML = ' ';

    const murkup = libraryQueueList
      .map(card => listItemTemplate(card))
      .join('');
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
  } else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = 'Oooops...No result for your request!!!';
    const divPagination = document.querySelector('#pagination');



    const errorInLibrary = document.createElement('p');
    errorInLibrary.textContent = 'Oooops...No result for your request!!!';
    renderUl.style.fontSize = '50px';
    renderUl.style.marginTop = '100px';
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
    const divPagination = document.querySelector('#pagination');

    divPagination.innerHTML = ' ';

    const murkup = libraryWatchList.map(card => listItemTemplate(card)).join('');

    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
  } else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = 'Oooops...No result for your request!!!';
    const divPagination = document.querySelector('#pagination');


    const errorInLibrary = document.createElement('p');
    errorInLibrary.textContent = 'Oooops...No result for your request!!!';
    renderUl.style.fontSize = '50px';
    renderUl.style.marginTop = '100px';

    divPagination.innerHTML = ' ';
  }
}


// import noResult from './templates/noResult.hbs';
// import noRes from './assets/images/noResult.jpg';
// const refs = {
//   mainSection: document.querySelector('.main_section'),
// };
// refs.mainSection.insertAdjacentHTML('afterbegin', noResult({ noRes }));