import { fetchDataTrending } from 'api';
import MovieList from 'components/MovieList';

import React, { useEffect, useState } from 'react';

const TrendingList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchDataTrending();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {movies === null ? <div>Loading...</div> : <MovieList movies={movies} />}
    </div>
  );
};
export default TrendingList;
