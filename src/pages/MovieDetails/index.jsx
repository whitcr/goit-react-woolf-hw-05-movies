import { fetchDataMovieDetails } from 'api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import './index.css';
const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState('');
  const { movieId } = useParams();
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      const data = await fetchDataMovieDetails(movieId);
      setmovieDetails(data);
    };
    fetchData();
  }, [movieId]);

  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <div className="movie-details">
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div>
          <h1>{movieDetails.title}</h1>
          <p>User Score: {movieDetails.vote_average}%</p>
          <p>{movieDetails.overview}</p>
          <p>
            <strong>Overview</strong>
          </p>
          <p>{movieDetails.overview}</p>
          <p>
            <strong> Genres</strong>
          </p>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.length > 0 &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <p>Additional informations</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </li>

        <li>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
