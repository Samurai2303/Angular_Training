import {environment} from "../../environments/environment";

let {API} = environment;

let urls = {
  popular: `${API}/movie/popular`,
  poster: 'https://image.tmdb.org/t/p/w500',
  discover: `${API}/discover/movie`,
  search: `${API}/search/movie`,
  genres: `${API}/genre/movie/list`
}

export {urls};
