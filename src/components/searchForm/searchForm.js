import searchForm from '../../templates/searchForm.hbs';
import './searchForm.css';
import apiServicesFetch from '../../services/services';

const ref = {
  searchForm: document.querySelector('.js-main_header'),
};
const markup = searchForm();
ref.searchForm.insertAdjacentHTML('beforeend', markup);

// import listItemTamplate from '../../templates/listItemTamplate.hbs';
import libraryListItemTemplate from '../../templates/libraryListItemTemplate.hbs';

const refs = {
  input: document.querySelector('.search-input'),
  searchForm: document.querySelector('.js-main_header'),
  formSearch: document.querySelector('.search-form'),
  galleryList: document.querySelector('.js-gallery_list'),

};

refs.formSearch.addEventListener('input', hundleSubmit);

function hundleSubmit(e) {
  e.preventDefault();

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



  



