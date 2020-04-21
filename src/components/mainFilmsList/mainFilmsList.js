import api from '../../services/services';
import libraryListItemTemplate from '../../templates/libraryListItemTemplate.hbs';
import listItemTemplate from '../../templates/listItemTamplate.hbs';

const refs = {
  mainSection: document.querySelector('.main_section'),
  galleryList: document.querySelector('.js-gallery_list'),
};

renderHomeGalleryList();
// renderWatchedAndQueueGalleryList();

function renderHomeGalleryList() {
  Promise.all([api.fetchPopularityApi(), api.fetchGenresListApi()])
    .then(data => {
      const films = [...data];
      const ganres = data.genres;
      films.map(item => {
        const ganArr = item.genre_ids;
        const ganName = ganArr
          .map(gan => {
            const currGan = ganres.find(ganr => ganr.id === gan);
            return currGan.name;
          })
          console.log(ganName);
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
    })
    .catch(err => console.log(err));
}

function renderWatchedAndQueueGalleryList() {
  Promise.all([api.fetchRatingFilms(), api.fetchGenre()])
    .then(result => {
      const films = [...result[0]];
      const ganres = result[1].genres;
      films.map(item => {
        const ganArr = item.genre_ids;
        const ganName = ganArr
          .map(gan => {
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
            return listItemTemplate(changeItem);
          })
          .join('');
        return ul;
      }

      refs.galleryList.insertAdjacentHTML('beforeend', markup(films));
    })
    .catch(err => console.log(err));
}

refs.galleryList.addEventListener('click', openMovieCard);

function openMovieCard(e) {
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target);
    // функция Наташи по отрисовке карточки фильма
  }
}
