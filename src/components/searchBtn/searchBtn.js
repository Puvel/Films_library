import './searchBtn.css';
import searchBtn from '../../templates/searchBtn.hbs';


const refs = {
    searchBtn: document.querySelector('.btn'),
    queueBtn: document.querySelector('#watch-later-btn'),
  watchBtn: document.querySelector('#watched-btn'),
  };

  const markup = searchBtn()
  refs.searchBtn.insertAdjacentHTML('beforeend', markup);
