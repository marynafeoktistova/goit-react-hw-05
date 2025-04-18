import s from './MovieItem.module.css';
import notFoundImg from '../../assets/img/image-not-found.jpg';

const MovieItem = ({ dataFilm: { poster_path, title, vote_average } }) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}   : notFoundImg;`;
  const voteAverage = Number(vote_average).toFixed(2);
  return (
    <div>
      <img className={s.movieImg} src={poster_path ? urlImg : notFoundImg} alt={title} width='350' height='500' />
      <div className={s.trandingThumb}>
        <h3 className={s.trandingTitle}>{title}</h3>
        {voteAverage !== '0.00' && <p className={s.trandingText}>Rating: {voteAverage}</p>}
      </div>
    </div>
  );
};

export default MovieItem;
