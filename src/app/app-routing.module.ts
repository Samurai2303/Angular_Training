import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'home', pathMatch:"full"},
      {path:'home', component:HomePageComponent},
      {path:'users', loadChildren:() => import('./modules/users/users.module').then(value => value.UsersModule)},
      {path:'posts', loadChildren:() => import('./modules/posts/posts.module').then(value => value.PostsModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
