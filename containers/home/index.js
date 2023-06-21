import Categories from '@/components/categories';
import FeaturedMovie from '@/components/featured-movie';
import { MoviesSection } from '@/components/movies-section';

const HomeContainer = ({
  categories = [],
  selectedCategory,
  popularMovies = [],
  topRatedMovies = [],
}) => {
  const { id, movies } = selectedCategory;

  const selectedCategoryResult = categories.find((category) => {
    return category.id === parseInt(id, 10);
  });

  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[13]} />
      <Categories categories={categories.slice(0, 5)} />
      {movies.length > 0 && (
        <MoviesSection title={selectedCategoryResult.name} movies={movies} />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your Favorites"
        movies={topRatedMovies.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
