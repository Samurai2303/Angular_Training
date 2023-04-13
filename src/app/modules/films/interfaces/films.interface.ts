import {IFilm} from "./film.interface";

export interface IFilms {
  page: number
  results: IFilm[]
  total_results: number
  total_pages: number
}
