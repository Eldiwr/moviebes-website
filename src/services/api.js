import axios from "axios";

const API_KEY = '64d6e48eb0f228948a0484363da88192';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = () => {
    const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    
    return axios.get(URL).then(response => response.data);
};

export const getMoviesByName = (name) => {
    const URL = `${BASE_URL}/search/movie?query=${name}&api_key=${API_KEY}&include_adult=false`;

    return axios.get(URL).then(response => response.data);
};

export const getMovieDetail = (movieId) => {
    const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

    return axios.get(URL).then(response => response.data);
};

export const getMovieCast = (movieId) => {
    const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

    return axios.get(URL).then(response => response.data);
};

export const getMovieReviews = (movieId) => {
    const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

    return axios.get(URL).then(response => response.data);
};


