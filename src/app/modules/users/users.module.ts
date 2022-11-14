import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UsersResolver, UsersService} from "./services";
import { SelectedUserComponent } from './pages/selected-user/selected-user.component';
import {FormsModule} from "@angular/forms";
import { SearchedUsersComponent } from './components/searched-users/searched-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersPageComponent,
    UserComponent,
    UserFormComponent,
    SelectedUserComponent,
    SearchedUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers:[
    UsersService,
    UsersResolver
  ]
})
export class UsersModule { }
