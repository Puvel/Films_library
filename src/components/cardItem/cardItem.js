import './cardItem.css';
import api from '../../services/api';
import filmCardTemplate from '../../templates/filmCardTemplate.hbs';

const container = document.querySelector('.main_section');
api
  .fetchOneFilm(443791)
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
  container.insertAdjacentHTML('beforeend', markup);
}

function formatString(string) {
  return string + ',';
}
