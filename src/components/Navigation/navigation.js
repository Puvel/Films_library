// import '../../stylesheet/main.css';
import './navagationBackground.css'
import { renderSearchResultGalleryList } from '../mainFilmsList/mainFilmsList';
import searchButtons from '../../templates/searchBtn.hbs';
import searchForm from '../../templates/searchForm.hbs';
import {
  renderHomeGalleryList,
  renderPrevGalleryList,
} from '../mainFilmsList/mainFilmsList';
import fetchFunction from '../../services/services';
import { hundleSubmit } from '../searchForm/searchForm';
import {
  renderFilmsQueue,
  renderFilmsWatched,
} from '../localStorage/renderFilmsLS';
import services from '../../services/services';

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
    renderPrevGalleryList();
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
  refs.cardItem = document.querySelector('.js-ardItem');
  if (refs.cardItem) {
    refs.cardItem.remove();
  }
  renderFilmsQueue();

  const watchBtn = document.querySelector('#watched-btn');
  watchBtn.addEventListener('click', renderFilmsWatched);

  const queueBtn = document.querySelector('#watch-later-btn');
  queueBtn.addEventListener('click', renderFilmsQueue);
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

  services.page = 1;
  renderHomeGalleryList();
  // const divPagination = document.querySelector('#pagination');
  // divPagination.classList.remove('pagination-none');

  refs.activeLinkLibrary.classList.remove('nav__btn--active');
  refs.activeLink.classList.add('nav__btn--active');
  refs.formSearch = document.querySelector('#js-form');
  refs.formSearch.addEventListener('submit', hundleSubmit);
}
