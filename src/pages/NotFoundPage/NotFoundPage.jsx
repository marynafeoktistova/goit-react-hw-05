import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';
import notFoundPage from '..//..//assets/img/image-not-found.png';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section className={s.containerNotFound}>
      <div className={s.notFound}>
        <h1 className={s.notFoundTitle}>404</h1>

        <img className={s.notFoundImg} src={notFoundPage} alt='not found page' />
        <h2 className={s.notFoundTitleInform}>Page not found</h2>

        <p className={s.notFoundMessage}>We`re sorry, the page you requesterd could not be found</p>
        <Link to={backLinkHref}>
          <button className={s.notFoundBtn}>Go to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
