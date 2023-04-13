import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilmsService, GenresService} from "../../services";
import {IGenres} from "../../interfaces";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  form: FormGroup;
  genres: IGenres;
  genresState = 'closed';

  constructor(private filmsService: FilmsService, private genresService: GenresService) {
    this._initForm()
  }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(value => this.genres = value);
  }

  _initForm(): void {
    this.form = new FormGroup(
      {
        yearInput: new FormControl()
      }
    )
  }

  openClose():void {
    this.genresState === 'closed' ? this.genresState = 'opened' : this.genresState = 'closed';
  }
}
