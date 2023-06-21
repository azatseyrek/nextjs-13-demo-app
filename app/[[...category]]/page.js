import HomeContainer from '@/containers/home';
import Movies from '@/mocks/movies.json';
import {
  tmdbFetcherFunction,
  tmdbGetSingleCategory,
} from '@/services/tmdb.service';
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
} from '@/services/tmdb.service';

const API_URL = process.env.TMDB_API_URL;

const HomePage = async ({ params }) => {
  let selectedCategory = false;

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categories },
  ] = await Promise.all([getPopularMovies, getTopRatedMovies, getCategories]);

  if (params.category?.length > 0) {
    selectedCategory = await tmdbGetSingleCategory(params.category[0]);
    console.log('selectedCategory', selectedCategory);
  }

  const selectedCategoryId = params.category?.[0] ?? null;
  const selectedCategoryMovies = selectedCategory
    ? selectedCategory.slice(0, 7)
    : [];

  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: selectedCategoryId,
        movies: selectedCategoryMovies,
      }}
    />
  );
};

export default HomePage;
