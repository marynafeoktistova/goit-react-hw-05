import { NavLink, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ filmsList }) => {
  const location = useLocation();

  return (
    <ul className={s.filmsList}>
      {filmsList.map(film => {
        const urlImg = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
        return (
          <li key={film.id} className={s.filmItem}>
            <NavLink to={`/movies/${film.id}`} state={{ from: location }}>
              <img width={200} src={urlImg} alt={film.original_title} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
