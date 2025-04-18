import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet, useNavigate } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import { getFilmsDetails } from '../../films-api';
import Loader from '../../components/Loader/Loader';
import { GoArrowLeft } from 'react-icons/go';
import notImg from './/..//..//assets/img/not img.png';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const buildLinkClass = to => {
    return clsx(s.btnLink, location.pathname === to && s.moreInfoLinkActive);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataFilm = await getFilmsDetails(movieId);
        setFilm(dataFilm);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const userScore = film ? (Number(film.vote_average) * 10).toFixed(0) : null;

  return (
    <section className={s.movieDetails}>
      <button className={s.btnLink} onClick={() => navigate(backLinkHref)}>
        <GoArrowLeft size='20' /> Go back
      </button>

      {loading && <Loader />}
      {film && (
        <div className={s.movieDetailsSection}>
          <div className={s.movieDetailsThumb}>
            <img
              className={s.movieDetailsImg}
              src={film.poster_path ? `https://image.tmdb.org/t/p/w500/${film.poster_path}` : notImg}
              alt={film.original_title}
              width='350'
              height='500'
            />
            <div>
              <h2 className={s.movieDetailsTitle}>{film.original_title}</h2>
              <p className={s.movieDetailsTagline}>{film.tagline}</p>
              {userScore !== '0' && userScore !== null && (
                <div className={s.movieDetailsScore}>
                  <p className={s.movieDetailsText}>
                    <span className={s.spanAccent}>User Score:</span> {userScore}&#37;
                  </p>
                  <span className={userScore < 60 ? s.iconSpilled : s.iconUpright}></span>
                </div>
              )}
              <h3 className={s.movieDetailsTitleFilm}>Overview</h3>
              <p className={`${s.movieDetailsText} ${s.forLaptop}`}>{film.overview}</p>
              <h3 className={s.movieDetailsTitleFilm}>Genres</h3>
              <ul className={s.movieDetailsGenresList}>
                {film.genres.map(genre => (
                  <li className={s.movieDetailsText} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <nav className={s.moreInfo}>
            <NavLink className={buildLinkClass(`/movies/${movieId}/cast`)} to={'cast'} state={location.state}>
              Cast
            </NavLink>
            <NavLink className={buildLinkClass(`/movies/${movieId}/reviews`)} to={'reviews'} state={location.state}>
              Reviews
            </NavLink>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </section>
  );
};

export default MovieDetailsPage;
