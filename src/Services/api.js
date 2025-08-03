// BASE DA URL: https://api.themoviedb.org/3/

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=9b3e56022302e7fd35df05ba0bb010d3&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;