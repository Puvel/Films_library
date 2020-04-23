import searchForm from '../../templates/searchForm.hbs';
import './searchForm.css';
import apiServicesFetch from '../../services/services';
import { renderSearchResultGalleryList } from '../mainFilmsList/mainFilmsList';

const refs = {
  input: document.querySelector('.search-form_input'),
  searchInput: document.querySelector('.search-form_wrapper'),
  formSearch: document.querySelector('#js-form'),
  galleryList: document.querySelector('.js-gallery_list'),
};
const markup = searchForm();
refs.searchInput.insertAdjacentHTML('beforeend', markup);
refs.formSearch = document.querySelector('#js-form');

refs.formSearch.addEventListener('input', hundleSubmit);


function hundleSubmit(e) {
  e.preventDefault();
  apiServicesFetch.page = 1;
  const inputQuery = e.currentTarget.elements.query.value;
  apiServicesFetch.searchQuery = inputQuery;
  renderSearchResultGalleryList();
}

// function renderHomeGalleryList() {
//   Promise.all([
//     apiServicesFetch.fetchMoviesSearchApi(),
//     apiServicesFetch.fetchGenresListApi(),
//   ])
//     .then(result => {
//       const films = [...result[0]];
//       const ganres = result[1];
//       films.map(item => {
//         const ganArr = item.genre_ids;
//         const ganName = ganArr.map(gan => {
//           const currGan = ganres.find(ganr => ganr.id === gan);
//           return currGan.name;
//         });
//         const genreList = ganName.toString().replace(/,/g, ', ');
//         return (item.genre_ids = genreList);
//       });
//       function markup(films) {
//         const ul = films
//           .map(item => {
//             const changeItem = {
//               ...item,
//               release_date: item.release_date.slice(0, 4),
//             };
//             return libraryListItemTemplate(changeItem);
//           })
//           .join('');
//         return ul;
//       }
//       refs.galleryList.innerHTML = markup(films);
//       if (films.length % 2 === 0) {
//         refs.galleryList.insertAdjacentHTML('beforeend', nextButtonTemplate());
//         const arrow = document.querySelector('.arrow');
//         arrow.addEventListener('click', Pagination.Next);
//       }
//     })
//     .catch(err => console.log(err));
// }

function nextButtonTemplate() {
  return `
  <li class="gallery-list__item">
  <span class="arrow"></span>
</li>`;
}
