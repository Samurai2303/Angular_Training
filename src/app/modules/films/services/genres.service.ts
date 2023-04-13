import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IGenres} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }

  getGenres(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres);
  }


}
