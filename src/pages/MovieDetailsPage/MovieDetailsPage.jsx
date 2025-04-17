import { NavLink, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
      <h2>Movies</h2>

      <nav>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
