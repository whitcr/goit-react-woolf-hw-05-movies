import { fetchDataMovieCredits } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [Cast, setCast] = useState([]);
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      const data = await fetchDataMovieCredits(movieId);
      setCast(data.cast);
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {Cast.map(el => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : defaultImg
              }
              alt={el.mame}
              width={100}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
