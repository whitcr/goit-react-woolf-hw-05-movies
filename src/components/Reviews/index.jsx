import { fetchDataMovieReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

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
        {reviews.lenght === 0 ? (
          reviews.map(el => (
            <li key={el.id}>
              <p>{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
