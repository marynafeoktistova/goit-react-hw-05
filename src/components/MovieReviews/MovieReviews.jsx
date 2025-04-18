import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsDetails } from '../../films-api';
import MovieReviewsItem from '../../components/MovieReviewsItem/MovieReviewsItem';
import s from './MovieReviews.module.css';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        setReviews([]);
        const dataCredits = await getFilmsDetails(movieId, '/reviews');
        setReviews(dataCredits.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [movieId]);
  return (
    <section>
      {loading && <Loader />}
      {!loading && reviews !== null && reviews.length === 0 && <p className={s.reviewNotFound}>{`We don't have any reviews for this movie`}</p>}
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li className={s.reviewItem} key={review.id}>
              <MovieReviewsItem dataReviews={review} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieReviews;
