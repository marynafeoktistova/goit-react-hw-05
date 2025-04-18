import s from './MovieCastItem.module.css';
import notImg from '../../assets/img/not img.png';

const MovieCastItem = ({ dataCast: { profile_path, name, character } }) => {
  const urlImg = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : notImg;
  return (
    <div>
      <img className={s.castImg} src={urlImg} alt={name} width='200' height='300' />
      <div className={s.castItemThumb}>
        <h3 className={s.castItemTitle}>{name}</h3>
        <p className={s.castItemCharacter}>
          <span className={s.castItemSpan}>Character:</span> {character}
        </p>
      </div>
    </div>
  );
};

export default MovieCastItem;
