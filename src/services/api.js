// // фильмы по поиску плюс пагинация

// //api.themoviedb.org/3/search/movie?api_key=a2c80789bced092c10745aa4387db8d2&language=en-US&query=hall&page=1&include_adult=false

// // фильмы по рейтингу плюс пагинация
// https: //api.themoviedb.org/3/trending/movie/day?api_key=a2c80789bced092c10745aa4387db8d2&page=1

// // один фильм запрос по ID
// https: //api.themoviedb.org/3/movie/443791?api_key=a2c80789bced092c10745aa4387db8d2&language=en-US

// // запрос списка жанров
// https: //api.themoviedb.org/3/genre/movie/list?api_key=a2c80789bced092c10745aa4387db8d2&language=en-US

export default {
  base: 'https://api.themoviedb.org/3',
  key: 'a2c80789bced092c10745aa4387db8d2',
  page: 1,
  query: '',
  fetchRatingFilms() {
    return fetch(
      `${this.base}/trending/movie/day?api_key=${this.key}&page=${this.page}`,
    )
      .then(response => response.json())
      .then(response => {
        return response.results;
      });
  },
  fetchGenre() {
    return fetch(
      `${this.base}/genre/movie/list?api_key=${this.key}&language=en-US`,
    )
      .then(response => response.json())
      .then(response => {
        return response;
      });
  },
  fetchSearchFilms() {
    return fetch(
      `${this.base}/search/movie?api_key=${this.key}&language=en-US&query=${this.query}&page=${this.page}&include_adult=false`,
    )
      .then(response => response.json())
      .then(response => {
        return response.results;
      });
  },
  fetchOneFilm(filmId) {
    return fetch(
      `${this.base}/movie/${filmId}?api_key=${this.key}&language=en-US`,
    )
      .then(response => response.json())
      .then(response => {
        return response;
      });
  },
};
