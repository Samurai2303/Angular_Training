import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { NewestComponent } from './components/newest/newest.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { NewestFilmComponent } from './components/newest-film/newest-film.component';


@NgModule({
  declarations: [
    FilmsPageComponent,
    FiltersComponent,
    FilmsComponent,
    FilmComponent,
    NewestComponent,
    NewestFilmComponent
  ],
    imports: [
        CommonModule,
        FilmsRoutingModule,
        MatSidenavModule,
        MatButtonModule
    ]
})
export class FilmsModule { }
