import { fetchDataSearchMovie } from 'api';
import MovieList from 'components/MovieList';

import SearchForm from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('name');

    const fetchMovies = async () => {
      if (value == null) return;

      const data = await fetchDataSearchMovie(value);

      setMovies(data.results);
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchForm />
      {searchParams && <MovieList movies={movies} />}
    </div>
  );
};
export default Movies;
