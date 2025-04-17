import { useEffect, useState } from 'react';
import { getFilmsTrendingAccess } from '../../films-api';
import MovieList from '../../components/MovieList.jsx/MovieList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const dataFilms = async () => {
      try {
        const films = await getFilmsTrendingAccess();
        setFilms(films);
      } catch (error) {
        console.log(error);
      }
    };
    dataFilms();
  });

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList filmsList={films} />
    </main>
  );
};

export default HomePage;
