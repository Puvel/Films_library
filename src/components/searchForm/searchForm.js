import './searchForm.css';
// import searchForm from '../../templates/searchForm.hbs';
// import './searchForm.css';
import apiServicesFetch from '../../services/services';



const refs = {
  input: document.querySelector('.search-input'),
    searchForm: document.querySelector('.js-main_header'),
    form:  document.querySelector('#js-form')
  };

  // function insertListItems(items){
  //   const markup = searchForm(items)
  //   refs.searchForm.insertAdjacentHTML('beforeend', markup);
  //   console.log(insertListItems);

  // }

  // const markup = searchForm()
  // refs.form.insertAdjacentHTML('beforeend', markup);


// let inputValue = document.querySelector('.search-input');
// const form = document.querySelector('#js-form');
// // const error = document.querySelector('.error');

refs.form.addEventListener('input', hundleSubmit);

function hundleSubmit(e) {
  e.preventDefault();
  // searchFilms();

  const inputQuery = e.currentTarget.elements.query.value;
  console.log(e.currentTarget.elements.query.value);
  apiServicesFetch.searchQuery = inputQuery;
  apiServicesFetch.fetchMoviesSearchApi().then(results => {
    insertListItems(results)
  })
}

 
function insertListItems(items){
  const markup = searchForm(items)
  refs.searchForm.insertAdjacentHTML('beforeend', markup);

}

  



