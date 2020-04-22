import searchBtn from '../../templates/searchBtn.hbs';
import './searchBtn.css';


const refs = {
    searchBtn: document.querySelector('.btn'),
  };
  const markup = searchBtn()
  refs.searchBtn.insertAdjacentHTML('beforeend', markup);

  