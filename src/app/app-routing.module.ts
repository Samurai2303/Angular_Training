import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'films', pathMatch: "full"},
      {path: 'films', loadChildren: () => import('./modules/films/films.module').then(value => value.FilmsModule)},
      {path: 'filmInfo', loadChildren: () => import('./modules/film-info/film-info.module').then(value => value.FilmInfoModule)},
      {path: 'favorites', loadChildren: () => import('./modules/favorites/favorites.module').then(value => value.FavoritesModule)},
      {path: 'userInfo', loadChildren: () => import('./modules/user-info/user-info.module').then(value => value.UserInfoModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
