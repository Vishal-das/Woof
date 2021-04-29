import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homepage/home/home.component';
import { LoginComponent } from './Homepage/login/login.component';
import { PageNotFoundComponent } from './Homepage/page-not-found/page-not-found.component';
import { RegistrationComponent } from './Homepage/registration/registration.component';
import { AddWalkerRequestComponent } from './users/add-walker-request/add-walker-request.component';
import { AppointmentsComponent } from './users/appointments/appointments.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { ShopComponent } from './users/shop/shop.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"user", component:UsersComponent},
  {path:"homepage", component:HomeComponent},
  {path:"userHomepage", component:UsersComponent},
  {path:"addRequest", component:AddWalkerRequestComponent},
  {path:"editProfile", component:EditProfileComponent},
  {path:"addAppointments", component:AppointmentsComponent},
  {path:"shop",component:ShopComponent},
  {path:"",redirectTo:"/homepage",pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,
                                  RegistrationComponent,
                                  UsersComponent,
                                  HomeComponent,
                                  UsersComponent,
                                  AddWalkerRequestComponent,
                                  EditProfileComponent,AppointmentsComponent,ShopComponent];
