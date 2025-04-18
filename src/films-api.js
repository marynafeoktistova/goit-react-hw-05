import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzI2MTg3MzFjYmRiN2ExMzVkMzc4OWZiZjIyOWRiMSIsIm5iZiI6MTc0NDg3ODIzOS4zNDgsInN1YiI6IjY4MDBiYTlmZTQ3NTM0MjVlZmFjZTlkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YiXlY6x6k5hvONra9IbVSTyR1h7614djyMxzGHl3paE';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: 'application/json',
  },
});

export const getFilmsTrendingAccess = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day', {
      params: { language: 'en-US' },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFilmsDetails = async (id, codeWord = '') => {
  if (!id) {
    throw new Error('Movie ID is required');
  }
  try {
    const response = await axiosInstance.get(`/movie/${id}${codeWord}`, {
      params: { language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching film details:', error);
  }
};

export const getFilmsSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
