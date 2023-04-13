import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../interfaces";
import {urls} from "../../../../configs";

@Component({
  selector: 'app-newest-film',
  templateUrl: './newest-film.component.html',
  styleUrls: ['./newest-film.component.css']
})
export class NewestFilmComponent implements OnInit {
  @Input()
  film: IFilm;

  posterUrl:string

  constructor() {
  }

  ngOnInit(): void {
    this.posterUrl = `${urls.poster}${this.film.poster_path}`;
  }

}
