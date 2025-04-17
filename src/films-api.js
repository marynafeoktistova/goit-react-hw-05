import axios from 'axios';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzI2MTg3MzFjYmRiN2ExMzVkMzc4OWZiZjIyOWRiMSIsIm5iZiI6MTc0NDg3ODIzOS4zNDgsInN1YiI6IjY4MDBiYTlmZTQ3NTM0MjVlZmFjZTlkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YiXlY6x6k5hvONra9IbVSTyR1h7614djyMxzGHl3paE';

export const getFilmsTrendingAccess = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
