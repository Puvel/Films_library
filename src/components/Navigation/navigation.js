import '../../stylesheet/main.css';
import '../pagination/pagination.css';
import { renderSearchResultGalleryList } from '../mainFilmsList/mainFilmsList';
import searchButtons from '../../templates/searchBtn.hbs';
import searchForm from '../../templates/searchForm.hbs';
import listItemTemplate from '../../templates/listItemTamplate.hbs';

import { renderHomeGalleryList } from '../mainFilmsList/mainFilmsList';
import fetchFunction from '../../services/services';
import { hundleSubmit } from '../searchForm/searchForm';
import storageMethods from '../localStorage/storageMethods';

const navMenu = document.querySelector('.nav__home');
const logoLink = document.querySelector('.nav__logo');

navMenu.addEventListener('click', navClickHandler);
logoLink.addEventListener('click', logoClickHandler);

const refs = {
  homeLink: document.querySelector('.nav__home'),
  libraryLink: document.querySelector('.nav__library'),
  mainHeaderBg: document.querySelector('.main_header-bg'),
  headerInput: document.querySelector('.search-form_wrapper'),
  headerBtn: document.querySelector('.btn'),
  activeLink: document.querySelector('.nav__home'),
  activeLinkLibrary: document.querySelector('.nav__library'),
  cardItem: '',
};

function navClickHandler(e) {
  e.preventDefault();
  if (refs.activeLink) {
    refs.activeLinkLibrary.classList.remove('nav__btn--active');
  }
  e.target.classList.add('nav__btn--active');
  refs.mainHeaderBg.classList.remove('main_header-bg-btn');
  refs.mainHeaderBg.classList.add('main_header-bg');
  refs.headerBtn.classList.add('unvisible');
  refs.headerInput.innerHTML = searchForm();
  refs.headerInput.classList.remove('unvisible');
  refs.headerInput.classList.add('visible');
  refs.cardItem = document.querySelector('.js-ardItem');
  if (refs.cardItem) {
    refs.cardItem.remove();
  }
  if (fetchFunction.searchQuery !== '') {
    renderSearchResultGalleryList();
    const input = document.querySelector('.search-form_input');
    input.value = fetchFunction.searchQuery;
  } else {
    renderHomeGalleryList();
  }
  refs.formSearch = document.querySelector('#js-form');
  refs.formSearch.addEventListener('submit', hundleSubmit);
}

refs.libraryLink.addEventListener('click', renderWatchedAndQueueCollection);

function renderWatchedAndQueueCollection(e) {
  e.preventDefault();
  if (refs.activeLinkLibrary) {
    refs.activeLink.classList.remove('nav__btn--active');
  }
  e.target.classList.add('nav__btn--active');
  refs.mainHeaderBg.classList.remove('main_header-bg');
  refs.mainHeaderBg.classList.add('main_header-bg-btn');
  refs.headerBtn.classList.remove('unvisible');
  refs.headerInput.classList.remove('visible');
  refs.headerInput.classList.add('unvisible');
  const markup = searchButtons();
  refs.headerBtn.innerHTML = markup;

  renderFilmsQueue();

  const watchBtn = document.querySelector('#watched-btn');
  watchBtn.addEventListener('click', renderFilmsWatched);

  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.addEventListener('click', renderFilmsQueue);
}

function renderFilmsQueue() {
  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.classList.add('isActive');

  let libraryQueueList = [];
  let localStorageInfoList = localStorage.getItem('queue');
  if (localStorageInfoList !== null) {
    libraryQueueList.push(...storageMethods.load('queue'));
    const divPagination = document.querySelector('#pagination');
    divPagination.classList.add('pagination-none');
    divPagination.innerHTML = ' ';

    const murkup = libraryQueueList.map(card => listItemTemplate(card)).join('');
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
  } else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = 'Oooops...No result for your request!!!';
    const divPagination = document.querySelector('#pagination');
    divPagination.classList.add('pagination-none');

    const errorInLibrary = document.createElement('p');
    errorInLibrary.textContent = 'Oooops...No result for your request!!!';
    renderUl.style.fontSize = '50px';
    renderUl.style.marginTop = '100px';

    divPagination.innerHTML = ' ';
  }
}

function renderFilmsWatched() {
  let libraryWatchList = [];
  let localStorageInfoList = localStorage.getItem('watched');
  if (localStorageInfoList !== null) {
    libraryWatchList.push(...storageMethods.load('watched'));
    const divPagination = document.querySelector('#pagination');
    divPagination.classList.add('pagination-none');
    divPagination.innerHTML = ' ';

    const murkup = libraryWatchList.map(card => listItemTemplate(card)).join('');
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = murkup;
  } else {
    const renderUl = document.querySelector('.js-gallery_list');
    renderUl.innerHTML = 'Oooops...No result for your request!!!';
    const divPagination = document.querySelector('#pagination');
    divPagination.classList.add('pagination-none');

    const errorInLibrary = document.createElement('p');
    errorInLibrary.textContent = 'Oooops...No result for your request!!!';
    renderUl.style.fontSize = '50px';
    renderUl.style.marginTop = '100px';

    divPagination.innerHTML = ' ';
  }
}

function logoClickHandler() {
  refs.mainHeaderBg.classList.remove('main_header-bg-btn');
  refs.mainHeaderBg.classList.add('main_header-bg');
  refs.headerBtn.classList.add('unvisible');
  refs.headerInput.innerHTML = searchForm();
  refs.headerInput.classList.remove('unvisible');
  refs.headerInput.classList.add('visible');
  refs.cardItem = document.querySelector('.js-ardItem');
  if (refs.cardItem) {
    refs.cardItem.remove();
  }

  renderHomeGalleryList();
  refs.activeLinkLibrary.classList.remove('nav__btn--active');
  refs.activeLink.classList.add('nav__btn--active');
  refs.formSearch = document.querySelector('#js-form');
  refs.formSearch.addEventListener('submit', hundleSubmit);
}
