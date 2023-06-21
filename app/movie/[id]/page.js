import { notFound } from 'next/navigation';

import MovieContainer from '@/containers/movie';
import { tmdbGetSingleMovie } from '@/services/tmdb.service';

const MoviePage = async ({ params, searchParams }) => {
  const selectedMovieDetail = await tmdbGetSingleMovie(params.id);

  if (!selectedMovieDetail) {
    notFound();
  }

  return <MovieContainer movie={selectedMovieDetail} />;
};

export default MoviePage;
