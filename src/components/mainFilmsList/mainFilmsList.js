import apiServices from '../../services/services';
import libraryListItemTemplate from '../../templates/libraryListItemTemplate.hbs';
import listItemTemplate from '../../templates/listItemTamplate.hbs';

const refs = {
  mainSection: document.querySelector('.main_section'),
  galleryList: document.querySelector('.js-gallery_list'),
  filmYear: document.querySelector('.gallery-list__item_year'),
};

renderHomeGalleryList();
// renderWatchedAndQueueGalleryList();

function renderHomeGalleryList() {
  Promise.all([apiServices.fetchPopularityApi(), apiServices.fetchGenresListApi()])
    .then(result => {
      const films = [...result[0]];
      const ganres = result[1];
      films.map(item => {
        const ganArr = item.genre_ids;
        const ganName = ganArr
          .map(gan => {
            const currGan = ganres.find(ganr => ganr.id === gan);
            return currGan.name;
          })
          .join(',');
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

export default renderHomeGalleryList