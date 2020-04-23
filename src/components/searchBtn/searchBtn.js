import searchBtn from '../../templates/searchBtn.hbs';
import './searchBtn.css';


const refs = {
    searchBtn: document.querySelector('.js-main_header'),
  };
  const markup = searchBtn()
  refs.searchBtn.insertAdjacentHTML('beforeend', markup);


