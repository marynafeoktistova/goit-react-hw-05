import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import { lazy, Suspense } from 'react';

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
