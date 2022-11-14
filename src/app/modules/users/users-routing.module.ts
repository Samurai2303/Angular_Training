import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UsersResolver} from "./services";
import {SelectedUserComponent} from "./pages/selected-user/selected-user.component";
import {UserGuard} from "./guards/user.guard";

const routes: Routes = [
  {path:'', component:UsersPageComponent, resolve:{users:UsersResolver}},
  {path:':id', component:SelectedUserComponent, canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
