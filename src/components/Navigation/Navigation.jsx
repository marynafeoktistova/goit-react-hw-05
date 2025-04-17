import { Link, NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/movies'>
          Movies
        </NavLink>
        <NavLink to='*' className={setActiveClass}>
          NotFoundPage
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
