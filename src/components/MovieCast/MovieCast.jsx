import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsDetails } from '../../films-api';
import s from './MovieCast.module.css';
import Loader from '../Loader/Loader';
import MovieCastItem from '..//MovieCastItem/MovieCastItem';

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        setCredits([]);
        const dataCredits = await getFilmsDetails(movieId, '/credits');
        setCredits(dataCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [movieId]);
  return (
    <section className={s.castSection}>
      {loading && <Loader />}
      {credits && (
        <ul className={s.castList}>
          {credits.map(cast => (
            <li className={s.castItem} key={cast.id}>
              <MovieCastItem dataCast={cast} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieCast;
