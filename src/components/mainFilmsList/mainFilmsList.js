import apiServicesFetch from '../../services/services';
import libraryListItemTemplate from '../../templates/libraryListItemTemplate.hbs';
import Pagination from '../pagination/pagination';
import notFoundImg from '../../assets/images/notFound.jpg';
import spinner from '../spinner/spinner';
import noResult from '../../templates/noResult.hbs';
import noRes from '../../assets/images/noResult.jpg';

const refs = {
  mainSection: document.querySelector('.main_section'),
  galleryList: document.querySelector('.js-gallery_list'),
  queueBtn: document.querySelector('#watch-later-btn'),
  watchBtn: document.querySelector('#watch-btn'),
};

renderHomeGalleryList();

export function renderHomeGalleryList() {
  spinner.show();
  Promise.all([
    apiServicesFetch.fetchPopularityApi(),
    apiServicesFetch.fetchGenresListApi(),
  ])
    .then(result => {
      spinner.hide();
      getResultFromFetchApi(result);
      const films = [...result[0]];
      refs.galleryList.innerHTML = markup(films);
      if (films.length % 2 === 0) {
        refs.galleryList.insertAdjacentHTML('beforeend', nextButtonTemplate());
        const arrow = document.querySelector('.arrow');
        arrow.addEventListener('click', Pagination.Next);
      }
    })
    .catch(err => console.log(err));
}

export function renderPrevGalleryList() {
  Promise.all([
    apiServicesFetch.fetchPopularityApi(),
    apiServicesFetch.fetchGenresListApi(),
  ])
    .then(result => {
      getResultFromFetchApi(result);
      const films = [...result[0]];
      refs.galleryList.innerHTML = markup(films);
      if (films.length % 2 === 0) {
        refs.galleryList.insertAdjacentHTML('beforeend', nextButtonTemplate());
        const arrow = document.querySelector('.arrow');
        arrow.addEventListener('click', Pagination.Next);
      }
    })
    .catch(err => console.log(err));
}

export function renderSearchResultGalleryList() {
  spinner.show();
  Promise.all([
    apiServicesFetch.fetchMoviesSearchApi(),
    apiServicesFetch.fetchGenresListApi(),
  ])
    .then(result => {
      spinner.hide();
      if (result[0].length !== 0) {
        getResultFromFetchApi(result);
        const films = [...result[0]];
        refs.galleryList.innerHTML = markup(films);
        if (films.length % 2 === 0) {
          refs.galleryList.insertAdjacentHTML(
            'beforeend',
            nextButtonTemplate(),
          );
          const arrow = document.querySelector('.arrow');
          arrow.addEventListener('click', Pagination.Next);
        }
      } else {
        document.querySelector('#pagination').innerHTML = '';
        document.querySelector('.js-gallery_list').innerHTML = noResult({
          noRes,
        });
        return;
      }
    })
    .catch(err => console.log(err));
}

function getResultFromFetchApi(result) {
  const films = [...result[0]];
  const ganres = result[1];
  films.map(item => {
    const ganArr = item.genre_ids;
    if (ganArr.length !== 0) {
      const ganName = ganArr.map(gan => {
        const currGan = ganres.find(ganr => ganr.id === gan);
        return currGan.name;
      });
      const genreList = ganName.toString().replace(/,/g, ', ');

      return (item.genre_ids = genreList);
    } else {
      return item.genre_ids.push('unknown');
    }
  });
}

function nextButtonTemplate() {
  return `
  <li class="gallery-list__item">

  <span class="arrow"></span>

</li>`;
}

function markup(films) {
  const ul = films
    .map(item => {
      let changeItem = {};
      if (item.release_date) {
        changeItem = {
          ...item,
          release_date: item.release_date.slice(0, 4),
          notFoundImg,
        };
      } else {
        changeItem = {
          ...item,
          release_date: 'unknown',
          notFoundImg,
        };
      }
      return libraryListItemTemplate(changeItem);
    })
    .join('');
  return ul;
}
