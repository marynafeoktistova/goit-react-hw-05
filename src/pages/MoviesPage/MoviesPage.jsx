import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieList from '../../components/MovieList/MovieList';
import { getFilmsSearch } from '../../films-api';
import { Toaster, toast } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchResults([]);
    const searchData = async (query, page) => {
      try {
        setLoading(true);

        const response = await getFilmsSearch(query, page);
        setSearchResults(response.results);
        setTotalPages(response.total_pages);

        if (!response.total_results) {
          toast('Sorry, we have not found the films for your request. Try to write it differently.', {
            duration: 5000,
          });
        } else {
          toast.success(`Wow! We found ${response.total_results} films`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      searchData(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <main>
      <section className={s.moviesSearch}>
        <SearchBox onSubmit={query => setSearchParams({ search: query })} />
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            className: s.toastTextCenter,
          }}
        />
        {loading && <Loader />}
        {searchResults.length !== 0 && <MovieList filmsList={searchResults} />}
        {searchResults.length !== 0 && (
          <div className={s.btnPaginationThumb}>
            <button className={s.btnPagination} onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button className={s.btnPagination} onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next Page
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default MoviesPage;
