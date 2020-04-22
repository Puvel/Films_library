import './cardItem.css';
import services from '../../services/services';
import filmCardTemplate from '../../templates/filmCardTemplate.hbs';
import {
  toggleQueue,
  toggleWatched,
  buttonStatus,
} from '../localStorage/localStorage';

const refs = {
  galleryList: document.querySelector('.js-gallery_list'),
};

refs.galleryList.addEventListener('click', renderCardFilm);

function renderCardFilm(e) {
  if (e.target.nodeName === 'BUTTON') {
    const button = e.target;
    const li = button.closest('.gallery-list__item');
    const id = li.dataset.id;

    createCardFilm(id);
  }
}

const container = document.querySelector('.main_section');
export let currentCard = {};
function createCardFilm(id) {
  services
    .fetchMovieCardApi(id)
    .then(card => {
      currentCard = card;

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
      buttonStatus();
      const buttonQueue = document.querySelector('#js-QueueButton');
      const buttonWatched = document.querySelector('#js-WatchedButton');

      buttonQueue.addEventListener('click', toggleQueue);
      buttonWatched.addEventListener('click', toggleWatched);
    })

    .catch(err => console.log(err));

  function insertCardItems(film) {
    const markup = filmCardTemplate(film);
    container.innerHTML = markup;
  }
}

function formatString(string) {
  return string + ',';
}
