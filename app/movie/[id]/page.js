import { notFound } from 'next/navigation';

import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json';

const MoviePage = ({ params }) => {
  const selectedMovieDetail = Movies.results.find((movie) => movie.id === Number(params.id));

  if (!selectedMovieDetail) {
    notFound();
  }

  return <MovieContainer movie={selectedMovieDetail} />;
};

export default MoviePage;
