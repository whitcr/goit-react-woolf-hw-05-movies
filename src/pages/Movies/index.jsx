import { fetchDataSearchMovie } from 'api';
import MovieList from 'components/MovieList';

import SearchForm from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('name');

    const fetchMovies = async () => {
      setIsLoading(true);

      if (value == null) {
        setIsLoading(false);
        return;
      }

      const data = await fetchDataSearchMovie(value);

      setMovies(data.results);
      setIsLoading(false);
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchForm />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        movies.length > 0 && <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
