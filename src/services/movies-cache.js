const CACHE = {};

const MoviesCache = {
  get: (text) => {
    return CACHE[text];
  },

  set: (text, movies) => {
    CACHE[text] = movies;
  }
};

export default MoviesCache;