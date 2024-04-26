import { fetchDataMovieReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      const data = await fetchDataMovieReviews(movieId);
      setReviews(data.results);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {Reviews.lenght === 0 ? (
          Reviews.map(el => (
            <li key={el.id}>
              <p>{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <p> No reviews</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
