import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IFilms} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  page = new BehaviorSubject<number>(1);
  sortBy = new BehaviorSubject<string>('popularity.desc');
  adult = new BehaviorSubject<boolean>(false);
  year = new BehaviorSubject<number | null>(null);
  averageVote = new BehaviorSubject<number>(0);
  genres = new BehaviorSubject<string | null>(null);
  query = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) {
  }

  getPage(): Observable<number> {
    return this.page.asObservable();
  }

  setPage(number: number): void {
    this.page.next(number);
  }

  setSort(str: string): void {
    this.sortBy.next(str);
  }

  setAdult(bool: boolean): void {
    this.adult.next(bool);
  }

  setYear(value: number | null): void {
    this.year.next(value);
  }

  setAverageVote(number: number): void {
    this.averageVote.next(number)
  }

  setGenres(str: string): void {
    this.genres.next(str);
  }

  setQuery(str: string): void {
    this.query.next(str);
  }



  getPopular(): Observable<IFilms> {
    return this.httpClient.get<IFilms>(urls.popular);
  }

  discover(): Observable<IFilms> {
    return this.httpClient.get<IFilms>(`${urls.discover}?page=${this.page}&sort_by=${this.sortBy}&year=${this.year}&include_adult=${this.adult}&vote_average.gte=${this.averageVote}&with_genres=${this.genres}`);
  }

  searchMovies(query: string): Observable<IFilms> {
    return this.httpClient.get<IFilms>(`${urls.search}?query=${this.query}`);
  }


}
