const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`);
  return response.json();
}

export async function fetchMoviesByQuery(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.API_KEY}&query=${query}`);
  return response.json();
}
