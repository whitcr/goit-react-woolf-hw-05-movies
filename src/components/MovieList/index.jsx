import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {/* Не розумію чому, але без такої перевірки виникає проблема, що movie.map то не функція, типу пустий масив */}
        {movies &&
          movies.length > 0 &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MovieList;
