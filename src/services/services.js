const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a2c80789bced092c10745aa4387db8d2';
const movieSearchUrl = '/search/movie';
const genresListUrl = '/genre/movie/list';
const popularityUrl = '/movie/popular';
// const movieId = [];

export default {
    page = 1,
    query = '',
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
  }
}



// =======================================

// const baseUrls = [`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
// `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`]

// Promise.all(baseUrls.map(url =>
//   fetch(url)
//   .then(res => res.json())
//   .catch(error => console.log('There is a problem!', error))
// ))
// .then(data => {
//   const moviesList = data[0].results;
//   const genresList = data[1];

//   console.log(moviesList);
//   console.log(genresList);
// })



// ========================================

// function Movies(id, title, vote_average, vote_count, genre_ids){
//   this.id = id;
//   this.title = title;
//   this.vote_average = vote_average;
//   this.vote_count = vote_count;
//   this.genre_ids = genre_ids;
// }

// const apiKey = 'a2c80789bced092c10745aa4387db8d2';

// export default function getMovies(movieObj){
//   return fetch (`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1`)
//   .then(res => res.json())
//   .then(data => {
//     return data.results[0]})
//   .then(function(genreObj){
//     const genreDetail = genreObj;
//     console.log(genreDetail);
//     return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-U`)
//     .then(res => res.json())
//     .then(data => data.genres)
//     .then(function(genreArr){
//       const genreIds = genreArr;
//       return Promise.all([genreDetail, genreIds])
//     })
//     .then(function (values){
//       const genreDetailObj = values[0];
//       const genreIdsObj = values[1];
//       return new Movies(genreDetailObj.id, genreDetailObj.title, genreDetailObj.vote_count, genreDetailObj.vote_average, genreDetailObj.genre_ids, genreIdsObj)
//     })
//   })
// }
