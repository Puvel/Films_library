const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a2c80789bced092c10745aa4387db8d2';
const movieSearchUrl = '/search/movie';
const genresListUrl = '/genre/movie/list';
const popularityUrl = '/movie/popular';
// const movieId = [];

export default {
    page: 1,
    query: '',
  fetchMoviesSearchApi() {
    const movieSearchPrmts =`?api_key=${apiKey}&language=en-US&query=${this.query}&page=${this.page}&per_page=20&include_adult=false`
    return fetch (baseUrl + movieSearchUrl + movieSearchPrmts)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        return data.results})
      .catch(error => console.log(error));

    },

  get searchQuery(){
    return this.query;
  },

  set searchQuery(string){
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  fetchGenresListApi(){
    const genresListPrmts =`?api_key=${apiKey}&language=en-US`
    return fetch (baseUrl + genresListUrl + genresListPrmts)
    .then(res => res.json())
    .then(data => console.log(data.genres))
    .catch(error => console.log(error));
},

  fetchMovieCardApi(movieId){
    const movieCardPrmts =`/movie/${movieId}?api_key=${apiKey}&language=en-US`
    return fetch (baseUrl + movieCardPrmts)
      .then(res => res.json())
      .then(data =>
          console.log(data))
      .catch(error => console.log(error));
  },

  fetchPopularityApi(){
    const popularityPrmts =`?api_key=${apiKey}&language=en-US&page=${this.page}`
    return fetch (baseUrl + popularityUrl + popularityPrmts)
      .then(res => res.json())
      .then(data => console.log(data.results))
      .catch(error => console.log(error));
  },

  fetchRatingFilms() {
      const popularityPrmts = `/trending/movie/day?api_key=${apiKey}&page=${this.page}`
      return fetch (baseUrl + popularityPrmts)
      .then(res => res.json())
      .then(data =>
        console.log(data.results)
      );
  },
}



