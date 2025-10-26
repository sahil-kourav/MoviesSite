const API_KEY = "84792224a1033ac833bb231a64b6f288";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&lanague=en-US`
        );

        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};

export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&lanague=en-US&page=1`
        );

        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};


export const fetchTopRatedMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&lanague=en-US&page=1`
        );

        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};



export const fetchMoviesByGenre = async (genreId) => {
    try {
        const response = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&lanague=en-US&with_genres=${genreId}&page=1`
        );

        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};




export const fetchGenres = async () => {
    try {
      const response = await fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&lanague=en-US`
        );

        const data = await response.json();
        return data.genres; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&lanague=en-US`
        );

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};


export const searchMovies = async (query) => {
    try {
      const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&lanague=en-US&query=${query}&page=1&include_adult=false`
        );

        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
};


export const getImageURL = (path, size = "original") => {
  if (!path) {
    return "https://via.placeholder.com/400x600?text=No+Image+Available";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
};