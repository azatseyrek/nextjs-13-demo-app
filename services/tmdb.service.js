const API_URL = process.env.TMDB_API_URL;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const tmdbFetcherFunction = async (path) => {
  try {
    const res = await fetch(`${API_URL}/${path}`, options);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
};

export const tmdbGetSingleCategory = async (genreId) => {
  try {
    const res = await fetch(
      `${API_URL}/discover/movie?&with_genres=${genreId}`,
      options,
    );
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
};

export const tmdbGetSingleMovie = async (movieId) => {
  try {
    const res = await fetch(`${API_URL}/movie/${movieId}`, options);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
};

export const getPopularMovies = tmdbFetcherFunction(
  'movie/popular?language=en-US&page=1',
);
export const getTopRatedMovies = tmdbFetcherFunction(
  'movie/top_rated?language=en-US&page=1',
);

export const getCategories = tmdbFetcherFunction('genre/movie/list');
