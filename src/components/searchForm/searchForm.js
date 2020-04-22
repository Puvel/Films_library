import searchForm from '../../templates/searchForm.hbs';
import './searchForm.css';
import apiServicesFetch from '../../services/services';
import libraryListItemTemplate from '../../templates/libraryListItemTemplate.hbs';

const refs = {
  input: document.querySelector('.search-form_input'),
  searchInput: document.querySelector('.search-form_wrapper'),
  formSearch: document.querySelector('#js-form'),
  galleryList: document.querySelector('.js-gallery_list'),

};
const markup = searchForm();
console.log(refs.searchInput);
refs.searchInput.insertAdjacentHTML('beforeend', markup);
refs.formSearch = document.querySelector('#js-form');
console.log(refs.searchForm);

refs.formSearch.addEventListener('input', hundleSubmit);
console.log(refs.formSearch);

function hundleSubmit(e) {
  e.preventDefault();
  apiServicesFetch.page = 1;
  const inputQuery = e.currentTarget.elements.query.value;
  apiServicesFetch.searchQuery = inputQuery;
  renderHomeGalleryList();

}

function renderHomeGalleryList() {
  Promise.all([
    apiServicesFetch.fetchMoviesSearchApi(),
    apiServicesFetch.fetchGenresListApi(),
  ])
    .then(result => {
      const films = [...result[0]];
      const ganres = result[1];
      films.map(item => {
        const ganArr = item.genre_ids;
        const ganName = ganArr.map(gan => {
          const currGan = ganres.find(ganr => ganr.id === gan);
          return currGan.name;
        });
        return (item.genre_ids = [...ganName]);
      });
      function markup(films) {
        const ul = films
          .map(item => {
            const changeItem = {
              ...item,
              release_date: item.release_date.slice(0, 4),
            };
            return libraryListItemTemplate(changeItem);
          })
          .join('');
        return ul;
      }
      refs.galleryList.insertAdjacentHTML('beforeend', markup(films));
      refs.galleryList.innerHTML = markup(films)

    })
    .catch(err => console.log(err));
}



  



