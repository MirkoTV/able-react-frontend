import MoviesCache from './movies-cache';

// This endpoint is from TheMovieDB https://developers.themoviedb.org/3/search/search-movies
const MOVIES_ENDPOINT =
  "https://api.themoviedb.org/3/search/movie?api_key=a0471c3efcac73e624b948daeda6085f";

const MoviesService = {
  getMovies: (text, onSuccess) => {
    const cachedMovies = MoviesCache.get(text);

    if (cachedMovies && cachedMovies.results && cachedMovies.results.length > 0) {
      onSuccess(cachedMovies);
      return;
    }

    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch(`${MOVIES_ENDPOINT}&query=${text}`, options)
      .then(response => response.json())
      .then((response) => {
        MoviesCache.set(text, response);
        onSuccess(response);
      })
      .catch(err => console.error(err));
  }
};

export default MoviesService;