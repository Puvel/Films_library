import './cardItem.css';
import services from '../../services/services';
import filmCardTemplate from '../../templates/filmCardTemplate.hbs';
import '../Navigation/navagationBackground.css';

const refs = {
  galleryList: document.querySelector('.js-gallery_list'),
  mainHeaderBg: document.querySelector('.main_header-bg'),
  headerInput: document.querySelector('.search-form_wrapper'),
  headerBtn: document.querySelector('.btn'),
  paginationContainer: document.querySelector('#pagination'),
};

refs.galleryList.addEventListener('click', renderCardFilm);

function renderCardFilm(e) {
  if (e.target.nodeName === 'BUTTON') {
    const button = e.target;
    const li = button.closest('.gallery-list__item');
    const id = li.dataset.id;
    refs.mainHeaderBg.classList.remove('main_header-bg');
    refs.mainHeaderBg.classList.remove('main_header-bg-btn');
    refs.mainHeaderBg.classList.add('main_header-bg-card');
    refs.headerInput.innerHTML = '';
    refs.headerBtn.innerHTML = '';

    createCardFilm(id);
  }
}

const container = document.querySelector('.main_section');

function createCardFilm(id) {
  services
    .fetchMovieCardApi(id)
    .then(card => {
      let newGenres = card.genres.map((genre, idx) => {
        if (card.genres.length - 1 !== idx) {
          return {
            ...genre,
            name: formatString(genre.name),
          };
        } else {
          return { ...genre };
        }
      });

      card.genres = newGenres;
      insertCardItems(card);
    })

    .catch(err => console.log(err));

  function insertCardItems(film) {
    const markup = filmCardTemplate(film);

    refs.galleryList.innerHTML = '';
    refs.paginationContainer.innerHTML = '';
    container.insertAdjacentHTML('beforeend', markup);
  }
}

function formatString(string) {
  return string + ',';
}
