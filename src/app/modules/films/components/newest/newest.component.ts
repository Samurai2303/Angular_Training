import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services";
import {IFilms} from "../../interfaces";

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  films: IFilms;

  constructor(private filmsService:FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getPopular().subscribe(value => {
      this.films = value;
      console.log(value);
    });
  }

}
