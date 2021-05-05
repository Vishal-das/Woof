import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"user", component:UsersComponent},
  {path:"homepage", component:HomeComponent},
  {path:"",redirectTo:"/homepage",pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,RegistrationComponent,UsersComponent,HomeComponent];
