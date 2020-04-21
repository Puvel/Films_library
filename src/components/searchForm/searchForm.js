import searchForm from '../../templates/searchForm.hbs';
import './searchForm.css';


const refs = {
    searchForm: document.querySelector('.js-main_header'),
  };
  const markup = searchForm()
  refs.searchForm.insertAdjacentHTML('beforeend', markup);